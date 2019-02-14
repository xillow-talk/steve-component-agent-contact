import React from 'react';

const ListedAgent = ({ lAgent }) => {
  // Alias illegal agent_name variable with a html friendly variable
  const name = lAgent.agent_name;
  return (
    <div>
      <h3>{name}</h3>
    </div>
    // <img src={props.lAgent.agent_url}></img>
  )
}

export default ListedAgent;