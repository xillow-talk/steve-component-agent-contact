import React from 'react';
import styled from 'styled-components';

const AgentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-diretion: row;

  .left {
    display: flex;
    align-items: center;

  }
`;

const Infobox = styled.div`
  display: block;
  line-height: 1em;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  font-family: Gotham,gotham,Verdana,sans-serif;
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

const Name = styled.span`
color: #0074e4;
display: block;
font-family: Gotham,gotham,Verdana,sans-serif;
`;

const ReviewContainer = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
  .starContainer {
    display: flex;
    flex-direction: row;
    color: #03c04a;
  }
  .reviewColor {
    color: #0074e4;
  }
`;

const SalesContainer = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
  .salesCount {
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: #1b5098;
    padding: 2px;
    min-width: 20px;
    font-weight: 700;
    border-radius: 2px;
    line-height: 13px;
    height: auto;
  }
  .salesText {
    color: #444;
  }
`;


const PremierAgent = ({ pAgents }) => {
  return (
    <AgentContainer>
      <div className="left">
        <input type="radio" />
        <img style={{ height: "60px", width: "60px" }} src={pAgents.url}></img>
        <Infobox>
          <Name>{pAgents.name}</Name>
          <ReviewContainer>
            <span className="starContainer">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
            <span>(<a className="reviewColor">{pAgents.reviews}</a>)</span>
          </ReviewContainer>
          <SalesContainer>
            <span className="salesCount">{pAgents.recentSales}</span>
            <span className="salesText">Recent sales</span>
          </SalesContainer>
          <a>{pAgents.phone}</a>
        </Infobox>
      </div>
      <Badge>Premier Agent</Badge>
    </AgentContainer>

  )
}

export default PremierAgent;