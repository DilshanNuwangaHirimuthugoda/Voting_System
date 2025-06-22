return (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Election</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input ... />  {/* title */}
      <input ... />  {/* description */}
      <input ... />  {/* startDate */}
      <input ... />  {/* endDate */}
      <input ... />  {/* maxVoters */}
    </div>
    <button ... >
      <Plus className="w-4 h-4" />
      <span>Create Election</span>
    </button>
  </div>
);
