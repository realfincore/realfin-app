import React, { useEffect, useState } from "react";
import { Database, Activity, Users, Zap, TrendingUp, Clock, Globe, Server } from "lucide-react";
import { useWallet } from "../context/WalletContext";
import { toHex } from "@cosmjs/encoding";
import { StringUtils } from "../utils/StringUtils";

const ChainData: React.FC = () => {
  const [selectedChain, setSelectedChain] = useState<string>("realfin");
  const [recentBlocks, setRecentBlocks] = useState<{ height: number; time: string; validator: string; hash: string }[]>(
    []
  );
  const { wallet } = useWallet();

  const [chainMetrics, setChainMetrics] = useState({
    realfin: {
      name: "Realfin",
      blockHeight: "-",
      blockTime: "1s",
      validators: "1",
      bondedTokens: "72,234,567 RLF",
      bondingRate: "68.3%",
      inflation: "7.5%",
      communityPool: "892,345 RLF",
      avgGas: "0.025 RLF",
      proposals: "1",
      transactions24h: "8,984"
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blockchain, status, block] = (await wallet?.getNetworkData?.()) ?? [];
        const blocks = (blockchain?.blockMetas ?? []).map((item) => {
          return {
            height: item.header.height,
            time: item.header.time.toLocaleDateString(),
            hash: StringUtils.truncateString(toHex(item.header.lastBlockId?.hash!), 8, 16),
            validator: StringUtils.truncateString(toHex(item.header.validatorsHash!), 8, 16)
          };
        });
        setRecentBlocks(blocks);
        setChainMetrics({
          realfin: {
            ...chainMetrics.realfin,
            blockHeight: `${blockchain?.lastHeight ?? "-"} `
          }
        });
      } catch (err) {
        console.error("Error loading:", err);
      }
    };

    fetchData();
  }, []);

  const chains = ["realfin"];
  const currentChain = chainMetrics[selectedChain as keyof typeof chainMetrics] || chainMetrics.realfin;

  const networkStats = [
    {
      title: "Active Validators",
      value: currentChain.validators,
      positive: true,
      icon: Server,
      color: "text-blue-400"
    },
    {
      title: "24h Transactions",
      value: currentChain.transactions24h,
      positive: true,
      icon: Activity,
      color: "text-green-400"
    },
    {
      title: "Avg Block Time",
      value: currentChain.blockTime,
      positive: true,
      icon: Clock,
      color: "text-purple-400"
    },
    {
      title: "Bonding Rate",
      value: currentChain.bondingRate,
      positive: true,
      icon: TrendingUp,
      color: "text-orange-400"
    }
  ];

  const topValidators = [
    { name: "Realfin Validator 1", voting_power: "8.5%", commission: "5.0%", uptime: "99.8%", status: "Active" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Chain Data Analytics</h1>
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white capitalize outline-none focus:border-blue-500"
        >
          {chains.map((chain) => (
            <option
              key={chain}
              value={chain}
              className="capitalize"
            >
              {chain}
            </option>
          ))}
        </select>
      </div>

      {/* Network Overview */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 flex items-center text-xl font-semibold text-white">
          <Globe className="mr-2 h-6 w-6" />
          {currentChain.name} Network Overview
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {networkStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="mb-1 text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
          <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
            <Database className="mr-2 h-5 w-5" />
            Blockchain Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Block Height</span>
              <span className="font-mono text-white">{currentChain.blockHeight}</span>
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

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
          <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
            <Activity className="mr-2 h-5 w-5" />
            Network Health
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Network Status</span>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-green-400">Healthy</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Avg TPS</span>
              <span className="text-white">24 tx/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network Uptime</span>
              <span className="text-green-400">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Missed Blocks</span>
              <span className="text-white">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Jailed Validators</span>
              <span className="text-white">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Blocks */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
          <Zap className="mr-2 h-5 w-5" />
          Recent Blocks
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-gray-400">
                <th className="pb-3">Height</th>
                <th className="pb-3">Time</th>
                <th className="pb-3">Validator</th>
                <th className="pb-3">Hash</th>
              </tr>
            </thead>
            <tbody>
              {recentBlocks.map((block, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20"
                >
                  <td className="py-3 font-mono text-white">{block.height}</td>
                  <td className="py-3 text-gray-300">{block.time}</td>
                  <td className="py-3 text-gray-300">{block.validator}</td>
                  <td className="py-3 font-mono text-gray-400">{block.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Validators */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
          <Users className="mr-2 h-5 w-5" />
          Top Validators
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-gray-400">
                <th className="pb-3">Validator</th>
                <th className="pb-3">Voting Power</th>
                <th className="pb-3">Commission</th>
                <th className="pb-3">Uptime</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {topValidators.map((validator, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20"
                >
                  <td className="py-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <span className="text-white">{validator.name}</span>
                    </div>
                  </td>
                  <td className="py-3 font-semibold text-blue-400">{validator.voting_power}</td>
                  <td className="py-3 text-gray-300">{validator.commission}</td>
                  <td className="py-3 text-green-400">{validator.uptime}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-green-600 px-2 py-1 text-xs text-white">{validator.status}</span>
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
