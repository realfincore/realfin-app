import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';
import {
  Wallet,
  PiggyBank,
  Banknote,
  TrendingUp,
  Bitcoin,
  Building2,
  Database,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useWallet } from '../context/WalletContext';

const Layout: React.FC = () => {
  const { isConnected, walletAddress, walletType, disconnect } = useWallet();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    // Allow access without wallet connection
  }, [isConnected, navigate]);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Wallet },
    { name: 'Lend', href: '/lend', icon: PiggyBank },
    { name: 'Bonds', href: '/bonds', icon: Banknote },
    { name: 'Stocks', href: '/stocks', icon: TrendingUp },
    { name: 'Crypto', href: '/crypto', icon: Bitcoin },
    { name: 'RWA', href: '/rwa', icon: Building2 },
    { name: 'Chain Data', href: '/chain-data', icon: Database },
  ];

  const handleLogout = () => {
    disconnect();
    navigate('/login');
  };

  if (!isConnected) {
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed top-0 left-0 w-64 h-full bg-slate-800 shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Real Fin
            </h1>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
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
                  className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 bg-slate-800 border-r border-slate-700">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Real Fin
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
                className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-slate-700">
          <div className="bg-slate-700 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-400 mb-1">Connected with {walletType}</div>
            <div className="text-xs text-gray-500 font-mono">{walletAddress}</div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Disconnect
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="bg-slate-800 border-b border-slate-700 px-4 py-4 lg:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden lg:block text-gray-400">
              Welcome to your Real Fin dashboard
            </div>
            <div className="flex items-center space-x-4">
               <div className="text-sm text-gray-400">
                {walletType?.charAt(0).toUpperCase() + walletType?.slice(1)} Connected
              </div>
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
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
