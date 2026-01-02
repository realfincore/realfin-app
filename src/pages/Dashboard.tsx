import React from "react";
import { Wallet, TrendingUp, TrendingDown, DollarSign, Percent, Clock } from "lucide-react";

const Dashboard: React.FC = () => {
  const balances = [
    { token: "ATOM", balance: "1,234.56", value: "$8,945.67", change: "+5.2%", positive: true },
    { token: "OSMO", balance: "5,678.90", value: "$12,345.78", change: "-2.1%", positive: false },
    { token: "JUNO", balance: "987.65", value: "$3,456.78", change: "+8.5%", positive: true },
    { token: "STARS", balance: "15,432.10", value: "$567.89", change: "+1.8%", positive: true }
  ];

  const stakingData = [
    { validator: "Cosmos Validator 1", amount: "500 ATOM", rewards: "12.5 ATOM", apy: "18.5%" },
    { validator: "Osmosis Pool #1", amount: "2,000 OSMO", rewards: "45.2 OSMO", apy: "22.1%" },
    { validator: "Juno Staking", amount: "300 JUNO", rewards: "8.7 JUNO", apy: "15.3%" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Portfolio Dashboard</h1>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">$24,356.12</div>
          <div className="flex items-center text-sm text-green-400">
            <TrendingUp className="mr-1 h-4 w-4" />
            +12.3% (24h)
          </div>
        </div>
      </div>

      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500">
          <div className="mb-4 flex items-center justify-between">
            <Wallet className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">💰</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$18,750.23</div>
          <div className="text-sm text-gray-400">Total Balance</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-green-500">
          <div className="mb-4 flex items-center justify-between">
            <DollarSign className="h-8 w-8 text-green-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$5,605.89</div>
          <div className="text-sm text-gray-400">Staked Assets</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-purple-500">
          <div className="mb-4 flex items-center justify-between">
            <Percent className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">🎯</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">18.7%</div>
          <div className="text-sm text-gray-400">Avg. APY</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-orange-500">
          <div className="mb-4 flex items-center justify-between">
            <Clock className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">⏰</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$156.78</div>
          <div className="text-sm text-gray-400">Daily Rewards</div>
        </div>
      </div>

      {/* Token Balances */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">Token Balances</h2>
        <div className="space-y-4">
          {balances.map((token, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 font-bold text-white">
                  {token.token[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{token.token}</div>
                  <div className="text-sm text-gray-400">{token.balance}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">{token.value}</div>
                <div className={`flex items-center text-sm ${token.positive ? "text-green-400" : "text-red-400"}`}>
                  {token.positive ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                  {token.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staking Overview */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">Active Stakes</h2>
        <div className="space-y-4">
          {stakingData.map((stake, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
            >
              <div>
                <div className="font-semibold text-white">{stake.validator}</div>
                <div className="text-sm text-gray-400">{stake.amount}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-400">{stake.rewards}</div>
                <div className="text-sm text-gray-400">APY: {stake.apy}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
