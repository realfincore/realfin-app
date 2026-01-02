import React, { useState } from "react";
import { Shield, Users, TrendingUp, Award, X, Minus } from "lucide-react";
import DelegateModal from "../components/Delegate";

const Stake: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"validators" | "delegations">("validators");
  const [showDelegateModal, setShowDelegateModal] = useState(false);
  const [showUndelegateModal, setShowUndelegateModal] = useState(false);
  const [selectedValidator, setSelectedValidator] = useState<any>(null);

  const validators = [
    {
      name: "Cosmos Validator 1",
      address: "cosmosvaloper1abc123...",
      commission: "5.0%",
      votingPower: "8.5%",
      uptime: "99.8%",
      apy: "18.5%",
      status: "Active",
      description: "Professional validator with 99.9% uptime guarantee",
      website: "https://validator1.com",
      jailed: false
    },
    {
      name: "Stakely",
      address: "cosmosvaloper1def456...",
      commission: "4.0%",
      votingPower: "7.2%",
      uptime: "99.9%",
      apy: "19.2%",
      status: "Active",
      description: "Secure and reliable staking infrastructure",
      website: "https://stakely.io",
      jailed: false
    },
    {
      name: "Cosmostation",
      address: "cosmosvaloper1ghi789...",
      commission: "3.5%",
      votingPower: "6.8%",
      uptime: "99.7%",
      apy: "19.5%",
      status: "Active",
      description: "Leading validator in the Cosmos ecosystem",
      website: "https://cosmostation.io",
      jailed: false
    },
    {
      name: "SG-1",
      address: "cosmosvaloper1jkl012...",
      commission: "7.5%",
      votingPower: "6.1%",
      uptime: "99.6%",
      apy: "17.8%",
      status: "Active",
      description: "Community-focused validator with transparent operations",
      website: "https://sg-1.com",
      jailed: false
    },
    {
      name: "Citadel.one",
      address: "cosmosvaloper1mno345...",
      commission: "5.5%",
      votingPower: "5.9%",
      uptime: "99.5%",
      apy: "18.2%",
      status: "Active",
      description: "Multi-chain validator with enterprise-grade security",
      website: "https://citadel.one",
      jailed: false
    },
    {
      name: "Inactive Validator",
      address: "cosmosvaloper1pqr678...",
      commission: "10.0%",
      votingPower: "0.1%",
      uptime: "85.2%",
      apy: "0%",
      status: "Jailed",
      description: "Currently jailed due to downtime",
      website: "https://inactive.com",
      jailed: true
    }
  ];

  const myDelegations = [
    {
      validator: "Cosmos Validator 1",
      delegated: "500.0 ATOM",
      rewards: "12.5 ATOM",
      apy: "18.5%",
      value: "$6,500.00",
      address: "cosmosvaloper1abc123..."
    },
    {
      validator: "Stakely",
      delegated: "300.0 ATOM",
      rewards: "8.2 ATOM",
      apy: "19.2%",
      value: "$3,900.00",
      address: "cosmosvaloper1def456..."
    },
    {
      validator: "Cosmostation",
      delegated: "200.0 ATOM",
      rewards: "5.8 ATOM",
      apy: "19.5%",
      value: "$2,600.00",
      address: "cosmosvaloper1ghi789..."
    }
  ];

  const stakingOverview = {
    totalStaked: "1,000.0 ATOM",
    totalRewards: "26.5 ATOM",
    totalValue: "$13,000.00",
    availableBalance: "250.0 ATOM",
    vestedTokens: "150.0 ATOM",
    vestingTokens: "100.0 ATOM",
    avgApy: "18.9%"
  };

  const handleDelegate = (validator: any) => {
    setSelectedValidator(validator);
    setShowDelegateModal(true);
  };

  const handleUndelegate = (validator: any) => {
    setSelectedValidator(validator);
    setShowUndelegateModal(true);
  };

  const getStatusColor = (status: string, jailed: boolean) => {
    if (jailed) return "bg-red-600";
    return status === "Active" ? "bg-green-600" : "bg-gray-600";
  };

  const UndelegateModal = () => (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <Minus className="mr-2 h-5 w-5" />
            Undelegate from {selectedValidator?.validator || selectedValidator?.name}
          </h3>
          <button
            onClick={() => setShowUndelegateModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Current Delegation</div>
            <div className="font-medium text-white">{selectedValidator?.validator || selectedValidator?.name}</div>
            <div className="text-sm text-gray-400">Delegated: {selectedValidator?.delegated || "N/A"}</div>
            <div className="text-sm text-gray-400">Pending Rewards: {selectedValidator?.rewards || "N/A"}</div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Amount to Undelegate</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 pr-16 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <span className="absolute top-2 right-3 text-gray-400">ATOM</span>
            </div>
            <div className="mt-1 text-sm text-gray-400">
              Max: {selectedValidator?.delegated?.split(" ")[0] || "0.00"} ATOM
            </div>
          </div>

          <div className="rounded-lg border border-red-700 bg-red-900/20 p-3">
            <div className="mb-1 text-sm font-medium text-red-400">⚠️ Important Notice</div>
            <div className="text-sm text-red-300">
              Undelegated tokens will be locked for 21 days before becoming available. You will not earn rewards during
              this period.
            </div>
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Transaction Fee:</span>
              <span className="text-white">0.005 ATOM</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowUndelegateModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-red-600 to-red-700 px-4 py-2 text-white transition-colors hover:from-red-500 hover:to-red-600">
            Undelegate
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Staking</h1>
        <div className="flex rounded-lg bg-slate-800 p-1">
          <button
            onClick={() => setActiveTab("validators")}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === "validators" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Validators
          </button>
          <button
            onClick={() => setActiveTab("delegations")}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === "delegations" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            My Delegations
          </button>
        </div>
      </div>

      {/* Staking Overview Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500">
          <div className="mb-4 flex items-center justify-between">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">🛡️</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">{stakingOverview.totalStaked}</div>
          <div className="text-sm text-gray-400">Total Staked</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-green-500">
          <div className="mb-4 flex items-center justify-between">
            <Award className="h-8 w-8 text-green-400" />
            <span className="text-2xl">🏆</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-green-400">{stakingOverview.totalRewards}</div>
          <div className="text-sm text-gray-400">Total Rewards</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-purple-500">
          <div className="mb-4 flex items-center justify-between">
            <TrendingUp className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">{stakingOverview.avgApy}</div>
          <div className="text-sm text-gray-400">Average APY</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl transition-colors hover:border-orange-500">
          <div className="mb-4 flex items-center justify-between">
            <Users className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">💰</span>
          </div>
          <div className="mb-1 text-2xl font-bold text-white">{stakingOverview.availableBalance}</div>
          <div className="text-sm text-gray-400">Available Balance</div>
        </div>
      </div>

      {/* Token Vesting Information */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">Token Vesting Status</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-slate-700/30 p-4">
            <div className="mb-1 text-sm text-gray-400">Vested Tokens</div>
            <div className="text-2xl font-bold text-green-400">{stakingOverview.vestedTokens}</div>
            <div className="text-sm text-gray-400">Available for staking</div>
          </div>
          <div className="rounded-lg bg-slate-700/30 p-4">
            <div className="mb-1 text-sm text-gray-400">Vesting Tokens</div>
            <div className="text-2xl font-bold text-orange-400">{stakingOverview.vestingTokens}</div>
            <div className="text-sm text-gray-400">Still vesting</div>
          </div>
          <div className="rounded-lg bg-slate-700/30 p-4">
            <div className="mb-1 text-sm text-gray-400">Total Value</div>
            <div className="text-2xl font-bold text-white">{stakingOverview.totalValue}</div>
            <div className="text-sm text-gray-400">USD equivalent</div>
          </div>
        </div>
      </div>

      {activeTab === "validators" ? (
        /* Validators List */
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
          <h2 className="mb-6 text-xl font-semibold text-white">Available Validators</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 text-left text-gray-400">
                  <th className="pb-3">Validator</th>
                  <th className="pb-3">Commission</th>
                  <th className="pb-3">Voting Power</th>
                  <th className="pb-3">APY</th>
                  <th className="pb-3">Uptime</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {validators.map((validator, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-700/50 hover:bg-slate-700/20"
                  >
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-sm font-bold text-white">
                          {validator.name[0]}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{validator.name}</div>
                          <div className="text-sm text-gray-400">{validator.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-gray-300">{validator.commission}</td>
                    <td className="py-4 font-semibold text-blue-400">{validator.votingPower}</td>
                    <td className="py-4 font-semibold text-green-400">{validator.apy}</td>
                    <td className="py-4 text-gray-300">{validator.uptime}</td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium text-white ${getStatusColor(validator.status, validator.jailed)}`}
                      >
                        {validator.jailed ? "Jailed" : validator.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => handleDelegate(validator)}
                        disabled={validator.jailed}
                        className="rounded-lg bg-linear-to-r from-green-600 to-green-700 px-4 py-2 text-white transition-colors hover:from-green-500 hover:to-green-600 disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-700"
                      >
                        Delegate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* My Delegations */
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-xl">
          <h2 className="mb-6 text-xl font-semibold text-white">My Delegations</h2>
          <div className="space-y-4">
            {myDelegations.map((delegation, index) => (
              <div
                key={index}
                className="rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-green-500 to-green-600 font-bold text-white">
                      {delegation.validator[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{delegation.validator}</div>
                      <div className="text-sm text-gray-400">APY: {delegation.apy}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">{delegation.value}</div>
                    <div className="text-sm text-gray-400">Total Value</div>
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Delegated</div>
                    <div className="font-medium text-white">{delegation.delegated}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Pending Rewards</div>
                    <div className="font-medium text-green-400">{delegation.rewards}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDelegate(delegation)}
                    className="rounded-md bg-green-600 px-3 py-1 text-sm text-white transition-colors hover:bg-green-700"
                  >
                    Add More
                  </button>
                  <button
                    onClick={() => handleUndelegate(delegation)}
                    className="rounded-md bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700"
                  >
                    Undelegate
                  </button>
                  <button className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700">
                    Claim Rewards
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showDelegateModal && (
        <DelegateModal
          setShowDelegateModal={setShowDelegateModal}
          stakingOverview={stakingOverview}
        />
      )}
      {showUndelegateModal && <UndelegateModal />}
    </div>
  );
};

export default Stake;
