import React from 'react';
import styled from 'styled-components';

const AgentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  // justify-content: space-between;
  flex-wrap: nowrap;
  flex-diretion: row;
`;

const Infobox = styled.div`
  display: block;
  line-height: 1em;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  font-family: Gotham,gotham,Verdana,sans-serif;
`;


const PremierAgent = ({ pAgents }) => {
  return (
    <AgentContainer>
      <img style={{ height: "50px" }} src={pAgents.url}></img>
      <Infobox>
        <p>{pAgents.name}</p>
        <span>({pAgents.reviews})</span>
        <br></br>
        <span>{pAgents.recentSales}</span>
        <span>Recent sales</span>
        <p>{pAgents.phone}</p>
      </Infobox>
    </AgentContainer>

  )
}

export default PremierAgent;