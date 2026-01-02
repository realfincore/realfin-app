import React, { useState } from "react";
import { Building2, Filter, MapPin, Star, DollarSign, TrendingUp, X, ShoppingCart } from "lucide-react";

const RWA: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPartner, setSelectedPartner] = useState<string>("all");
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);

  const categories = ["all", "real-estate", "commodities", "art", "infrastructure", "bonds"];
  const partners = ["all", "blackrock", "vanguard", "goldmansachs", "jpmorgan"];

  const rwaAssets = [
    {
      name: "Manhattan Office Complex",
      category: "real-estate",
      partner: "blackrock",
      value: "$12.5M",
      apy: "8.5%",
      location: "New York, NY",
      tokenized: "25%",
      minInvestment: "$1,000",
      rating: 4.5,
      description: "Prime commercial real estate in Manhattan financial district"
    },
    {
      name: "Gold Bullion Fund",
      category: "commodities",
      partner: "vanguard",
      value: "$8.2M",
      apy: "4.2%",
      location: "Swiss Vault",
      tokenized: "100%",
      minInvestment: "$500",
      rating: 4.8,
      description: "Physical gold stored in secure Swiss vaults"
    },
    {
      name: "Renaissance Art Collection",
      category: "art",
      partner: "goldmansachs",
      value: "$15.8M",
      apy: "12.3%",
      location: "Global Museums",
      tokenized: "15%",
      minInvestment: "$5,000",
      rating: 4.2,
      description: "Fractional ownership of authenticated Renaissance artworks"
    },
    {
      name: "Solar Farm Infrastructure",
      category: "infrastructure",
      partner: "jpmorgan",
      value: "$25.6M",
      apy: "9.8%",
      location: "California, USA",
      tokenized: "60%",
      minInvestment: "$2,500",
      rating: 4.6,
      description: "Renewable energy infrastructure with long-term contracts"
    },
    {
      name: "Corporate Green Bonds",
      category: "bonds",
      partner: "blackrock",
      value: "$18.3M",
      apy: "6.7%",
      location: "Global",
      tokenized: "90%",
      minInvestment: "$1,000",
      rating: 4.4,
      description: "Sustainable corporate bonds from Fortune 500 companies"
    }
  ];

  const myInvestments = [
    {
      name: "Manhattan Office Complex",
      invested: "$5,000",
      currentValue: "$5,425",
      pnl: "+$425",
      pnlPercent: "+8.5%",
      shares: "0.04%"
    },
    {
      name: "Gold Bullion Fund",
      invested: "$2,500",
      currentValue: "$2,605",
      pnl: "+$105",
      pnlPercent: "+4.2%",
      shares: "0.03%"
    },
    {
      name: "Solar Farm Infrastructure",
      invested: "$7,500",
      currentValue: "$8,235",
      pnl: "+$735",
      pnlPercent: "+9.8%",
      shares: "0.03%"
    }
  ];

  const filteredAssets = rwaAssets.filter((asset) => {
    const matchesCategory = selectedCategory === "all" || asset.category === selectedCategory;
    const matchesPartner = selectedPartner === "all" || asset.partner === selectedPartner;
    return matchesCategory && matchesPartner;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      "real-estate": "bg-blue-600",
      commodities: "bg-yellow-600",
      art: "bg-purple-600",
      infrastructure: "bg-green-600",
      bonds: "bg-orange-600"
    };
    return colors[category as keyof typeof colors] || "bg-gray-600";
  };

  const getCategoryEmoji = (category: string) => {
    const emojis = {
      "real-estate": "🏢",
      commodities: "🥇",
      art: "🎨",
      infrastructure: "🔌",
      bonds: "📊"
    };
    return emojis[category as keyof typeof emojis] || "💼";
  };

  const handleInvest = (asset: any) => {
    setSelectedAsset(asset);
    setShowInvestModal(true);
  };

  const InvestModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Invest in {selectedAsset?.name}
          </h3>
          <button
            onClick={() => setShowInvestModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Asset Details</div>
            <div className="font-medium text-white">{selectedAsset?.name}</div>
            <div className="text-sm text-gray-400">Value: {selectedAsset?.value}</div>
            <div className="text-sm text-green-400">APY: {selectedAsset?.apy}</div>
            <div className="text-sm text-gray-400">Location: {selectedAsset?.location}</div>
            <div className="text-sm text-gray-400">Tokenized: {selectedAsset?.tokenized}</div>
            <div className="text-sm text-gray-400">Min. Investment: {selectedAsset?.minInvestment}</div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Investment Amount</label>
            <div className="relative">
              <input
                type="number"
                placeholder="1000"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 pr-12 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <span className="absolute top-2 right-3 text-gray-400">USD</span>
            </div>
            <div className="mt-1 text-sm text-gray-400">Minimum: {selectedAsset?.minInvestment}</div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Investment Type</label>
            <select className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500">
              <option>Fractional Ownership</option>
              <option>Token Investment</option>
              <option>Revenue Share</option>
            </select>
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Investment Amount:</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Platform Fee (2%):</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Expected Annual Return:</span>
              <span className="text-green-400">$0.00</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-slate-600 pt-2 text-sm">
              <span className="font-medium text-gray-400">Total Cost:</span>
              <span className="font-medium text-white">$0.00</span>
            </div>
          </div>

          <div className="rounded-lg border border-orange-700 bg-orange-900/20 p-3">
            <div className="mb-1 text-sm font-medium text-orange-400">⚠️ Investment Notice</div>
            <div className="text-sm text-orange-300">
              Real World Assets carry inherent risks. This investment is not guaranteed and may lose value. Only invest
              what you can afford to lose.
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowInvestModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-4 py-2 text-white transition-colors hover:from-blue-500 hover:to-purple-500">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Real World Assets</h1>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">$15,265.00</div>
          <div className="flex items-center text-sm text-green-400">
            <TrendingUp className="mr-1 h-4 w-4" />
            +$1,265 (8.3%)
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500">
          <div className="mb-4 flex items-center justify-between">
            <Building2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">🏗️</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$15,265</div>
          <div className="text-sm text-gray-400">Total Invested</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-green-500">
          <div className="mb-4 flex items-center justify-between">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-2xl">💰</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-green-400">+$1,265</div>
          <div className="text-sm text-gray-400">Total Gains</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-purple-500">
          <div className="mb-4 flex items-center justify-between">
            <DollarSign className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">8.3%</div>
          <div className="text-sm text-gray-400">Avg. APY</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-orange-500">
          <div className="mb-4 flex items-center justify-between">
            <Building2 className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">🎯</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">3</div>
          <div className="text-sm text-gray-400">Active Assets</div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />

            <div className="flex items-center space-x-2">
              <span className="font-medium text-white">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="capitalize"
                  >
                    {category.replace("-", " ")}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-medium text-white">Partner:</span>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white outline-none focus:border-blue-500"
              >
                {partners.map((partner) => (
                  <option
                    key={partner}
                    value={partner}
                    className="capitalize"
                  >
                    {partner}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* RWA Assets Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredAssets.map((asset, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{getCategoryEmoji(asset.category)}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{asset.name}</h3>
                  <div className="mt-1 flex items-center space-x-2">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium text-white ${getCategoryColor(asset.category)}`}
                    >
                      {asset.category.replace("-", " ")}
                    </span>
                    <span className="text-sm text-gray-400 capitalize">by {asset.partner}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-white">{asset.value}</div>
                <div className="font-semibold text-green-400">{asset.apy} APY</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-300">{asset.description}</p>

            <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-400">Location</div>
                <div className="flex items-center text-white">
                  <MapPin className="mr-1 h-3 w-3" />
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
                <div className="flex items-center text-white">
                  <Star className="mr-1 h-3 w-3 fill-current text-yellow-400" />
                  {asset.rating}/5
                </div>
              </div>
            </div>

            <button
              onClick={() => handleInvest(asset)}
              className="w-full rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-4 py-2 text-white transition-colors hover:from-blue-500 hover:to-purple-500"
            >
              Invest Now
            </button>
          </div>
        ))}
      </div>

      {/* My RWA Investments */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">My RWA Investments</h2>
        <div className="space-y-4">
          {myInvestments.map((investment, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 font-bold text-white">
                  {investment.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{investment.name}</div>
                  <div className="text-sm text-gray-400">Ownership: {investment.shares}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">{investment.invested}</div>
                <div className="text-sm text-gray-400">Invested</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">{investment.currentValue}</div>
                <div className="text-sm text-gray-400">Current Value</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-400">{investment.pnl}</div>
                <div className="text-sm text-green-400">{investment.pnlPercent}</div>
              </div>
              <div className="flex space-x-2">
                <button className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700">
                  Add More
                </button>
                <button className="rounded-md bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700">
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showInvestModal && <InvestModal />}
    </div>
  );
};

export default RWA;
