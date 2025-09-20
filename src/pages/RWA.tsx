import React, { useState } from 'react';
import { Building2, Filter, MapPin, Star, DollarSign, TrendingUp } from 'lucide-react';

const RWA: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPartner, setSelectedPartner] = useState<string>('all');

  const categories = ['all', 'real-estate', 'commodities', 'art', 'infrastructure', 'bonds'];
  const partners = ['all', 'blackrock', 'vanguard', 'goldmansachs', 'jpmorgan'];

  const rwaAssets = [
    {
      name: 'Manhattan Office Complex',
      category: 'real-estate',
      partner: 'blackrock',
      value: '$12.5M',
      apy: '8.5%',
      location: 'New York, NY',
      tokenized: '25%',
      minInvestment: '$1,000',
      rating: 4.5,
      description: 'Prime commercial real estate in Manhattan financial district'
    },
    {
      name: 'Gold Bullion Fund',
      category: 'commodities',
      partner: 'vanguard',
      value: '$8.2M',
      apy: '4.2%',
      location: 'Swiss Vault',
      tokenized: '100%',
      minInvestment: '$500',
      rating: 4.8,
      description: 'Physical gold stored in secure Swiss vaults'
    },
    {
      name: 'Renaissance Art Collection',
      category: 'art',
      partner: 'goldmansachs',
      value: '$15.8M',
      apy: '12.3%',
      location: 'Global Museums',
      tokenized: '15%',
      minInvestment: '$5,000',
      rating: 4.2,
      description: 'Fractional ownership of authenticated Renaissance artworks'
    },
    {
      name: 'Solar Farm Infrastructure',
      category: 'infrastructure',
      partner: 'jpmorgan',
      value: '$25.6M',
      apy: '9.8%',
      location: 'California, USA',
      tokenized: '60%',
      minInvestment: '$2,500',
      rating: 4.6,
      description: 'Renewable energy infrastructure with long-term contracts'
    },
    {
      name: 'Corporate Green Bonds',
      category: 'bonds',
      partner: 'blackrock',
      value: '$18.3M',
      apy: '6.7%',
      location: 'Global',
      tokenized: '90%',
      minInvestment: '$1,000',
      rating: 4.4,
      description: 'Sustainable corporate bonds from Fortune 500 companies'
    },
  ];

  const myInvestments = [
    {
      name: 'Manhattan Office Complex',
      invested: '$5,000',
      currentValue: '$5,425',
      pnl: '+$425',
      pnlPercent: '+8.5%',
      shares: '0.04%'
    },
    {
      name: 'Gold Bullion Fund',
      invested: '$2,500',
      currentValue: '$2,605',
      pnl: '+$105',
      pnlPercent: '+4.2%',
      shares: '0.03%'
    },
    {
      name: 'Solar Farm Infrastructure',
      invested: '$7,500',
      currentValue: '$8,235',
      pnl: '+$735',
      pnlPercent: '+9.8%',
      shares: '0.03%'
    },
  ];

  const filteredAssets = rwaAssets.filter(asset => {
    const matchesCategory = selectedCategory === 'all' || asset.category === selectedCategory;
    const matchesPartner = selectedPartner === 'all' || asset.partner === selectedPartner;
    return matchesCategory && matchesPartner;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'real-estate': 'bg-blue-600',
      'commodities': 'bg-yellow-600',
      'art': 'bg-purple-600',
      'infrastructure': 'bg-green-600',
      'bonds': 'bg-orange-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600';
  };

  const getCategoryEmoji = (category: string) => {
    const emojis = {
      'real-estate': '🏢',
      'commodities': '🥇',
      'art': '🎨',
      'infrastructure': '🔌',
      'bonds': '📊'
    };
    return emojis[category as keyof typeof emojis] || '💼';
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Real World Assets</h1>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">$15,265.00</div>
          <div className="text-green-400 text-sm flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            +$1,265 (8.3%)
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Building2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">🏗️</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">$15,265</div>
          <div className="text-gray-400 text-sm">Total Invested</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-2xl">💰</span>
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">+$1,265</div>
          <div className="text-gray-400 text-sm">Total Gains</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">8.3%</div>
          <div className="text-gray-400 text-sm">Avg. APY</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Building2 className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">3</div>
          <div className="text-gray-400 text-sm">Active Assets</div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />
            
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-700 text-white px-3 py-2 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Partner:</span>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="bg-slate-700 text-white px-3 py-2 rounded-lg border border-slate-600 focus:border-blue-500 outline-none"
              >
                {partners.map(partner => (
                  <option key={partner} value={partner} className="capitalize">
                    {partner}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* RWA Assets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAssets.map((asset, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{getCategoryEmoji(asset.category)}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{asset.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(asset.category)}`}>
                      {asset.category.replace('-', ' ')}
                    </span>
                    <span className="text-gray-400 text-sm capitalize">by {asset.partner}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-white">{asset.value}</div>
                <div className="text-green-400 font-semibold">{asset.apy} APY</div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4">{asset.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <div className="text-gray-400">Location</div>
                <div className="text-white flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {asset.location}
                </div>
              </div>
              <div>
                <div className="text-gray-400">Tokenized</div>
                <div className="text-white">{asset.tokenized}</div>
              </div>
              <div>
                <div className="text-gray-400">Min. Investment</div>
                <div className="text-white">{asset.minInvestment}</div>
              </div>
              <div>
                <div className="text-gray-400">Rating</div>
                <div className="text-white flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 mr-1 fill-current" />
                  {asset.rating}/5
                </div>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-colors">
              Invest Now
            </button>
          </div>
        ))}
      </div>

      {/* My RWA Investments */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">My RWA Investments</h2>
        <div className="space-y-4">
          {myInvestments.map((investment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {investment.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{investment.name}</div>
                  <div className="text-gray-400 text-sm">Ownership: {investment.shares}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">{investment.invested}</div>
                <div className="text-gray-400 text-sm">Invested</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">{investment.currentValue}</div>
                <div className="text-gray-400 text-sm">Current Value</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-400">{investment.pnl}</div>
                <div className="text-green-400 text-sm">{investment.pnlPercent}</div>
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

export default RWA;