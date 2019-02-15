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
border: 1px solid #ccc;
border-top: 2px solid #0074e4;
box-shadow: 0 0 2px rgba(0,0,0,.2);
padding: 10px;
  `;

//Component
function App(props) {
  return (
    <AppContainer>
      <Title>
        Contact Agent
      </Title>
      <Form />
      <AllAgents houseId={props.houseId} />
    </AppContainer>
  )
}

ReactDOM.render(<App houseId="100" />, document.getElementById('app'))
