import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Wallet, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

const Login: React.FC = () => {
  const { connect, isConnected } = useWallet();
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState<'keplr' | 'ledger' | null>(null);

  React.useEffect(() => {
    if (isConnected) {
      navigate('/dashboard');
    }
  }, [isConnected, navigate]);

  const handleConnect = async (type: 'keplr' | 'ledger') => {
    setConnecting(type);
    try {
      await connect(type);
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setConnecting(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Real Fin
          </h1>
          <p className="text-xl text-gray-400">
            Your Gateway to Decentralized Finance
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Connect Your Wallet
          </h2>
          
          <div className="space-y-4">
            <button
              onClick={() => handleConnect('keplr')}
              disabled={connecting !== null}
              className="w-full flex items-center justify-between p-4 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center">
                <Wallet className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Keplr Wallet</div>
                  <div className="text-blue-100 text-sm">Connect with Keplr extension</div>
                </div>
              </div>
              {connecting === 'keplr' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => handleConnect('ledger')}
              disabled={connecting !== null}
              className="w-full flex items-center justify-between p-4 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center">
                <Shield className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Ledger Wallet</div>
                  <div className="text-purple-100 text-sm">Connect with Ledger device</div>
                </div>
              </div>
              {connecting === 'ledger' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="mt-8 p-4 bg-slate-700/50 rounded-xl">
            <h3 className="text-sm font-semibold text-white mb-2">Why Connect?</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Access your portfolio and balances</li>
              <li>• Trade stocks, crypto, and bonds</li>
              <li>• Stake and lend your assets</li>
              <li>• Explore Real World Assets (RWA)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;