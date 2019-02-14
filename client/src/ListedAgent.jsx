import React from 'react';

const ListedAgent = ({ lAgent }) => {
  return (
    <div>
      <img style={{ height: "50px" }} src={lAgent.url}></img>
      <span>({lAgent.reviews})</span>
      <br></br>
      <span>{lAgent.recentSales}</span>
      <span>Recent sales</span>
      <p>{lAgent.phone}</p>
    </div >
  )
}

export default ListedAgent;