import React from 'react';
import { Vote } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Vote className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">TrustVote</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Admin Dashboard</span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;