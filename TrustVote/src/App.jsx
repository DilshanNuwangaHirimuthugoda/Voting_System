import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Elections from './components/Elections/Elections';
import Candidates from './components/Candidates/Candidates';
import Voting from './components/Voting/Voting';
import Settings from './components/Settings/Settings';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [elections, setElections] = useState([
    {
      id: 1,
      title: "Student Council President 2025",
      description: "Annual student council election",
      startDate: "2025-06-20",
      endDate: "2025-06-25",
      status: "upcoming",
      pin: "STU2025",
      qrCode: "QR_STU2025",
      candidates: [
        { id: 1, name: "Alice Johnson", votes: 0, party: "Progressive Party" },
        { id: 2, name: "Bob Smith", votes: 0, party: "Unity Coalition" }
      ],
      totalVotes: 0,
      maxVoters: 500
    },
    {
      id: 2,
      title: "Department Head Election",
      description: "Computer Science Department Head",
      startDate: "2025-06-15",
      endDate: "2025-06-18",
      status: "active",
      pin: "CS2025",
      qrCode: "QR_CS2025",
      candidates: [
        { id: 1, name: "Dr. Sarah Wilson", votes: 45, party: "Academic Excellence" },
        { id: 2, name: "Dr. Mike Chen", votes: 38, party: "Innovation First" },
        { id: 3, name: "Dr. Emma Davis", votes: 22, party: "Student Focus" }
      ],
      totalVotes: 105,
      maxVoters: 200
    }
  ]);

  const [newElection, setNewElection] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    maxVoters: 100
  });
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    party: '',
    electionId: ''
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard elections={elections} />;
      case 'elections':
        return <Elections elections={elections} setElections={setElections} newElection={newElection} setNewElection={setNewElection} />;
      case 'candidates':
        return <Candidates elections={elections} setElections={setElections} newCandidate={newCandidate} setNewCandidate={setNewCandidate} />;
      case 'voting':
        return <Voting elections={elections} setElections={setElections} />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderTabContent()}
      </div>
    </div>
  );
};

export default App;