import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import AllAgents from './AllAgents.jsx';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App(props) {
  return (
    <div>
      <Title>
        Contact Agent
      </Title>
      <Form />
      <AllAgents houseId={props.houseId} />
    </div>
  )
}

ReactDOM.render(<App houseId="100" />, document.getElementById('app'))
