import { Plus, X } from "lucide-react";
import { useState } from "react";

const DelegateModal = ({
  setShowDelegateModal,
  stakingOverview
}: {
  setShowDelegateModal: Function;
  stakingOverview: any;
}) => {
  const [selectedValidator, setSelectedValidator] = useState<any>(null);

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-semibold text-white">
            <Plus className="mr-2 h-5 w-5" />
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
          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="mb-2 text-sm text-gray-400">Validator Details</div>
            <div className="font-medium text-white">{selectedValidator?.name}</div>
            <div className="text-sm text-gray-400">Commission: {selectedValidator?.commission}</div>
            <div className="text-sm text-gray-400">Expected APY: {selectedValidator?.apy}</div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-400">Amount to Delegate</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 pr-16 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <span className="absolute top-2 right-3 text-gray-400">ATOM</span>
            </div>
            <div className="mt-1 text-sm text-gray-400">Available: {stakingOverview.availableBalance}</div>
          </div>

          <div className="rounded-lg bg-slate-700/50 p-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Transaction Fee:</span>
              <span className="text-white">0.005 ATOM</span>
            </div>
            <div className="mt-1 flex justify-between text-sm">
              <span className="text-gray-400">Unbonding Period:</span>
              <span className="text-white">21 days</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => setShowDelegateModal(false)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
          >
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-linear-to-r from-green-600 to-green-700 px-4 py-2 text-white transition-colors hover:from-green-500 hover:to-green-600">
            Delegate
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelegateModal;
