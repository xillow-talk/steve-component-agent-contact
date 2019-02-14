import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    const information = this.state.information;
    information[name] = value;
    this.setState({ information: information });
  };

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      name: this.state.information.name,
      number: this.state.information.number,
      email: this.state.information.email,
      message: this.state.information.message,
    }
    alert('data collected and submitted: ' + data.name);
    //post request here:
    //saveClientInfo(data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            number:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Message:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Contact Agent" />
        </form>
      </div>
    )
  }
}

export default Form;