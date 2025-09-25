import React, { useState } from 'react';
import { Banknote, Filter, Calendar, TrendingUp, Shield, X, ShoppingCart } from 'lucide-react';

const Bonds: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedBond, setSelectedBond] = useState<any>(null);

  const bondTypes = ['all', 'government', 'corporate', 'municipal', 'treasury'];
  
  const bonds = [
    { 
      name: 'US Treasury 10Y', 
      type: 'treasury', 
      yield: '4.25%', 
      maturity: '2034-01-15', 
      price: '$98.50', 
      rating: 'AAA',
      duration: '8.5 years'
    },
    { 
      name: 'Apple Inc. Bond', 
      type: 'corporate', 
      yield: '5.15%', 
      maturity: '2029-05-12', 
      price: '$102.30', 
      rating: 'AA+',
      duration: '4.2 years'
    },
    { 
      name: 'California Muni', 
      type: 'municipal', 
      yield: '3.85%', 
      maturity: '2032-08-20', 
      price: '$95.75', 
      rating: 'AA',
      duration: '7.1 years'
    },
    { 
      name: 'Microsoft Corp', 
      type: 'corporate', 
      yield: '4.95%', 
      maturity: '2027-11-30', 
      price: '$101.20', 
      rating: 'AAA',
      duration: '3.8 years'
    },
    { 
      name: 'UK Gilt 5Y', 
      type: 'government', 
      yield: '4.05%', 
      maturity: '2030-03-15', 
      price: '$97.80', 
      rating: 'AA+',
      duration: '4.9 years'
    },
  ];

  const filteredBonds = selectedType === 'all' ? bonds : bonds.filter(bond => bond.type === selectedType);

  const handleBuy = (bond: any) => {
    setSelectedBond(bond);
    setShowBuyModal(true);
  };

  const getRatingColor = (rating: string) => {
    if (rating === 'AAA') return 'text-green-400';
    if (rating.startsWith('AA')) return 'text-blue-400';
    if (rating.startsWith('A')) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      treasury: 'bg-blue-600',
      government: 'bg-purple-600',
      corporate: 'bg-green-600',
      municipal: 'bg-orange-600'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-600';
  };

  const BuyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Buy {selectedBond?.name}
          </h3>
          <button
            onClick={() => setShowBuyModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Bond Details</div>
            <div className="text-white font-medium">{selectedBond?.name}</div>
            <div className="text-gray-400 text-sm">Price: {selectedBond?.price}</div>
            <div className="text-green-400 text-sm">Yield: {selectedBond?.yield}</div>
            <div className="text-gray-400 text-sm">Maturity: {selectedBond?.maturity}</div>
            <div className={`text-sm font-medium ${getRatingColor(selectedBond?.rating || '')}`}>
              Rating: {selectedBond?.rating}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Number of Bonds
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none"
            />
            <div className="text-sm text-gray-400 mt-1">
              Minimum purchase: 1 bond ($1,000 face value)
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Order Type
            </label>
            <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 outline-none">
              <option>Market Order</option>
              <option>Limit Order</option>
            </select>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Estimated Cost:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Accrued Interest:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Transaction Fee:</span>
              <span className="text-white">$10.00</span>
            </div>
            <div className="flex justify-between text-sm mt-2 pt-2 border-t border-slate-600">
              <span className="text-gray-400 font-medium">Total:</span>
              <span className="text-white font-medium">$0.00</span>
            </div>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-3">
            <div className="text-blue-400 text-sm font-medium mb-1">💡 Bond Information</div>
            <div className="text-blue-300 text-sm">
              This bond pays {selectedBond?.yield} annually until maturity on {selectedBond?.maturity}.
              Duration: {selectedBond?.duration}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setShowBuyModal(false)}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg transition-colors">
            Buy Bonds
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Bonds Market</h1>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">$2,456,789</div>
          <div className="text-gray-400 text-sm">Total Bond Value</div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Banknote className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">🏛️</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$125,000</div>
          <div className="text-gray-400 text-sm">Portfolio Value</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">4.65%</div>
          <div className="text-gray-400 text-sm">Avg. Yield</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">⏰</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">5.2 years</div>
          <div className="text-gray-400 text-sm">Avg. Duration</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Shield className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">⭐</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">AA+</div>
          <div className="text-gray-400 text-sm">Avg. Rating</div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Filter className="h-5 w-5 text-gray-400" />
          <span className="text-white font-medium">Filter by Type:</span>
          <div className="flex space-x-2">
            {bondTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Bonds Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-slate-700">
                <th className="pb-3">Bond</th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Yield</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Rating</th>
                <th className="pb-3">Duration</th>
                <th className="pb-3">Maturity</th>
                <th className="pb-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBonds.map((bond, index) => (
                <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                  <td className="py-4">
                    <div className="font-semibold text-white">{bond.name}</div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(bond.type)}`}>
                      {bond.type}
                    </span>
                  </td>
                  <td className="py-4 text-green-400 font-semibold">{bond.yield}</td>
                  <td className="py-4 text-white font-medium">{bond.price}</td>
                  <td className={`py-4 font-semibold ${getRatingColor(bond.rating)}`}>{bond.rating}</td>
                  <td className="py-4 text-gray-300">{bond.duration}</td>
                  <td className="py-4 text-gray-300">{bond.maturity}</td>
                  <td className="py-4">
                    <button
                      onClick={() => handleBuy(bond)}
                      className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-colors"
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Bond Holdings */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">My Bond Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-white">US Treasury 10Y</h3>
              <span className="text-green-400 text-sm font-medium">AAA</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Quantity:</span>
                <span className="text-white">50 bonds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Current Value:</span>
                <span className="text-white">$49,250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Yield:</span>
                <span className="text-green-400">4.25%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Annual Income:</span>
                <span className="text-green-400">$2,093</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-white">Apple Inc. Bond</h3>
              <span className="text-blue-400 text-sm font-medium">AA+</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Quantity:</span>
                <span className="text-white">25 bonds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Current Value:</span>
                <span className="text-white">$25,575</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Yield:</span>
                <span className="text-green-400">5.15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Annual Income:</span>
                <span className="text-green-400">$1,317</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-white">California Muni</h3>
              <span className="text-blue-400 text-sm font-medium">AA</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Quantity:</span>
                <span className="text-white">30 bonds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Current Value:</span>
                <span className="text-white">$28,725</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Yield:</span>
                <span className="text-green-400">3.85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Annual Income:</span>
                <span className="text-green-400">$1,106</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showBuyModal && <BuyModal />}
    </div>
  );
};

export default Bonds;