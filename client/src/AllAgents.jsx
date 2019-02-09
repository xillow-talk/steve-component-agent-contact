import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';
import React from 'react';

function AllAgents() {
  return (
    <div>
      <ListedAgent />
      <PremierAgent />
      <PremierAgent />
      <PremierAgent />
    </div>
  )
};

export default AllAgents;