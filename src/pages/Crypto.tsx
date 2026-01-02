import React, { useState } from "react";
import { Bitcoin, TrendingUp, TrendingDown, Target, BarChart3, DollarSign, X, Plus, Minus, Edit } from "lucide-react";

const Crypto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"long" | "short">("long");
  const [showLongModal, setShowLongModal] = useState(false);
  const [showShortModal, setShowShortModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);

  const cryptoAssets = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$43,250.00",
      change: "+3.45%",
      changeValue: "+$1,438",
      positive: true,
      volume: "$28.5B",
      marketCap: "$847B"
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "$2,650.00",
      change: "+2.18%",
      changeValue: "+$56.7",
      positive: true,
      volume: "$15.2B",
      marketCap: "$318B"
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$98.45",
      change: "-1.23%",
      changeValue: "-$1.22",
      positive: false,
      volume: "$2.1B",
      marketCap: "$43B"
    },
    {
      symbol: "AVAX",
      name: "Avalanche",
      price: "$38.92",
      change: "+5.67%",
      changeValue: "+$2.09",
      positive: true,
      volume: "$820M",
      marketCap: "$14.3B"
    }
  ];

  const longPositions = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      size: "0.5 BTC",
      entryPrice: "$41,200",
      currentPrice: "$43,250",
      pnl: "+$1,025.00",
      pnlPercent: "+4.97%",
      positive: true,
      leverage: "2x",
      liquidation: "$35,400"
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      size: "5 ETH",
      entryPrice: "$2,580",
      currentPrice: "$2,650",
      pnl: "+$350.00",
      pnlPercent: "+2.71%",
      positive: true,
      leverage: "3x",
      liquidation: "$2,180"
    },
    {
      symbol: "ATOM",
      name: "Cosmos",
      size: "500 ATOM",
      entryPrice: "$9.80",
      currentPrice: "$9.45",
      pnl: "-$175.00",
      pnlPercent: "-3.57%",
      positive: false,
      leverage: "1x",
      liquidation: "N/A"
    }
  ];

  const shortPositions = [
    {
      symbol: "DOGE",
      name: "Dogecoin",
      size: "10,000 DOGE",
      entryPrice: "$0.085",
      currentPrice: "$0.078",
      pnl: "+$700.00",
      pnlPercent: "+8.24%",
      positive: true,
      leverage: "5x",
      liquidation: "$0.095"
    },
    {
      symbol: "ADA",
      name: "Cardano",
      size: "2,000 ADA",
      entryPrice: "$0.52",
      currentPrice: "$0.49",
      pnl: "+$600.00",
      pnlPercent: "+5.77%",
      positive: true,
      leverage: "4x",
      liquidation: "$0.58"
    }
  ];

  const currentPositions = activeTab === "long" ? longPositions : shortPositions;

  const handleLong = (asset: any) => {
    setSelectedAsset(asset);
    setShowLongModal(true);
  };

  const handleShort = (asset: any) => {
    setSelectedAsset(asset);
    setShowShortModal(true);
  };

  const handleModify = (position: any) => {
    setSelectedAsset(position);
    setShowModifyModal(true);
  };

  const handleClose = (position: any) => {
    setSelectedAsset(position);
    setShowCloseModal(true);
  };

  const LongModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <Plus className="mr-2 h-5 w-5 text-green-400" />
            Long {selectedAsset?.symbol}
          </h3>
          <button
            onClick={() => setShowLongModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Asset Details</div>
            <div className="font-medium text-white">{selectedAsset?.name}</div>
            <div className="text-sm text-gray-400">Current Price: {selectedAsset?.price}</div>
            <div className={`text-sm ${selectedAsset?.positive ? "text-green-400" : "text-red-400"}`}>
              {selectedAsset?.change} ({selectedAsset?.changeValue})
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Position Size</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 pr-16 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <span className="absolute top-2 right-3 text-gray-400">{selectedAsset?.symbol}</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Leverage</label>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500">
              <option>1x</option>
              <option>2x</option>
              <option>3x</option>
              <option>5x</option>
              <option>10x</option>
            </select>
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Margin Required:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Liquidation Price:</span>
              <span className="text-red-400">$0.00</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowLongModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-green-600 to-green-700 px-4 py-2 text-white transition-colors hover:from-green-500 hover:to-green-600">
            Open Long
          </button>
        </div>
      </div>
    </div>
  );

  const ShortModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <Minus className="mr-2 h-5 w-5 text-red-400" />
            Short {selectedAsset?.symbol}
          </h3>
          <button
            onClick={() => setShowShortModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Asset Details</div>
            <div className="font-medium text-white">{selectedAsset?.name}</div>
            <div className="text-sm text-gray-400">Current Price: {selectedAsset?.price}</div>
            <div className={`text-sm ${selectedAsset?.positive ? "text-green-400" : "text-red-400"}`}>
              {selectedAsset?.change} ({selectedAsset?.changeValue})
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Position Size</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 pr-16 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <span className="absolute top-2 right-3 text-gray-400">{selectedAsset?.symbol}</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Leverage</label>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500">
              <option>1x</option>
              <option>2x</option>
              <option>3x</option>
              <option>5x</option>
              <option>10x</option>
            </select>
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Margin Required:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Liquidation Price:</span>
              <span className="text-red-400">$0.00</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowShortModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-red-600 to-red-700 px-4 py-2 text-white transition-colors hover:from-red-500 hover:to-red-600">
            Open Short
          </button>
        </div>
      </div>
    </div>
  );

  const ModifyModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <Edit className="mr-2 h-5 w-5" />
            Modify {selectedAsset?.symbol} Position
          </h3>
          <button
            onClick={() => setShowModifyModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Current Position</div>
            <div className="font-medium text-white">{selectedAsset?.name}</div>
            <div className="text-sm text-gray-400">Size: {selectedAsset?.size}</div>
            <div className="text-sm text-gray-400">Entry: {selectedAsset?.entryPrice}</div>
            <div className={`text-sm ${selectedAsset?.positive ? "text-green-400" : "text-red-400"}`}>
              P&L: {selectedAsset?.pnl} ({selectedAsset?.pnlPercent})
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Stop Loss Price</label>
            <input
              type="number"
              placeholder="Enter stop loss price"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Take Profit Price</label>
            <input
              type="number"
              placeholder="Enter take profit price"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Add/Remove Margin</label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="0.00"
                className="flex-1 rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <button className="rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
                Add
              </button>
              <button className="rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowModifyModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-4 py-2 text-white transition-colors hover:from-blue-500 hover:to-blue-600">
            Update Position
          </button>
        </div>
      </div>
    </div>
  );

  const CloseModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <X className="mr-2 h-5 w-5" />
            Close {selectedAsset?.symbol} Position
          </h3>
          <button
            onClick={() => setShowCloseModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Position Summary</div>
            <div className="font-medium text-white">{selectedAsset?.name}</div>
            <div className="text-sm text-gray-400">Size: {selectedAsset?.size}</div>
            <div className="text-sm text-gray-400">Entry: {selectedAsset?.entryPrice}</div>
            <div className="text-sm text-gray-400">Current: {selectedAsset?.currentPrice}</div>
            <div className={`text-sm font-semibold ${selectedAsset?.positive ? "text-green-400" : "text-red-400"}`}>
              P&L: {selectedAsset?.pnl} ({selectedAsset?.pnlPercent})
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Close Percentage</label>
            <div className="mb-2 flex space-x-2">
              <button className="rounded bg-slate-600 px-3 py-1 text-sm text-white hover:bg-slate-500">25%</button>
              <button className="rounded bg-slate-600 px-3 py-1 text-sm text-white hover:bg-slate-500">50%</button>
              <button className="rounded bg-slate-600 px-3 py-1 text-sm text-white hover:bg-slate-500">75%</button>
              <button className="rounded bg-slate-600 px-3 py-1 text-sm text-white hover:bg-slate-500">100%</button>
            </div>
            <input
              type="number"
              placeholder="100"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Estimated Proceeds:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Trading Fee:</span>
              <span className="text-white">$5.00</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowCloseModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-red-600 to-red-700 px-4 py-2 text-white transition-colors hover:from-red-500 hover:to-red-600">
            Close Position
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Crypto Trading</h1>
        <div className="flex rounded-lg bg-slate-800 p-1">
          <button
            onClick={() => setActiveTab("long")}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === "long" ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Long Positions
          </button>
          <button
            onClick={() => setActiveTab("short")}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === "short" ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Short Positions
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-orange-500">
          <div className="mb-4 flex items-center justify-between">
            <Bitcoin className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">₿</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$156,750</div>
          <div className="text-sm text-gray-400">Portfolio Value</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-green-500">
          <div className="mb-4 flex items-center justify-between">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-green-400">+$2,500</div>
          <div className="text-sm text-gray-400">Total P&L</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500">
          <div className="mb-4 flex items-center justify-between">
            <BarChart3 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">🎯</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">8</div>
          <div className="text-sm text-gray-400">Active Positions</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-purple-500">
          <div className="mb-4 flex items-center justify-between">
            <Target className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">⚖️</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">2.3x</div>
          <div className="text-sm text-gray-400">Avg. Leverage</div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">Crypto Market</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-gray-400">
                <th className="pb-3">Asset</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">24h Change</th>
                <th className="pb-3">Volume</th>
                <th className="pb-3">Market Cap</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cryptoAssets.map((asset, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20"
                >
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-yellow-500 text-sm font-bold text-white">
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{asset.symbol}</div>
                        <div className="text-sm text-gray-400">{asset.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 font-semibold text-white">{asset.price}</td>
                  <td className="py-4">
                    <div className={`flex items-center ${asset.positive ? "text-green-400" : "text-red-400"}`}>
                      {asset.positive ? (
                        <TrendingUp className="mr-1 h-4 w-4" />
                      ) : (
                        <TrendingDown className="mr-1 h-4 w-4" />
                      )}
                      <div>
                        <div className="font-semibold">{asset.change}</div>
                        <div className="text-sm">{asset.changeValue}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{asset.volume}</td>
                  <td className="py-4 text-gray-300">{asset.marketCap}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleLong(asset)}
                        className="rounded-md bg-green-600 px-3 py-1 text-sm text-white transition-colors hover:bg-green-700"
                      >
                        Long
                      </button>
                      <button
                        onClick={() => handleShort(asset)}
                        className="rounded-md bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700"
                      >
                        Short
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Positions */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{activeTab === "long" ? "Long" : "Short"} Positions</h2>
          <div
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              activeTab === "long" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            {currentPositions.length} Active
          </div>
        </div>

        <div className="space-y-4">
          {currentPositions.map((position, index) => (
            <div
              key={index}
              className="rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-yellow-500 font-bold text-white">
                    {position.symbol[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{position.symbol}</div>
                    <div className="text-sm text-gray-400">{position.name}</div>
                  </div>
                </div>
                <div
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    activeTab === "long" ? "bg-green-600 text-white" : "bg-red-600 text-white"
                  }`}
                >
                  {position.leverage} Leverage
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm lg:grid-cols-5">
                <div>
                  <div className="text-gray-400">Size</div>
                  <div className="font-medium text-white">{position.size}</div>
                </div>
                <div>
                  <div className="text-gray-400">Entry Price</div>
                  <div className="font-medium text-white">{position.entryPrice}</div>
                </div>
                <div>
                  <div className="text-gray-400">Current Price</div>
                  <div className="font-medium text-white">{position.currentPrice}</div>
                </div>
                <div>
                  <div className="text-gray-400">P&L</div>
                  <div className={`font-semibold ${position.positive ? "text-green-400" : "text-red-400"}`}>
                    <div>{position.pnl}</div>
                    <div className="text-xs">{position.pnlPercent}</div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Liquidation</div>
                  <div className="font-medium text-white">{position.liquidation}</div>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleModify(position)}
                  className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700"
                >
                  Modify
                </button>
                <button
                  onClick={() => handleClose(position)}
                  className="rounded-md bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700"
                >
                  Close
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showLongModal && <LongModal />}
      {showShortModal && <ShortModal />}
      {showModifyModal && <ModifyModal />}
      {showCloseModal && <CloseModal />}
    </div>
  );
};

export default Crypto;
