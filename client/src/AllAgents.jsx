import React from 'react';
import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';

class AllAgents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lAgent: {},
      pAgent0: {},
      pAgent1: {},
      pAgent2: {},
    };
  }
  componentDidMount() {
    fetch(`http://localhost:6969/houseId/listedAgent/${this.props.houseId}`)
      .then(response => { return response.json() })
      .then(response => { return JSON.stringify(response) })
      .then(response => {

        // response is of type string
        // [{"id":101,"house_id":100,"agent_name":"Arch Weber","agent_company":"Bechtelar, Gislason and Schuppe","agent_phone":"(236) 089-1945 x509","agent_url":"http://lorempixel.com/640/480/people
        const listAgent = JSON.parse(response)[0];
        this.setState({ lAgent: listAgent });
      });
    fetch(`http://localhost:6969/houseId/premierAgents`)
      .then(response => { return response.json() })
      .then(response => { return JSON.stringify(response) })
      .then(response => {
        const preAgent0 = JSON.parse(response)[0];
        const preAgent1 = JSON.parse(response)[1];
        const preAgent2 = JSON.parse(response)[2];
        this.setState({
          pAgent0: preAgent0,
          pAgent1: preAgent1,
          pAgent2: preAgent2,
        });
      });
  }

  render() {
    // const { lAgent } = this.state;
    // const pAgent0 = this.state.pAgents[0];
    // const pAgent1 = this.state.pAgents[1];
    // const pAgent2 = this.state.pAgents[2];
    return (
      <div>
        <ListedAgent lAgent={this.state.lAgent} />
        <PremierAgent pAgents={this.state.pAgent0} />
        <PremierAgent pAgents={this.state.pAgent1} />
        <PremierAgent pAgents={this.state.pAgent2} />
      </div>
    )
  }
};

export default AllAgents;