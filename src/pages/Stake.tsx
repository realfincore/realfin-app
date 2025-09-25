import React, { useState } from 'react';
import { Shield, Users, TrendingUp, Award, Send, ArrowDownLeft, X, Plus, Minus } from 'lucide-react';

const Stake: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'validators' | 'delegations'>('validators');
  const [showDelegateModal, setShowDelegateModal] = useState(false);
  const [showUndelegateModal, setShowUndelegateModal] = useState(false);
  const [selectedValidator, setSelectedValidator] = useState<any>(null);

  const validators = [
    {
      name: 'Cosmos Validator 1',
      address: 'cosmosvaloper1abc123...',
      commission: '5.0%',
      votingPower: '8.5%',
      uptime: '99.8%',
      apy: '18.5%',
      status: 'Active',
      description: 'Professional validator with 99.9% uptime guarantee',
      website: 'https://validator1.com',
      jailed: false
    },
    {
      name: 'Stakely',
      address: 'cosmosvaloper1def456...',
      commission: '4.0%',
      votingPower: '7.2%',
      uptime: '99.9%',
      apy: '19.2%',
      status: 'Active',
      description: 'Secure and reliable staking infrastructure',
      website: 'https://stakely.io',
      jailed: false
    },
    {
      name: 'Cosmostation',
      address: 'cosmosvaloper1ghi789...',
      commission: '3.5%',
      votingPower: '6.8%',
      uptime: '99.7%',
      apy: '19.5%',
      status: 'Active',
      description: 'Leading validator in the Cosmos ecosystem',
      website: 'https://cosmostation.io',
      jailed: false
    },
    {
      name: 'SG-1',
      address: 'cosmosvaloper1jkl012...',
      commission: '7.5%',
      votingPower: '6.1%',
      uptime: '99.6%',
      apy: '17.8%',
      status: 'Active',
      description: 'Community-focused validator with transparent operations',
      website: 'https://sg-1.com',
      jailed: false
    },
    {
      name: 'Citadel.one',
      address: 'cosmosvaloper1mno345...',
      commission: '5.5%',
      votingPower: '5.9%',
      uptime: '99.5%',
      apy: '18.2%',
      status: 'Active',
      description: 'Multi-chain validator with enterprise-grade security',
      website: 'https://citadel.one',
      jailed: false
    },
    {
      name: 'Inactive Validator',
      address: 'cosmosvaloper1pqr678...',
      commission: '10.0%',
      votingPower: '0.1%',
      uptime: '85.2%',
      apy: '0%',
      status: 'Jailed',
      description: 'Currently jailed due to downtime',
      website: 'https://inactive.com',
      jailed: true
    }
  ];

  const myDelegations = [
    {
      validator: 'Cosmos Validator 1',
      delegated: '500.0 ATOM',
      rewards: '12.5 ATOM',
      apy: '18.5%',
      value: '$6,500.00',
      address: 'cosmosvaloper1abc123...'
    },
    {
      validator: 'Stakely',
      delegated: '300.0 ATOM',
      rewards: '8.2 ATOM',
      apy: '19.2%',
      value: '$3,900.00',
      address: 'cosmosvaloper1def456...'
    },
    {
      validator: 'Cosmostation',
      delegated: '200.0 ATOM',
      rewards: '5.8 ATOM',
      apy: '19.5%',
      value: '$2,600.00',
      address: 'cosmosvaloper1ghi789...'
    }
  ];

  const stakingOverview = {
    totalStaked: '1,000.0 ATOM',
    totalRewards: '26.5 ATOM',
    totalValue: '$13,000.00',
    availableBalance: '250.0 ATOM',
    vestedTokens: '150.0 ATOM',
    vestingTokens: '100.0 ATOM',
    avgApy: '18.9%'
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
    if (jailed) return 'bg-red-600';
    return status === 'Active' ? 'bg-green-600' : 'bg-gray-600';
  };

  const DelegateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Delegate to {selectedValidator?.name}
          </h3>
          <button
            onClick={() => setShowDelegateModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Validator Details</div>
            <div className="text-white font-medium">{selectedValidator?.name}</div>
            <div className="text-gray-400 text-sm">Commission: {selectedValidator?.commission}</div>
            <div className="text-gray-400 text-sm">Expected APY: {selectedValidator?.apy}</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Amount to Delegate
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none pr-16"
              />
              <span className="absolute right-3 top-2 text-gray-400">ATOM</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Available: {stakingOverview.availableBalance}
            </div>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Transaction Fee:</span>
              <span className="text-white">0.005 ATOM</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Unbonding Period:</span>
              <span className="text-white">21 days</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setShowDelegateModal(false)}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg transition-colors">
            Delegate
          </button>
        </div>
      </div>
    </div>
  );

  const UndelegateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Minus className="h-5 w-5 mr-2" />
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
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Current Delegation</div>
            <div className="text-white font-medium">{selectedValidator?.validator || selectedValidator?.name}</div>
            <div className="text-gray-400 text-sm">
              Delegated: {selectedValidator?.delegated || 'N/A'}
            </div>
            <div className="text-gray-400 text-sm">
              Pending Rewards: {selectedValidator?.rewards || 'N/A'}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Amount to Undelegate
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 outline-none pr-16"
              />
              <span className="absolute right-3 top-2 text-gray-400">ATOM</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Max: {selectedValidator?.delegated?.split(' ')[0] || '0.00'} ATOM
            </div>
          </div>
          
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-3">
            <div className="text-red-400 text-sm font-medium mb-1">⚠️ Important Notice</div>
            <div className="text-red-300 text-sm">
              Undelegated tokens will be locked for 21 days before becoming available.
              You will not earn rewards during this period.
            </div>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Transaction Fee:</span>
              <span className="text-white">0.005 ATOM</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setShowUndelegateModal(false)}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg transition-colors">
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
            onClick={() => setActiveTab('validators')}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === 'validators' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Validators
          </button>
          <button
            onClick={() => setActiveTab('delegations')}
            className={`rounded-md px-4 py-2 transition-colors ${
              activeTab === 'delegations' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            My Delegations
          </button>
        </div>
      </div>

      {/* Staking Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-2xl">🛡️</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stakingOverview.totalStaked}</div>
          <div className="text-gray-400 text-sm">Total Staked</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Award className="h-8 w-8 text-green-400" />
            <span className="text-2xl">🏆</span>
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">{stakingOverview.totalRewards}</div>
          <div className="text-gray-400 text-sm">Total Rewards</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-purple-400" />
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stakingOverview.avgApy}</div>
          <div className="text-gray-400 text-sm">Average APY</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-orange-400" />
            <span className="text-2xl">💰</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stakingOverview.availableBalance}</div>
          <div className="text-gray-400 text-sm">Available Balance</div>
        </div>
      </div>

      {/* Token Vesting Information */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Token Vesting Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-700/30 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Vested Tokens</div>
            <div className="text-2xl font-bold text-green-400">{stakingOverview.vestedTokens}</div>
            <div className="text-gray-400 text-sm">Available for staking</div>
          </div>
          <div className="bg-slate-700/30 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Vesting Tokens</div>
            <div className="text-2xl font-bold text-orange-400">{stakingOverview.vestingTokens}</div>
            <div className="text-gray-400 text-sm">Still vesting</div>
          </div>
          <div className="bg-slate-700/30 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Total Value</div>
            <div className="text-2xl font-bold text-white">{stakingOverview.totalValue}</div>
            <div className="text-gray-400 text-sm">USD equivalent</div>
          </div>
        </div>
      </div>

      {activeTab === 'validators' ? (
        /* Validators List */
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Available Validators</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-slate-700">
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
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {validator.name[0]}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{validator.name}</div>
                          <div className="text-gray-400 text-sm">{validator.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-gray-300">{validator.commission}</td>
                    <td className="py-4 text-blue-400 font-semibold">{validator.votingPower}</td>
                    <td className="py-4 text-green-400 font-semibold">{validator.apy}</td>
                    <td className="py-4 text-gray-300">{validator.uptime}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(validator.status, validator.jailed)}`}>
                        {validator.jailed ? 'Jailed' : validator.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => handleDelegate(validator)}
                        disabled={validator.jailed}
                        className="px-4 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
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
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6">My Delegations</h2>
          <div className="space-y-4">
            {myDelegations.map((delegation, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-linear-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {delegation.validator[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{delegation.validator}</div>
                      <div className="text-gray-400 text-sm">APY: {delegation.apy}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{delegation.value}</div>
                    <div className="text-gray-400 text-sm">Total Value</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-gray-400">Delegated</div>
                    <div className="text-white font-medium">{delegation.delegated}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Pending Rewards</div>
                    <div className="text-green-400 font-medium">{delegation.rewards}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDelegate(delegation)}
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors"
                  >
                    Add More
                  </button>
                  <button
                    onClick={() => handleUndelegate(delegation)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
                  >
                    Undelegate
                  </button>
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors">
                    Claim Rewards
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showDelegateModal && <DelegateModal />}
      {showUndelegateModal && <UndelegateModal />}
    </div>
  );
};

export default Stake;