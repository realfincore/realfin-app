import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  walletType: 'keplr' | 'ledger' | null;
  connect: (type: 'keplr' | 'ledger') => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<'keplr' | 'ledger' | null>(null);

  const connect = async (type: 'keplr' | 'ledger') => {
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsConnected(true);
    setWalletType(type);
    setWalletAddress(`${type}1234567890abcdef`);
  };

  const disconnect = () => {
    setIsConnected(false);
    setWalletAddress(null);
    setWalletType(null);
  };

  return (
    <WalletContext.Provider value={{
      isConnected,
      walletAddress,
      walletType,
      connect,
      disconnect
    }}>
      {children}
    </WalletContext.Provider>
  );
};