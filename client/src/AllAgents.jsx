import React from 'react';
import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';

class AllAgents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lAgent: {},
    };
  }
  componentDidMount() {
    fetch(`http://localhost:6969/houseId/listedAgent/${this.props.houseId}`)
      .then(response => { return response.json() })
      .then(response => { return JSON.stringify(response) })
      .then(response => {
        // Constructor Method
        // const agentConstructor = () => {
        //   const temp = JSON.parse(response)[0];
        //   return {
        //     name: temp.agent_name
        //   }
        // }
        // const agent = agentConstructor();

        // Alias Method
        const agent = JSON.parse(response)[0];
        console.log('agent:', agent)


        // response is of type string
        // [{"id":101,"house_id":100,"agent_name":"Arch Weber","agent_company":"Bechtelar, Gislason and Schuppe","agent_phone":"(236) 089-1945 x509","agent_url":"http://lorempixel.com/640/480/people
        this.setState({ lAgent: agent })
        return response;
      });
  }

  render() {
    const { lAgent } = this.state;
    return (
      <div>
        <ListedAgent lAgent={lAgent} />
        <PremierAgent />
        <PremierAgent />
        <PremierAgent />
      </div>
    )
  }
};

export default AllAgents;