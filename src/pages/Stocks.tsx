import React, { useState } from "react";
import { TrendingUp, TrendingDown, Filter, Search, BarChart3, DollarSign, X, ShoppingCart, Minus } from "lucide-react";

const Stocks: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>("all");
  const [selectedMarket, setSelectedMarket] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState<any>(null);

  const providers = ["all", "nasdaq", "nyse", "ftse", "nikkei"];
  const markets = ["all", "us", "uk", "japan", "europe"];

  const stocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: "$175.43",
      change: "+2.34%",
      changeValue: "+$4.01",
      positive: true,
      provider: "nasdaq",
      market: "us",
      volume: "89.2M",
      marketCap: "$2.74T"
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: "$378.85",
      change: "+1.87%",
      changeValue: "+$6.96",
      positive: true,
      provider: "nasdaq",
      market: "us",
      volume: "25.1M",
      marketCap: "$2.81T"
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: "$140.92",
      change: "-0.85%",
      changeValue: "-$1.21",
      positive: false,
      provider: "nasdaq",
      market: "us",
      volume: "31.4M",
      marketCap: "$1.76T"
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: "$248.50",
      change: "+5.67%",
      changeValue: "+$13.34",
      positive: true,
      provider: "nasdaq",
      market: "us",
      volume: "156.7M",
      marketCap: "$789B"
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      price: "$875.28",
      change: "+3.42%",
      changeValue: "+$28.95",
      positive: true,
      provider: "nasdaq",
      market: "us",
      volume: "42.8M",
      marketCap: "$2.16T"
    }
  ];

  const myPositions = [
    {
      symbol: "AAPL",
      shares: "150",
      avgPrice: "$165.20",
      currentPrice: "$175.43",
      pnl: "+$1,534.50",
      pnlPercent: "+6.19%",
      positive: true
    },
    {
      symbol: "MSFT",
      shares: "75",
      avgPrice: "$385.00",
      currentPrice: "$378.85",
      pnl: "-$461.25",
      pnlPercent: "-1.60%",
      positive: false
    },
    {
      symbol: "NVDA",
      shares: "25",
      avgPrice: "$820.00",
      currentPrice: "$875.28",
      pnl: "+$1,382.00",
      pnlPercent: "+6.74%",
      positive: true
    }
  ];

  const filteredStocks = stocks.filter((stock) => {
    const matchesProvider = selectedProvider === "all" || stock.provider === selectedProvider;
    const matchesMarket = selectedMarket === "all" || stock.market === selectedMarket;
    const matchesSearch =
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProvider && matchesMarket && matchesSearch;
  });

  const handleBuy = (stock: any) => {
    setSelectedStock(stock);
    setShowBuyModal(true);
  };

  const handleSell = (stock: any) => {
    setSelectedStock(stock);
    setShowSellModal(true);
  };

  const BuyModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Buy {selectedStock?.symbol}
          </h3>
          <button
            onClick={() => setShowBuyModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Stock Details</div>
            <div className="font-medium text-white">{selectedStock?.name}</div>
            <div className="text-sm text-gray-400">Current Price: {selectedStock?.price}</div>
            <div className={`text-sm ${selectedStock?.positive ? "text-green-400" : "text-red-400"}`}>
              {selectedStock?.change} ({selectedStock?.changeValue})
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Number of Shares</label>
            <input
              type="number"
              placeholder="0"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Order Type</label>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500">
              <option>Market Order</option>
              <option>Limit Order</option>
              <option>Stop Loss</option>
            </select>
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Estimated Cost:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Trading Fee:</span>
              <span className="text-white">$2.99</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowBuyModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-green-600 to-green-700 px-4 py-2 text-white transition-colors hover:from-green-500 hover:to-green-600">
            Buy Shares
          </button>
        </div>
      </div>
    </div>
  );

  const SellModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <Minus className="mr-2 h-5 w-5" />
            Sell {selectedStock?.symbol}
          </h3>
          <button
            onClick={() => setShowSellModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Current Position</div>
            <div className="font-medium text-white">{selectedStock?.name}</div>
            <div className="text-sm text-gray-400">Current Price: {selectedStock?.price}</div>
            <div className="text-sm text-gray-400">Shares Owned: 0</div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Number of Shares to Sell</label>
            <input
              type="number"
              placeholder="0"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Order Type</label>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500">
              <option>Market Order</option>
              <option>Limit Order</option>
              <option>Stop Loss</option>
            </select>
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Estimated Proceeds:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Trading Fee:</span>
              <span className="text-white">$2.99</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowSellModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-red-600 to-red-700 px-4 py-2 text-white transition-colors hover:from-red-500 hover:to-red-600">
            Sell Shares
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Stock Market</h1>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">$89,456.78</div>
          <div className="flex items-center text-sm text-green-400">
            <TrendingUp className="mr-1 h-4 w-4" />
            +$2,455.12 (2.82%)
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500">
          <div className="mb-4 flex items-center justify-between">
            <DollarSign className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">💼</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$89,456</div>
          <div className="text-sm text-gray-400">Portfolio Value</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-green-500">
          <div className="mb-4 flex items-center justify-between">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-green-400">+$2,455</div>
          <div className="text-sm text-gray-400">Today's Gain</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-purple-500">
          <div className="mb-4 flex items-center justify-between">
            <BarChart3 className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">📊</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">12</div>
          <div className="text-sm text-gray-400">Holdings</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-orange-500">
          <div className="mb-4 flex items-center justify-between">
            <TrendingUp className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">⚖️</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">65%</div>
          <div className="text-sm text-gray-400">Win Rate</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />

            <div className="flex items-center space-x-2">
              <span className="font-medium text-white">Provider:</span>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500"
              >
                {providers.map((provider) => (
                  <option
                    key={provider}
                    value={provider}
                    className="capitalize"
                  >
                    {provider}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-medium text-white">Market:</span>
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500"
              >
                {markets.map((market) => (
                  <option
                    key={market}
                    value={market}
                    className="uppercase"
                  >
                    {market}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 rounded-lg border border-slate-600 bg-slate-700 py-2 pr-4 pl-10 text-white outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Stock Market Table */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">Market Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-gray-400">
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
                <tr
                  key={index}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20"
                >
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-sm font-bold text-white">
                        {stock.symbol[0]}
                      </div>
                      <span className="font-semibold text-white">{stock.symbol}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{stock.name}</td>
                  <td className="py-4 font-semibold text-white">{stock.price}</td>
                  <td className="py-4">
                    <div className={`flex items-center ${stock.positive ? "text-green-400" : "text-red-400"}`}>
                      {stock.positive ? (
                        <TrendingUp className="mr-1 h-4 w-4" />
                      ) : (
                        <TrendingDown className="mr-1 h-4 w-4" />
                      )}
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
                      <button
                        onClick={() => handleBuy(stock)}
                        className="rounded-md bg-green-600 px-3 py-1 text-sm text-white transition-colors hover:bg-green-700"
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => handleSell(stock)}
                        className="rounded-md bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700"
                      >
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
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">My Stock Positions</h2>
        <div className="space-y-4">
          {myPositions.map((position, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-600 bg-slate-700/30 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white">
                    {position.symbol[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{position.symbol}</div>
                    <div className="text-sm text-gray-400">{position.shares} shares</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">{position.currentPrice}</div>
                  <div className="text-sm text-gray-400">Avg: {position.avgPrice}</div>
                </div>
                <div className="text-right">
                  <div className={`font-semibold ${position.positive ? "text-green-400" : "text-red-400"}`}>
                    {position.pnl}
                  </div>
                  <div className={`text-sm ${position.positive ? "text-green-400" : "text-red-400"}`}>
                    {position.pnlPercent}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showBuyModal && <BuyModal />}
      {showSellModal && <SellModal />}
    </div>
  );
};

export default Stocks;
