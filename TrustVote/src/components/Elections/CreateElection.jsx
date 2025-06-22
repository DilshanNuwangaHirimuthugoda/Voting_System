import React from 'react';
import { Plus } from 'lucide-react';
import { generatePin, generateQR } from '../../utils/electionUtils';

const CreateElection = ({ newElection, setNewElection, setElections, elections }) => {
  const createElection = () => {
    if (!newElection.title || !newElection.startDate || !newElection.endDate) return;
    
    const pin = generatePin();
    const election = {
      id: Date.now(),
      ...newElection,
      pin,
      qrCode: generateQR(pin),
      candidates: [],
      totalVotes: 0,
      status: new Date(newElection.startDate) > new Date() ? 'upcoming' : 'active'
    };
    
    setElections([...elections, election]);
    setNewElection({ title: '', description: '', startDate: '', endDate: '', maxVoters: 100 });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Election</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Election Title"
          value={newElection.title}
          onChange={(e) => setNewElection({...newElection, title: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          value={newElection.description}
          onChange={(e) => setNewElection({...newElection, description: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          placeholder="Start Date"
          value={newElection.startDate}
          onChange={(e) => setNewElection({...newElection, startDate: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          placeholder="End Date"
          value={newElection.endDate}
          onChange={(e) => setNewElection({...newElection, endDate: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Max Voters"
          value={newElection.maxVoters}
          onChange={(e) => setNewElection({...newElection, maxVoters: parseInt(e.target.value)})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={createElection}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
      >
        <Plus className="w-4 h-4" />
        <span>Create Election</span>
      </button>
    </div>
  );
};

export default CreateElection;