import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import {
  Wallet,
  Shield,
  PiggyBank,
  Banknote,
  TrendingUp,
  Bitcoin,
  Building2,
  Database,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useWallet } from "../context/WalletContext";

const Layout: React.FC = () => {
  const { isConnected, walletAddress, walletType, disconnect } = useWallet();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isConnected) {
      navigate("/login");
    }
  }, [isConnected, navigate]);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Wallet },
    { name: "Lend", href: "/lend", icon: PiggyBank },
    { name: "Stake", href: "/stake", icon: Shield },
    { name: "Bonds", href: "/bonds", icon: Banknote },
    { name: "Stocks", href: "/stocks", icon: TrendingUp },
    { name: "Crypto", href: "/crypto", icon: Bitcoin },
    { name: "RWA", href: "/rwa", icon: Building2 },
    { name: "Chain Data", href: "/chain-data", icon: Database }
  ];

  const handleLogout = () => {
    disconnect();
    navigate("/login");
  };

  if (!isConnected) {
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div
          className="bg-opacity-75 fixed inset-0 bg-gray-600"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="fixed top-0 left-0 h-full w-64 bg-slate-800 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700 p-4">
            <h1 className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              RealFin
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-8 px-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setSidebarOpen(false);
                  }}
                  className={`mb-2 flex w-full items-center rounded-lg px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden w-64 border-r border-slate-700 bg-slate-800 lg:block">
        <div className="border-b border-slate-700 p-6">
          <h1 className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
            RealFin
          </h1>
        </div>

        <nav className="mt-8 px-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`mb-2 flex w-full items-center rounded-lg px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-64 border-t border-slate-700 p-4">
          <div className="mb-4 rounded-lg bg-slate-700 p-4">
            <div className="mb-1 text-sm text-gray-400">Connected with {walletType}</div>
            <div className="font-mono text-xs text-gray-500">{walletAddress}</div>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center rounded-lg px-4 py-3 text-gray-400 transition-colors hover:bg-slate-700 hover:text-white"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Disconnect
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="border-b border-slate-700 bg-slate-800 px-4 py-4 lg:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden text-gray-400 lg:block">Welcome to your RealFin dashboard</div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                {walletType?.charAt(0).toUpperCase() + walletType?.slice(1)} Connected
              </div>
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
