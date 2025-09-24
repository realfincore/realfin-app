import React, { createContext, useContext, useState, ReactNode } from "react";
import { authenticateKeplr } from "../wallet/auth";
import { coin } from "@cosmjs/stargate";
import { REALFINHUB } from "../wallet/chainInfo";

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  walletType: "keplr" | null;
  connect: (type: "keplr") => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<"keplr" | null>(null);

  const connect = async (type: "keplr") => {
    const wallet = await authenticateKeplr();
    setIsConnected(true);
    setWalletType(type);
    setWalletAddress(`${wallet.address.slice(0, 8)}...${wallet.address.slice(-8)}`);
  };

  const disconnect = () => {
    setIsConnected(false);
    setWalletAddress(null);
    setWalletType(null);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        walletType,
        connect,
        disconnect
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
