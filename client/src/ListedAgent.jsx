import React from 'react';

const ListedAgent = ({ lAgent }) => {
  // Alias illegal agent_name variable with a html friendly variable
  // const name = lAgent.name;
  return (
    <div>
      <img style={{ height: "50px" }} src={lAgent.url}></img>
      <p>{lAgent.name}</p>
      <p>{lAgent.phone}</p>
    </div >
  )
}

export default ListedAgent;