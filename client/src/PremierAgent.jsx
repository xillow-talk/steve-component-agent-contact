import React from 'react';

const PremierAgent = ({ pAgents }) => {
  // Alias illegal agent_name variable with a html friendly variable
  // const name = pAgents0.name;
  return (
    <div>
      <img style={{ height: "50px" }} src={pAgents.url}></img>
      <p>{pAgents.name}</p>
      <span>({pAgents.reviews})</span>
      <br></br>
      <span>{pAgents.recentSales}</span>
      <span>Recent sales</span>
      <p>{pAgents.phone}</p>
    </div >
  )
}

export default PremierAgent;