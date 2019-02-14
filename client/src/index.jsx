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

<<<<<<< HEAD
ReactDOM.render(<App houseId="101" />, document.getElementById('app'))
=======
ReactDOM.render(<App houseId="100" />, document.getElementById('app'))
>>>>>>> de8f1f334a289f73308798119e8c654cc1a81757
