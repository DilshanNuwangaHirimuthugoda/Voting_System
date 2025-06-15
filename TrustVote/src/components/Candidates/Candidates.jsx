import React from 'react';
import RegisterCandidate from './RegisterCandidate';
import CandidateList from './CandidateList';

const Candidates = ({ elections, setElections, newCandidate, setNewCandidate }) => {
  return (
    <div className="space-y-6">
      <RegisterCandidate
        elections={elections}
        newCandidate={newCandidate}
        setNewCandidate={setNewCandidate}
        setElections={setElections}
      />
      {elections.map(election => (
        <CandidateList key={election.id} election={election} />
      ))}
    </div>
  );
};

export default Candidates;