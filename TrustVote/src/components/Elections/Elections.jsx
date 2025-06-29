import React from 'react';
import CreateElection from './CreateElection';
import ElectionList from './ElectionList';

const Elections = ({ elections, setElections, newElection, setNewElection }) => {
  return (
    <div className="space-y-6">
      <CreateElection
        newElection={newElection}
        setNewElection={setNewElection}
        setElections={setElections}
        elections={elections}
      />
      <ElectionList elections={elections} />
    </div>
  );
};

export default Elections;