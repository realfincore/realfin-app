import React, { createContext, useContext, useState, ReactNode } from "react";
import { authenticateKeplr } from "../wallet/auth";
import { BaseWallet } from "../wallet/BaseWallet";

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  walletType: "keplr" | null;
  connect: (type: "keplr") => Promise<void>;
  disconnect: () => void;
  wallet: BaseWallet | null;
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
  const [wallet, setWallet] = useState<BaseWallet | null>(null);

  const connect = async (type: "keplr") => {
    const w = await authenticateKeplr();
    setIsConnected(true);
    setWalletType(type);
    setWalletAddress(`${w.address.slice(0, 8)}...${w.address.slice(-8)}`);
    setWallet(w);
  };

  const disconnect = () => {
    setIsConnected(false);
    setWalletAddress(null);
    setWalletType(null);
    setWallet(null);
  };

  return (
    <WalletContext.Provider
      value={{
        wallet,
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
