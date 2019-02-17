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
color: #62aef7;
display: block;
font-family: Gotham,gotham,Verdana,sans-serif;
`;

const Stars = styled.span`
content: "\e044\e044\e044\e044\e044";
color: #03c04a;
font-family: zmod-icon-set1;
speak: none;
letter-spacing: 1px;
`;

const ListedAgent = ({ lAgent }) => {
  return (
    <AgentContainer>
      <div className="left">
        <input type="radio" />
        <img style={{ height: "50px" }} src={lAgent.url}></img>
        <Infobox>
          <Name>{lAgent.name}</Name>
          <i class="fas fa-star"></i>
          <a class="cf-rvw-stars-link rating" href="/profile/sugueymelgar/#reviews"><span class="cf-rvw-stars zsg-rating zsg-rating_500"></span></a>
          <span>({lAgent.reviews})</span>
          <span>{lAgent.recentSales}</span>
          <span>Recent sales</span>
          <p>{lAgent.phone}</p>
        </Infobox>
      </div>
      <Badge>Listed Agent</Badge>
    </AgentContainer>

  )
}

export default ListedAgent;