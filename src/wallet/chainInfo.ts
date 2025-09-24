import type { ChainInfo } from "@keplr-wallet/types";

export const REALFINHUB: ChainInfo & {
  gasMultiplier: number;
  gasPrice: string;
  explorer: string;
} = {
  chainId: "realfin",
  chainName: "Realfin",
  rpc: "http://0.0.0.0:26657",
  rest: "http://0.0.0.0:1317",
  bip44: { coinType: 118 },
  bech32Config: {
    bech32PrefixAccAddr: "realfin",
    bech32PrefixAccPub: "realfinpub",
    bech32PrefixValAddr: "realfinvaloper",
    bech32PrefixValPub: "realfinvaloperpub",
    bech32PrefixConsAddr: "realfinvalcons",
    bech32PrefixConsPub: "realfinvalconspub"
  },
  currencies: [{ coinDenom: "RLF", coinMinimalDenom: "urlf", coinDecimals: 6 }],
  feeCurrencies: [{ coinDenom: "RLF", coinMinimalDenom: "urlf", coinDecimals: 6 }],
  stakeCurrency: { coinDenom: "RLF", coinMinimalDenom: "urlf", coinDecimals: 6 },
  features: ["stargate", "ibc-transfer"],
  gasMultiplier: 1,
  gasPrice: "0.003urlf",
  explorer: "/"
};
