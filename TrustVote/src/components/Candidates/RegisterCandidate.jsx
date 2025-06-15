import React from 'react';
import { UserCheck } from 'lucide-react';

const RegisterCandidate = ({ elections, newCandidate, setNewCandidate, setElections }) => {
  const registerCandidate = () => {
    if (!newCandidate.name || !newCandidate.electionId) return;
    
    const candidate = {
      id: Date.now(),
      ...newCandidate,
      votes: 0
    };
    
    setElections(elections.map(election => 
      election.id === parseInt(newCandidate.electionId)
        ? { ...election, candidates: [...election.candidates, candidate] }
        : election
    ));
    
    setNewCandidate({ name: '', party: '', electionId: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Register New Candidate</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Candidate Name"
          value={newCandidate.name}
          onChange={(e) => setNewCandidate({...newCandidate, name: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Party/Affiliation"
          value={newCandidate.party}
          onChange={(e) => setNewCandidate({...newCandidate, party: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={newCandidate.electionId}
          onChange={(e) => setNewCandidate({...newCandidate, electionId: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Election</option>
          {elections.map(election => (
            <option key={election.id} value={election.id}>{election.title}</option>
          ))}
        </select>
      </div>
      <button
        onClick={registerCandidate}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
      >
        <UserCheck className="w-4 h-4" />
        <span>Register Candidate</span>
      </button>
    </div>
  );
};

export default RegisterCandidate;