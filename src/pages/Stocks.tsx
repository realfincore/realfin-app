import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Filter, Search, BarChart3, DollarSign } from 'lucide-react';

const Stocks: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [selectedMarket, setSelectedMarket] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const providers = ['all', 'nasdaq', 'nyse', 'ftse', 'nikkei'];
  const markets = ['all', 'us', 'uk', 'japan', 'europe'];

  const stocks = [
    { 
      symbol: 'AAPL', 
      name: 'Apple Inc.', 
      price: '$175.43', 
      change: '+2.34%', 
      changeValue: '+$4.01',
      positive: true,
      provider: 'nasdaq',
      market: 'us',
      volume: '89.2M',
      marketCap: '$2.74T'
    },
    { 
      symbol: 'MSFT', 
      name: 'Microsoft Corporation', 
      price: '$378.85', 
      change: '+1.87%', 
      changeValue: '+$6.96',
      positive: true,
      provider: 'nasdaq',
      market: 'us',
      volume: '25.1M',
      marketCap: '$2.81T'
    },
    { 
      symbol: 'GOOGL', 
      name: 'Alphabet Inc.', 
      price: '$140.92', 
      change: '-0.85%', 
      changeValue: '-$1.21',
      positive: false,
      provider: 'nasdaq',
      market: 'us',
      volume: '31.4M',
      marketCap: '$1.76T'
    },
    { 
      symbol: 'TSLA', 
      name: 'Tesla Inc.', 
      price: '$248.50', 
      change: '+5.67%', 
      changeValue: '+$13.34',
      positive: true,
      provider: 'nasdaq',
      market: 'us',
      volume: '156.7M',
      marketCap: '$789B'
    },
    { 
      symbol: 'NVDA', 
      name: 'NVIDIA Corporation', 
      price: '$875.28', 
      change: '+3.42%', 
      changeValue: '+$28.95',
      positive: true,
      provider: 'nasdaq',
      market: 'us',
      volume: '42.8M',
      marketCap: '$2.16T'
    },
  ];

  const myPositions = [
    { 
      symbol: 'AAPL', 
      shares: '150', 
      avgPrice: '$165.20', 
      currentPrice: '$175.43', 
      pnl: '+$1,534.50',
      pnlPercent: '+6.19%',
      positive: true
    },
    { 
      symbol: 'MSFT', 
      shares: '75', 
      avgPrice: '$385.00', 
      currentPrice: '$378.85', 
      pnl: '-$461.25',
      pnlPercent: '-1.60%',
      positive: false
    },
    { 
      symbol: 'NVDA', 
      shares: '25', 
      avgPrice: '$820.00', 
      currentPrice: '$875.28', 
      pnl: '+$1,382.00',
      pnlPercent: '+6.74%',
      positive: true
    },
  ];

  const filteredStocks = stocks.filter(stock => {
    const matchesProvider = selectedProvider === 'all' || stock.provider === selectedProvider;
    const matchesMarket = selectedMarket === 'all' || stock.market === selectedMarket;
    const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProvider && matchesMarket && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Stock Market</h1>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">$89,456.78</div>
          <div className="text-green-400 text-sm flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            +$2,455.12 (2.82%)
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">💼</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$89,456</div>
          <div className="text-gray-400 text-sm">Portfolio Value</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">+$2,455</div>
          <div className="text-gray-400 text-sm">Today's Gain</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">📊</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">12</div>
          <div className="text-gray-400 text-sm">Holdings</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">⚖️</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">65%</div>
          <div className="text-gray-400 text-sm">Win Rate</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />
            
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Provider:</span>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="bg-slate-700 text-white px-3 py-2 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              >
                {providers.map(provider => (
                  <option key={provider} value={provider} className="capitalize">
                    {provider}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Market:</span>
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="bg-slate-700 text-white px-3 py-2 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              >
                {markets.map(market => (
                  <option key={market} value={market} className="uppercase">
                    {market}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-700 text-white pl-10 pr-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 outline-none w-64"
            />
          </div>
        </div>
      </div>

      {/* Stock Market Table */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Market Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-slate-700">
                <th className="pb-3">Symbol</th>
                <th className="pb-3">Name</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Change</th>
                <th className="pb-3">Volume</th>
                <th className="pb-3">Market Cap</th>
                <th className="pb-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStocks.map((stock, index) => (
                <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {stock.symbol[0]}
                      </div>
                      <span className="font-semibold text-white">{stock.symbol}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{stock.name}</td>
                  <td className="py-4 text-white font-semibold">{stock.price}</td>
                  <td className="py-4">
                    <div className={`flex items-center ${stock.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {stock.positive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                      <div>
                        <div className="font-semibold">{stock.change}</div>
                        <div className="text-sm">{stock.changeValue}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{stock.volume}</td>
                  <td className="py-4 text-gray-300">{stock.marketCap}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors">
                        Buy
                      </button>
                      <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors">
                        Sell
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Positions */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">My Stock Positions</h2>
        <div className="space-y-4">
          {myPositions.map((position, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {position.symbol[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{position.symbol}</div>
                  <div className="text-gray-400 text-sm">{position.shares} shares @ {position.avgPrice}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">{position.currentPrice}</div>
                <div className="text-gray-400 text-sm">Current Price</div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${position.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {position.pnl}
                </div>
                <div className={`text-sm ${position.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {position.pnlPercent}
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors">
                  Add More
                </button>
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors">
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stocks;