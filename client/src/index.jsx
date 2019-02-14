import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import AllAgents from './AllAgents.jsx';

function App(props) {
  return (
    <div>
      <h5>Contact Agent</h5>
      <Form />
      <AllAgents houseId={props.houseId} />
    </div>
  )
}

ReactDOM.render(<App houseId="100" />, document.getElementById('app'))
