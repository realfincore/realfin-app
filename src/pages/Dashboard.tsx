import React from 'react';
import { Wallet, TrendingUp, TrendingDown, DollarSign, Percent, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  const balances = [
    { token: 'ATOM', balance: '1,234.56', value: '$8,945.67', change: '+5.2%', positive: true },
    { token: 'OSMO', balance: '5,678.90', value: '$12,345.78', change: '-2.1%', positive: false },
    { token: 'JUNO', balance: '987.65', value: '$3,456.78', change: '+8.5%', positive: true },
    { token: 'STARS', balance: '15,432.10', value: '$567.89', change: '+1.8%', positive: true },
  ];

  const stakingData = [
    { validator: 'Cosmos Validator 1', amount: '500 ATOM', rewards: '12.5 ATOM', apy: '18.5%' },
    { validator: 'Osmosis Pool #1', amount: '2,000 OSMO', rewards: '45.2 OSMO', apy: '22.1%' },
    { validator: 'Juno Staking', amount: '300 JUNO', rewards: '8.7 JUNO', apy: '15.3%' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Portfolio Dashboard</h1>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">$24,356.12</div>
          <div className="text-green-400 text-sm flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            +12.3% (24h)
          </div>
        </div>
      </div>

      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Wallet className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">💰</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$18,750.23</div>
          <div className="text-gray-400 text-sm">Total Balance</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-green-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$5,605.89</div>
          <div className="text-gray-400 text-sm">Staked Assets</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Percent className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">18.7%</div>
          <div className="text-gray-400 text-sm">Avg. APY</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Clock className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">⏰</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$156.78</div>
          <div className="text-gray-400 text-sm">Daily Rewards</div>
        </div>
      </div>

      {/* Token Balances */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Token Balances</h2>
        <div className="space-y-4">
          {balances.map((token, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {token.token[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{token.token}</div>
                  <div className="text-gray-400 text-sm">{token.balance}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">{token.value}</div>
                <div className={`text-sm flex items-center ${token.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {token.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                  {token.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staking Overview */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Active Stakes</h2>
        <div className="space-y-4">
          {stakingData.map((stake, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
              <div>
                <div className="font-semibold text-white">{stake.validator}</div>
                <div className="text-gray-400 text-sm">{stake.amount}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-400">{stake.rewards}</div>
                <div className="text-gray-400 text-sm">APY: {stake.apy}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;