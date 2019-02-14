import React from 'react';

const ListedAgent = ({ lAgent }) => {
  return (
    <div>
      <img style={{ height: "50px" }} src={lAgent.url}></img>
      <p>{lAgent.name}</p>
      <p>{lAgent.phone}</p>
    </div >
  )
}

export default ListedAgent;