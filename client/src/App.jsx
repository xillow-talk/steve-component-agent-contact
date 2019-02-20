import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import AllAgents from './AllAgents.jsx';
import styled from 'styled-components';

//CSS
const Title = styled.h2`
  display: block;
  font-family: Gotham,gotham,Verdana,sans-serif;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const AppContainer = styled.div`
display: block;
width: 300px;
height: 796px;
border: 1px solid #ccc;
border-top: 2px solid #0074e4;
box-shadow: 0 0 2px rgba(0,0,0,.2);
padding: 10px;
`;

const FinePrint = styled.p`
margin-top: 10px;
font-size: 13px;  //self
font-family: Gotham,gotham,Verdana,sans-serif;
line-height: 1.5;
    font-weight: 400;
    color: #666;
`;

const Spacer = styled.hr`
margin-top: 0;
padding-bottom: 0;
margin-bottom: 15px;
border-color: #ccc;
    border-style: solid;
    border-width: 0 0 1px;
`;


//Component
function App(props) {
  return (
    <AppContainer>
      <Title>
        Contact Agent
      </Title>
      <Form />
      <FinePrint>
        By pressing Contact Agent, you agree that Zillow Group and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use. Zillow does not endorse any real estate professionals.
        </FinePrint>
      <Spacer></Spacer>
      <AllAgents houseId={props.houseId} />
    </AppContainer>
  )
}

export default App;