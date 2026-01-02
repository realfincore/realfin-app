import React, { useState } from "react";
import { PiggyBank, TrendingUp, Shield, DollarSign, Send, ArrowDownLeft, X } from "lucide-react";

const Lend: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"lend" | "borrowed">("lend");
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<string>("");

  const lendingPools = [
    { asset: "ATOM", apy: "12.5%", tvl: "$2.3M", available: "$450K", collateral: "125%" },
    { asset: "OSMO", apy: "15.8%", tvl: "$1.8M", available: "$320K", collateral: "130%" },
    { asset: "USDC", apy: "8.2%", tvl: "$5.1M", available: "$1.2M", collateral: "110%" },
    { asset: "JUNO", apy: "18.3%", tvl: "$850K", available: "$180K", collateral: "140%" }
  ];

  const myPositions = [
    { asset: "ATOM", supplied: "125.0", earned: "15.6", apy: "12.5%", status: "Active" },
    { asset: "USDC", supplied: "2,500", earned: "205.0", apy: "8.2%", status: "Active" },
    { asset: "OSMO", supplied: "850.0", earned: "134.4", apy: "15.8%", status: "Active" }
  ];

  const borrowPositions = [
    { asset: "USDC", borrowed: "1,200", debt: "98.4", ltv: "65%", liquidation: "$0.85", status: "Safe" },
    { asset: "ATOM", borrowed: "50.0", debt: "8.2", ltv: "45%", liquidation: "$6.50", status: "Safe" }
  ];

  const handleSend = (asset: string) => {
    setSelectedAsset(asset);
    setShowSendModal(true);
  };

  const handleReceive = (asset: string) => {
    setSelectedAsset(asset);
    setShowReceiveModal(true);
  };

  const SendModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <Send className="mr-2 h-5 w-5" />
            Send {selectedAsset}
          </h3>
          <button
            onClick={() => setShowSendModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Recipient Address</label>
            <input
              type="text"
              placeholder="Enter wallet address"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Amount</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 pr-16 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <span className="absolute top-2 right-3 text-gray-400">{selectedAsset}</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Memo (Optional)</label>
            <input
              type="text"
              placeholder="Enter memo"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-500"
            />
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Network Fee:</span>
              <span className="text-white">0.001 {selectedAsset}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowSendModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-4 py-2 text-white transition-colors hover:from-blue-500 hover:to-purple-500">
            Send
          </button>
        </div>
      </div>
    </div>
  );

  const ReceiveModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <ArrowDownLeft className="mr-2 h-5 w-5" />
            Receive {selectedAsset}
          </h3>
          <button
            onClick={() => setShowReceiveModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-white p-4">
            <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-gray-200">
              <span className="text-xs text-gray-500">QR Code</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Your {selectedAsset} Address</label>
            <div className="rounded-lg border border-slate-600 bg-slate-700 p-3">
              <div className="font-mono text-sm break-all text-white">
                realfin1abc123def456ghi789jkl012mno345pqr678stu901
              </div>
            </div>
          </div>

          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            Copy Address
          </button>

          <p className="text-sm text-gray-400">
            Only send {selectedAsset} to this address. Sending other assets may result in permanent loss.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Lending & Borrowing</h1>
        <div className="flex rounded-lg bg-slate-800 p-1">
          <button
            onClick={() => setActiveTab("lend")}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === "lend" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Lending
          </button>
          <button
            onClick={() => setActiveTab("borrowed")}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === "borrowed" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Borrowing
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-green-500">
          <div className="mb-4 flex items-center justify-between">
            <PiggyBank className="h-8 w-8 text-green-400" />
            <span className="text-2xl">🏦</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$3,475.00</div>
          <div className="text-sm text-gray-400">Total Supplied</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500">
          <div className="mb-4 flex items-center justify-between">
            <TrendingUp className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">💎</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$355.00</div>
          <div className="text-sm text-gray-400">Total Earned</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-red-500">
          <div className="mb-4 flex items-center justify-between">
            <DollarSign className="h-8 w-8 text-red-400" />
            <span className="text-2xl">📊</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">$1,250.00</div>
          <div className="text-sm text-gray-400">Total Borrowed</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-purple-500">
          <div className="mb-4 flex items-center justify-between">
            <Shield className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">🛡️</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">155%</div>
          <div className="text-sm text-gray-400">Health Factor</div>
        </div>
      </div>

      {activeTab === "lend" ? (
        <>
          {/* Available Lending Pools */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
            <h2 className="mb-6 text-xl font-semibold text-white">Available Lending Pools</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 text-left text-gray-400">
                    <th className="pb-3">Asset</th>
                    <th className="pb-3">APY</th>
                    <th className="pb-3">TVL</th>
                    <th className="pb-3">Available</th>
                    <th className="pb-3">Collateral Factor</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lendingPools.map((pool, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-700/50 hover:bg-slate-700/20"
                    >
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-sm font-bold text-white">
                            {pool.asset[0]}
                          </div>
                          <span className="font-semibold text-white">{pool.asset}</span>
                        </div>
                      </td>
                      <td className="py-4 font-semibold text-green-400">{pool.apy}</td>
                      <td className="py-4 text-gray-300">{pool.tvl}</td>
                      <td className="py-4 text-gray-300">{pool.available}</td>
                      <td className="py-4 text-gray-300">{pool.collateral}</td>
                      <td className="py-4">
                        <button className="rounded-lg bg-linear-to-r from-green-600 to-green-700 px-4 py-2 text-white transition-colors hover:from-green-500 hover:to-green-600">
                          Supply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* My Lending Positions */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
            <h2 className="mb-6 text-xl font-semibold text-white">My Lending Positions</h2>
            <div className="space-y-4">
              {myPositions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-green-500 to-green-600 font-bold text-white">
                      {position.asset[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{position.asset}</div>
                      <div className="text-sm text-gray-400">Supplied: {position.supplied}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-400">+{position.earned}</div>
                    <div className="text-sm text-gray-400">APY: {position.apy}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSend(position.asset)}
                      className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700"
                    >
                      Send
                    </button>
                    <button
                      onClick={() => handleReceive(position.asset)}
                      className="rounded-md bg-purple-600 px-3 py-1 text-sm text-white transition-colors hover:bg-purple-700"
                    >
                      Receive
                    </button>
                    <button className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700">
                      Withdraw
                    </button>
                    <button className="rounded-md bg-green-600 px-3 py-1 text-sm text-white transition-colors hover:bg-green-700">
                      Add More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Borrowing Positions */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
            <h2 className="mb-6 text-xl font-semibold text-white">My Borrowing Positions</h2>
            <div className="space-y-4">
              {borrowPositions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-red-500 to-red-600 font-bold text-white">
                      {position.asset[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{position.asset}</div>
                      <div className="text-sm text-gray-400">Borrowed: {position.borrowed}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-red-400">-{position.debt}</div>
                    <div className="text-sm text-gray-400">Monthly Interest</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white">{position.ltv}</div>
                    <div className="text-sm text-gray-400">LTV Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white">{position.liquidation}</div>
                    <div className="text-sm text-gray-400">Liquidation Price</div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSend(position.asset)}
                      className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700"
                    >
                      Send
                    </button>
                    <button
                      onClick={() => handleReceive(position.asset)}
                      className="rounded-md bg-purple-600 px-3 py-1 text-sm text-white transition-colors hover:bg-purple-700"
                    >
                      Receive
                    </button>
                    <button className="rounded-md bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700">
                      Repay
                    </button>
                    <button className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700">
                      Borrow More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {showSendModal && <SendModal />}
      {showReceiveModal && <ReceiveModal />}
    </div>
  );
};

export default Lend;
