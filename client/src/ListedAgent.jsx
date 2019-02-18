import React from 'react';
import styled from 'styled-components';

const AgentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-diretion: row;
  margin-bottom: 10px;

  .left {
    display: flex;
    align-items: center;

  }
`;

const Radio = styled.input`
  content: "";
  border: 1px solid #aaa;
  background-color: #fff;
  border-radius: 99px;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 5px;
`;

const Infobox = styled.div`
  display: block;
  line-height: 1em;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  font-family: Gotham,gotham,Verdana,sans-serif;

  .phoneNumber {
    font-size: 14px;
    display: block;
    font-family: Gotham,gotham,Verdana,sans-serif;
    color: #444;
  }
`;

const Badge = styled.span`
display: inline-block;
    max-width: 45px;
    padding: 1px 2px;
    font-family: arial,sans-serif;
    font-size: 9px;
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
font-size: 15px;
font-family: Gotham,gotham,Verdana,sans-serif;
`;

const ReviewContainer = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 3px;  //self
  .starContainer {
    display: flex;
    flex-direction: row;
    color: #03c04a;
  }
  .reviewColor {
    font-size: 15px;
    color: #0074e4;
  }
`;

const SalesContainer = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 3px;  //self
  .salesCount {
    display: inline-block;
    text-align: center;
    font-size: 14px;
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
    font-size: 14px;  //self
    color: #444;
  }
`;

const ListedAgent = ({ lAgent }) => {
  return (
    <AgentContainer>
      <div className="left">
        <Radio type="radio"></Radio>
        <Avatar src={lAgent.url}></Avatar>
        <Infobox>
          <Name>{lAgent.name}</Name>
          <ReviewContainer>
            <span className="starContainer">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
            <span>(<a className="reviewColor">{lAgent.reviews}</a>)</span>
          </ReviewContainer>
          <SalesContainer>
            <span className="salesCount">{lAgent.recentSales}</span>
            <span className="salesText">Recent sales</span>
          </SalesContainer>
          <a className="phoneNumber">{lAgent.phone}</a>
        </Infobox>
      </div>
      <Badge>Listing Agent</Badge>
    </AgentContainer>

  )
}

export default ListedAgent;