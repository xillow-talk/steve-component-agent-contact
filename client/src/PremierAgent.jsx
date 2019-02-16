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

const Radio = styled.input`
top: 20px;
    border: 1px solid #aaa;
    background-color: #fff;

`;

const Badge = styled.span`
display: inline-block;
    max-width: 45px;
    padding: 1px 2px;
    font-family: arial,sans-serif;
    font-size: 8px;
    text-transform: uppercase;
    text-align: center;
    line-height: 8px;
    border-radius: 2px;
    border: 1px solid #eee;
    color: #aaa;
`;


const PremierAgent = ({ pAgents }) => {
  return (
    <AgentContainer>
      <Radio type="radio" />
      <img style={{ height: "50px" }} src={pAgents.url}></img>
      <Infobox>
        <p>{pAgents.name}</p>
        <span>({pAgents.reviews})</span>
        <br></br>
        <span>{pAgents.recentSales}</span>
        <span>Recent sales</span>
        <p>{pAgents.phone}</p>
      </Infobox>
      <Badge>Premier Agent</Badge>
    </AgentContainer>

  )
}

export default PremierAgent;