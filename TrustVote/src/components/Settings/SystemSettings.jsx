import React from 'react';

const SystemSettings = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">System Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Default Election Duration (days)
          </label>
          <input
            type="number"
            defaultValue={7}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Candidates per Election
          </label>
          <input
            type="number"
            defaultValue={10}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="email-notifications" className="rounded" />
          <label htmlFor="email-notifications" className="text-sm text-gray-700">
            Send email notifications for election updates
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="auto-results" className="rounded" defaultChecked />
          <label htmlFor="auto-results" className="text-sm text-gray-700">
            Automatically publish results when election ends
          </label>
        </div>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Save Settings
      </button>
    </div>
  );
};

export default SystemSettings;