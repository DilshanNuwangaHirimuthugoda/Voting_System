import React from 'react';
import { BarChart3, Vote, Users, UserCheck, Settings } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'elections', label: 'Elections', icon: Vote },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'voting', label: 'Vote', icon: UserCheck },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="mb-8">
      <nav className="flex space-x-8">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;