import React from 'react';

// styled components
import {
  AgentContainer,
  Radio,
  Avatar,
  Infobox,
  Badge,
  Name,
  ReviewContainer,
  SalesContainer
} from '../styles.js';


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