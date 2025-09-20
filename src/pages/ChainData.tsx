import React, { useState } from 'react';
import { Database, Activity, Users, Zap, TrendingUp, Clock, Globe, Server } from 'lucide-react';

const ChainData: React.FC = () => {
  const [selectedChain, setSelectedChain] = useState<string>('cosmos');

  const chains = ['cosmos', 'osmosis', 'juno', 'stargaze', 'akash'];

  const chainMetrics = {
    cosmos: {
      name: 'Cosmos Hub',
      blockHeight: '18,542,890',
      blockTime: '6.8s',
      validators: '175',
      bondedTokens: '281,234,567 ATOM',
      bondingRate: '68.3%',
      inflation: '14.5%',
      communityPool: '892,345 ATOM',
      avgGas: '0.025 ATOM',
      proposals: '89',
      transactions24h: '125,678'
    },
    osmosis: {
      name: 'Osmosis',
      blockHeight: '12,345,678',
      blockTime: '5.9s',
      validators: '150',
      bondedTokens: '445,678,901 OSMO',
      bondingRate: '72.1%',
      inflation: '18.2%',
      communityPool: '2,345,678 OSMO',
      avgGas: '0.01 OSMO',
      proposals: '67',
      transactions24h: '89,456'
    },
    juno: {
      name: 'Juno Network',
      blockHeight: '9,876,543',
      blockTime: '6.2s',
      validators: '125',
      bondedTokens: '78,901,234 JUNO',
      bondingRate: '65.8%',
      inflation: '10.5%',
      communityPool: '456,789 JUNO',
      avgGas: '0.03 JUNO',
      proposals: '45',
      transactions24h: '34,567'
    },
  };

  const currentChain = chainMetrics[selectedChain as keyof typeof chainMetrics] || chainMetrics.cosmos;

  const networkStats = [
    {
      title: 'Active Validators',
      value: currentChain.validators,
      change: '+2.3%',
      positive: true,
      icon: Server,
      color: 'text-blue-400'
    },
    {
      title: '24h Transactions',
      value: currentChain.transactions24h,
      change: '+8.7%',
      positive: true,
      icon: Activity,
      color: 'text-green-400'
    },
    {
      title: 'Avg Block Time',
      value: currentChain.blockTime,
      change: '-0.2s',
      positive: true,
      icon: Clock,
      color: 'text-purple-400'
    },
    {
      title: 'Bonding Rate',
      value: currentChain.bondingRate,
      change: '+1.2%',
      positive: true,
      icon: TrendingUp,
      color: 'text-orange-400'
    },
  ];

  const recentBlocks = [
    { height: '18,542,890', time: '6.8s ago', txs: '45', validator: 'Cosmos Validator 1', hash: '0x1a2b3c...' },
    { height: '18,542,889', time: '13.6s ago', txs: '32', validator: 'Stakely', hash: '0x2b3c4d...' },
    { height: '18,542,888', time: '20.4s ago', txs: '67', validator: 'Cosmostation', hash: '0x3c4d5e...' },
    { height: '18,542,887', time: '27.2s ago', txs: '23', validator: 'SG-1', hash: '0x4d5e6f...' },
    { height: '18,542,886', time: '34.0s ago', txs: '54', validator: 'Citadel.one', hash: '0x5e6f7g...' },
  ];

  const topValidators = [
    { name: 'Cosmos Validator 1', voting_power: '8.5%', commission: '5.0%', uptime: '99.8%', status: 'Active' },
    { name: 'Stakely', voting_power: '7.2%', commission: '4.0%', uptime: '99.9%', status: 'Active' },
    { name: 'Cosmostation', voting_power: '6.8%', commission: '3.5%', uptime: '99.7%', status: 'Active' },
    { name: 'SG-1', voting_power: '6.1%', commission: '7.5%', uptime: '99.6%', status: 'Active' },
    { name: 'Citadel.one', voting_power: '5.9%', commission: '5.5%', uptime: '99.5%', status: 'Active' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Chain Data Analytics</h1>
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 outline-none capitalize"
        >
          {chains.map(chain => (
            <option key={chain} value={chain} className="capitalize">
              {chain}
            </option>
          ))}
        </select>
      </div>

      {/* Network Overview */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Globe className="h-6 w-6 mr-2" />
          {currentChain.name} Network Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                  <div className={`text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Database className="h-5 w-5 mr-2" />
            Blockchain Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Block Height</span>
              <span className="text-white font-mono">{currentChain.blockHeight}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Bonded Tokens</span>
              <span className="text-white">{currentChain.bondedTokens}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Inflation Rate</span>
              <span className="text-orange-400">{currentChain.inflation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Community Pool</span>
              <span className="text-white">{currentChain.communityPool}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Average Gas</span>
              <span className="text-white">{currentChain.avgGas}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Active Proposals</span>
              <span className="text-blue-400">{currentChain.proposals}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Network Health
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Network Status</span>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-400">Healthy</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Avg TPS</span>
              <span className="text-white">7.2 tx/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network Uptime</span>
              <span className="text-green-400">99.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Missed Blocks</span>
              <span className="text-white">0.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Jailed Validators</span>
              <span className="text-white">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Blocks */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Zap className="h-5 w-5 mr-2" />
          Recent Blocks
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-slate-700">
                <th className="pb-3">Height</th>
                <th className="pb-3">Time</th>
                <th className="pb-3">Txs</th>
                <th className="pb-3">Validator</th>
                <th className="pb-3">Hash</th>
              </tr>
            </thead>
            <tbody>
              {recentBlocks.map((block, index) => (
                <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                  <td className="py-3 font-mono text-white">{block.height}</td>
                  <td className="py-3 text-gray-300">{block.time}</td>
                  <td className="py-3 text-blue-400">{block.txs}</td>
                  <td className="py-3 text-gray-300">{block.validator}</td>
                  <td className="py-3 font-mono text-gray-400">{block.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Validators */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Top Validators
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-slate-700">
                <th className="pb-3">Validator</th>
                <th className="pb-3">Voting Power</th>
                <th className="pb-3">Commission</th>
                <th className="pb-3">Uptime</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {topValidators.map((validator, index) => (
                <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                  <td className="py-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-white">{validator.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-blue-400 font-semibold">{validator.voting_power}</td>
                  <td className="py-3 text-gray-300">{validator.commission}</td>
                  <td className="py-3 text-green-400">{validator.uptime}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs">
                      {validator.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChainData;