import React, { useState } from 'react';
import { PiggyBank, TrendingUp, Clock, Shield, DollarSign } from 'lucide-react';

const Lend: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lend' | 'borrowed'>('lend');

  const lendingPools = [
    { asset: 'ATOM', apy: '12.5%', tvl: '$2.3M', available: '$450K', collateral: '125%' },
    { asset: 'OSMO', apy: '15.8%', tvl: '$1.8M', available: '$320K', collateral: '130%' },
    { asset: 'USDC', apy: '8.2%', tvl: '$5.1M', available: '$1.2M', collateral: '110%' },
    { asset: 'JUNO', apy: '18.3%', tvl: '$850K', available: '$180K', collateral: '140%' },
  ];

  const myPositions = [
    { asset: 'ATOM', supplied: '125.0', earned: '15.6', apy: '12.5%', status: 'Active' },
    { asset: 'USDC', supplied: '2,500', earned: '205.0', apy: '8.2%', status: 'Active' },
    { asset: 'OSMO', supplied: '850.0', earned: '134.4', apy: '15.8%', status: 'Active' },
  ];

  const borrowPositions = [
    { asset: 'USDC', borrowed: '1,200', debt: '98.4', ltv: '65%', liquidation: '$0.85', status: 'Safe' },
    { asset: 'ATOM', borrowed: '50.0', debt: '8.2', ltv: '45%', liquidation: '$6.50', status: 'Safe' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Lending & Borrowing</h1>
        <div className="flex bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('lend')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'lend' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Lending
          </button>
          <button
            onClick={() => setActiveTab('borrowed')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'borrowed' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Borrowing
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <PiggyBank className="h-8 w-8 text-green-400" />
            <span className="text-2xl">🏦</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$3,475.00</div>
          <div className="text-gray-400 text-sm">Total Supplied</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">💎</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$355.00</div>
          <div className="text-gray-400 text-sm">Total Earned</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-red-400" />
            <span className="text-2xl">📊</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$1,250.00</div>
          <div className="text-gray-400 text-sm">Total Borrowed</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Shield className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">🛡️</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">155%</div>
          <div className="text-gray-400 text-sm">Health Factor</div>
        </div>
      </div>

      {activeTab === 'lend' ? (
        <>
          {/* Available Lending Pools */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Available Lending Pools</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-slate-700">
                    <th className="pb-3">Asset</th>
                    <th className="pb-3">APY</th>
                    <th className="pb-3">TVL</th>
                    <th className="pb-3">Available</th>
                    <th className="pb-3">Collateral Factor</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lendingPools.map((pool, index) => (
                    <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {pool.asset[0]}
                          </div>
                          <span className="font-semibold text-white">{pool.asset}</span>
                        </div>
                      </td>
                      <td className="py-4 text-green-400 font-semibold">{pool.apy}</td>
                      <td className="py-4 text-gray-300">{pool.tvl}</td>
                      <td className="py-4 text-gray-300">{pool.available}</td>
                      <td className="py-4 text-gray-300">{pool.collateral}</td>
                      <td className="py-4">
                        <button className="px-4 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg transition-colors">
                          Supply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* My Lending Positions */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">My Lending Positions</h2>
            <div className="space-y-4">
              {myPositions.map((position, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-linear-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {position.asset[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{position.asset}</div>
                      <div className="text-gray-400 text-sm">Supplied: {position.supplied}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-400">+{position.earned}</div>
                    <div className="text-gray-400 text-sm">APY: {position.apy}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors">
                      Withdraw
                    </button>
                    <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors">
                      Add More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Borrowing Positions */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">My Borrowing Positions</h2>
            <div className="space-y-4">
              {borrowPositions.map((position, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-linear-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {position.asset[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{position.asset}</div>
                      <div className="text-gray-400 text-sm">Borrowed: {position.borrowed}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-red-400">-{position.debt}</div>
                    <div className="text-gray-400 text-sm">Monthly Interest</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white">{position.ltv}</div>
                    <div className="text-gray-400 text-sm">LTV Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white">{position.liquidation}</div>
                    <div className="text-gray-400 text-sm">Liquidation Price</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors">
                      Repay
                    </button>
                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors">
                      Borrow More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lend;