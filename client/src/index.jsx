import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import AllAgents from './AllAgents.jsx';

function App() {
  return (
    <div>
      <h5>Contact Agent</h5>
      <Form />
      <AllAgents />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))