import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Wallet, ArrowRight, Loader2 } from "lucide-react";
import { useWallet } from "../context/WalletContext";

const Login: React.FC = () => {
  const { connect, isConnected } = useWallet();
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState<"keplr" | null>(null);

  React.useEffect(() => {
    if (isConnected) {
      navigate("/dashboard");
    }
  }, [isConnected, navigate]);

  const handleConnect = async (type: "keplr") => {
    setConnecting(type);
    try {
      await connect(type);
    } catch (error) {
      console.error("Connection failed:", error);
    } finally {
      setConnecting(null);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
            RealFin
          </h1>
          <p className="text-xl text-gray-400">Your Gateway to Decentralized Finance</p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-xl">
          <h2 className="mb-6 text-center text-2xl font-semibold text-white">Connect Your Wallet</h2>

          <div className="space-y-4">
            <button
              onClick={() => handleConnect("keplr")}
              disabled={connecting !== null}
              className="flex w-full transform items-center justify-between rounded-xl bg-linear-to-r from-blue-600 to-blue-700 p-4 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-500 hover:to-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <div className="flex items-center">
                <Wallet className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="font-semibold">Keplr Wallet</div>
                  <div className="text-sm text-blue-100">Connect with Keplr extension</div>
                </div>
              </div>
              {connecting === "keplr" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="mt-8 rounded-xl bg-slate-700/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-white">Why Connect?</h3>
            <ul className="space-y-1 text-xs text-gray-400">
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
