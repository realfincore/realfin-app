import type { Window as KeplrWindow } from "@keplr-wallet/types/build/window";
import { REALFINHUB } from "./chainInfo";
import { BaseWallet } from "./BaseWallet";
import { connectComet } from "@cosmjs/tendermint-rpc";

export async function authenticateKeplr() {
  const keplrWindow = window as KeplrWindow;

  if (!keplrWindow.getOfflineSignerAuto || !keplrWindow.keplr) {
    throw new Error("Keplr wallet is not installed.");
  } else if (!keplrWindow.keplr.experimentalSuggestChain) {
    throw new Error("Keplr version is not latest. Please upgrade your Keplr wallet");
  } else {
    try {
      await keplrWindow.keplr?.experimentalSuggestChain(REALFINHUB);
    } catch (e) {
      throw new Error("Failed to fetch suggest chain.");
    }
    await keplrWindow.keplr?.enable(REALFINHUB.chainId);

    if (keplrWindow.getOfflineSignerAuto) {
      const offlineDirectSigner = await keplrWindow.getOfflineSignerAuto(REALFINHUB.chainId);
      const client = await connectComet(REALFINHUB.rpc);
      const wallet = new BaseWallet(
        client,
        offlineDirectSigner,
        {},
        REALFINHUB.rpc,
        REALFINHUB.rest,
        REALFINHUB.bech32Config!.bech32PrefixAccAddr as string,
        REALFINHUB.gasMultiplier,
        REALFINHUB.gasPrice,
        REALFINHUB.explorer
      );
      await wallet.useAccount();
      return wallet;
    }
  }

  throw new Error("Failed to fetch wallet.");
}
