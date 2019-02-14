import React from 'react';

const PremierAgent = ({ pAgents }) => {
  return (
    <div style={{ display: flex, flexDirection: row }}>
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