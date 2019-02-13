import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';
import React from 'react';

class AllAgents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lAgent: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:6969/houseId/listedAgent/${this.props.houseId}`)
      .then(response => { return response.json() })
      .then(console.log(JSON.stringify(response)));
  }

  render() {
    return (
      <div>
        <ListedAgent lAgent={this.state.lAgent} />
        <PremierAgent />
        <PremierAgent />
        <PremierAgent />
      </div>
    )
  }
};

export default AllAgents;