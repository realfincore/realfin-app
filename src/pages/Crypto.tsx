import React, { useState } from 'react';
import { Bitcoin, TrendingUp, TrendingDown, Target, BarChart3, DollarSign, X, Plus, Minus, Edit } from 'lucide-react';

const Crypto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'long' | 'short'>('long');
  const [showLongModal, setShowLongModal] = useState(false);
  const [showShortModal, setShowShortModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);

  const cryptoAssets = [
    { 
      symbol: 'BTC', 
      name: 'Bitcoin', 
      price: '$43,250.00', 
      change: '+3.45%', 
      changeValue: '+$1,438',
      positive: true,
      volume: '$28.5B',
      marketCap: '$847B'
    },
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      price: '$2,650.00', 
      change: '+2.18%', 
      changeValue: '+$56.7',
      positive: true,
      volume: '$15.2B',
      marketCap: '$318B'
    },
    { 
      symbol: 'SOL', 
      name: 'Solana', 
      price: '$98.45', 
      change: '-1.23%', 
      changeValue: '-$1.22',
      positive: false,
      volume: '$2.1B',
      marketCap: '$43B'
    },
    { 
      symbol: 'AVAX', 
      name: 'Avalanche', 
      price: '$38.92', 
      change: '+5.67%', 
      changeValue: '+$2.09',
      positive: true,
      volume: '$820M',
      marketCap: '$14.3B'
    },
  ];

  const longPositions = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      size: '0.5 BTC',
      entryPrice: '$41,200',
      currentPrice: '$43,250',
      pnl: '+$1,025.00',
      pnlPercent: '+4.97%',
      positive: true,
      leverage: '2x',
      liquidation: '$35,400'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      size: '5 ETH',
      entryPrice: '$2,580',
      currentPrice: '$2,650',
      pnl: '+$350.00',
      pnlPercent: '+2.71%',
      positive: true,
      leverage: '3x',
      liquidation: '$2,180'
    },
    {
      symbol: 'ATOM',
      name: 'Cosmos',
      size: '500 ATOM',
      entryPrice: '$9.80',
      currentPrice: '$9.45',
      pnl: '-$175.00',
      pnlPercent: '-3.57%',
      positive: false,
      leverage: '1x',
      liquidation: 'N/A'
    },
  ];

  const shortPositions = [
    {
      symbol: 'DOGE',
      name: 'Dogecoin',
      size: '10,000 DOGE',
      entryPrice: '$0.085',
      currentPrice: '$0.078',
      pnl: '+$700.00',
      pnlPercent: '+8.24%',
      positive: true,
      leverage: '5x',
      liquidation: '$0.095'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      size: '2,000 ADA',
      entryPrice: '$0.52',
      currentPrice: '$0.49',
      pnl: '+$600.00',
      pnlPercent: '+5.77%',
      positive: true,
      leverage: '4x',
      liquidation: '$0.58'
    },
  ];

  const currentPositions = activeTab === 'long' ? longPositions : shortPositions;

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Plus className="h-5 w-5 mr-2 text-green-400" />
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
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Asset Details</div>
            <div className="text-white font-medium">{selectedAsset?.name}</div>
            <div className="text-gray-400 text-sm">Current Price: {selectedAsset?.price}</div>
            <div className={`text-sm ${selectedAsset?.positive ? 'text-green-400' : 'text-red-400'}`}>
              {selectedAsset?.change} ({selectedAsset?.changeValue})
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Position Size
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none pr-16"
              />
              <span className="absolute right-3 top-2 text-gray-400">{selectedAsset?.symbol}</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Leverage
            </label>
            <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 outline-none">
              <option>1x</option>
              <option>2x</option>
              <option>3x</option>
              <option>5x</option>
              <option>10x</option>
            </select>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Margin Required:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Liquidation Price:</span>
              <span className="text-red-400">$0.00</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setShowLongModal(false)}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg transition-colors">
            Open Long
          </button>
        </div>
      </div>
    </div>
  );

  const ShortModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Minus className="h-5 w-5 mr-2 text-red-400" />
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
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Asset Details</div>
            <div className="text-white font-medium">{selectedAsset?.name}</div>
            <div className="text-gray-400 text-sm">Current Price: {selectedAsset?.price}</div>
            <div className={`text-sm ${selectedAsset?.positive ? 'text-green-400' : 'text-red-400'}`}>
              {selectedAsset?.change} ({selectedAsset?.changeValue})
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Position Size
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none pr-16"
              />
              <span className="absolute right-3 top-2 text-gray-400">{selectedAsset?.symbol}</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Leverage
            </label>
            <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 outline-none">
              <option>1x</option>
              <option>2x</option>
              <option>3x</option>
              <option>5x</option>
              <option>10x</option>
            </select>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Margin Required:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Liquidation Price:</span>
              <span className="text-red-400">$0.00</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setShowShortModal(false)}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg transition-colors">
            Open Short
          </button>
        </div>
      </div>
    </div>
  );

  const ModifyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Edit className="h-5 w-5 mr-2" />
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
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Current Position</div>
            <div className="text-white font-medium">{selectedAsset?.name}</div>
            <div className="text-gray-400 text-sm">Size: {selectedAsset?.size}</div>
            <div className="text-gray-400 text-sm">Entry: {selectedAsset?.entryPrice}</div>
            <div className={`text-sm ${selectedAsset?.positive ? 'text-green-400' : 'text-red-400'}`}>
              P&L: {selectedAsset?.pnl} ({selectedAsset?.pnlPercent})
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Stop Loss Price
            </label>
            <input
              type="number"
              placeholder="Enter stop loss price"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Take Profit Price
            </label>
            <input
              type="number"
              placeholder="Enter take profit price"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Add/Remove Margin
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="0.00"
                className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none"
              />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                Add
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setShowModifyModal(false)}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-colors">
            Update Position
          </button>
        </div>
      </div>
    </div>
  );

  const CloseModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <X className="h-5 w-5 mr-2" />
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
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Position Summary</div>
            <div className="text-white font-medium">{selectedAsset?.name}</div>
            <div className="text-gray-400 text-sm">Size: {selectedAsset?.size}</div>
            <div className="text-gray-400 text-sm">Entry: {selectedAsset?.entryPrice}</div>
            <div className="text-gray-400 text-sm">Current: {selectedAsset?.currentPrice}</div>
            <div className={`text-sm font-semibold ${selectedAsset?.positive ? 'text-green-400' : 'text-red-400'}`}>
              P&L: {selectedAsset?.pnl} ({selectedAsset?.pnlPercent})
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Close Percentage
            </label>
            <div className="flex space-x-2 mb-2">
              <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white rounded text-sm">25%</button>
              <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white rounded text-sm">50%</button>
              <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white rounded text-sm">75%</button>
              <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white rounded text-sm">100%</button>
            </div>
            <input
              type="number"
              placeholder="100"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Estimated Proceeds:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Trading Fee:</span>
              <span className="text-white">$5.00</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setShowCloseModal(false)}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg transition-colors">
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
        <div className="flex bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('long')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'long' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Long Positions
          </button>
          <button
            onClick={() => setActiveTab('short')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'short' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Short Positions
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Bitcoin className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">₿</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$156,750</div>
          <div className="text-gray-400 text-sm">Portfolio Value</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">+$2,500</div>
          <div className="text-gray-400 text-sm">Total P&L</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">8</div>
          <div className="text-gray-400 text-sm">Active Positions</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">⚖️</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">2.3x</div>
          <div className="text-gray-400 text-sm">Avg. Leverage</div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Crypto Market</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-slate-700">
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
                <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{asset.symbol}</div>
                        <div className="text-gray-400 text-sm">{asset.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-white font-semibold">{asset.price}</td>
                  <td className="py-4">
                    <div className={`flex items-center ${asset.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {asset.positive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
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
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors"
                      >
                        Long
                      </button>
                      <button
                        onClick={() => handleShort(asset)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
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
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            {activeTab === 'long' ? 'Long' : 'Short'} Positions
          </h2>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            activeTab === 'long' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}>
            {currentPositions.length} Active
          </div>
        </div>

        <div className="space-y-4">
          {currentPositions.map((position, index) => (
            <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {position.symbol[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{position.symbol}</div>
                    <div className="text-gray-400 text-sm">{position.name}</div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activeTab === 'long' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                }`}>
                  {position.leverage} Leverage
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                <div>
                  <div className="text-gray-400">Size</div>
                  <div className="text-white font-medium">{position.size}</div>
                </div>
                <div>
                  <div className="text-gray-400">Entry Price</div>
                  <div className="text-white font-medium">{position.entryPrice}</div>
                </div>
                <div>
                  <div className="text-gray-400">Current Price</div>
                  <div className="text-white font-medium">{position.currentPrice}</div>
                </div>
                <div>
                  <div className="text-gray-400">P&L</div>
                  <div className={`font-semibold ${position.positive ? 'text-green-400' : 'text-red-400'}`}>
                    <div>{position.pnl}</div>
                    <div className="text-xs">{position.pnlPercent}</div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Liquidation</div>
                  <div className="text-white font-medium">{position.liquidation}</div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => handleModify(position)}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
                >
                  Modify
                </button>
                <button
                  onClick={() => handleClose(position)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
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