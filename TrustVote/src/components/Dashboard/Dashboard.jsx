import React from 'react';
import StatsCard from './StatsCard';
import { Vote, Users, Clock, BarChart3 } from 'lucide-react';

const Dashboard = ({ elections }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          icon={Vote}
          title="Total Elections"
          value={elections.length}
          color="text-blue-600"
        />
        <StatsCard
          icon={Users}
          title="Total Candidates"
          value={elections.reduce((sum, e) => sum + e.candidates.length, 0)}
          color="text-green-600"
        />
        <StatsCard
          icon={Clock}
          title="Active Elections"
          value={elections.filter(e => e.status === 'active').length}
          color="text-orange-600"
        />
        <StatsCard
          icon={BarChart3}
          title="Total Votes"
          value={elections.reduce((sum, e) => sum + e.totalVotes, 0)}
          color="text-purple-600"
        />
      </div>
    </div>
  );
};

export default Dashboard;
