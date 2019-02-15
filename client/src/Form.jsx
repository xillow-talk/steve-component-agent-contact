import React from 'react';
import styled from 'styled-components';

//CSS
const FormContainer = styled.div`
  box-sizing: border-box;
  display: block;
  font-family: Gotham,gotham,Verdana,sans-serif;
  line-height: 1.5;
  color: #444;
`;

const Input = styled.input`
  padding-left: 25px;
  min-height: 30px;
  font-size: .86666667rem;
  height: 30px;
  line-height: 1.5em;
  width: 100%;
  padding: 4px 6px 2px;
  border: 1px solid #aaa;
  background-color: #fff;
  box-shadow: inset 0 2px 2px #fafafa, 0 0 0 #62aef7;
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  margin: 0;

  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
`;

//Component
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
    alert('data collected and submitted: ' + data);
    console.log(data);
    //post request here:
    //saveClientInfo(data);
  };

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <label>
            <Input type="text" name="name" placeholder="Your Name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            <Input type="text" name="number" placeholder="Phone" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            <Input type="text" name="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            <Input type="text" name="message" value={this.state.value} onChange={this.handleChange} placeholder="I am interested in 6760 Mission St, Daly City, CA 94014." />
          </label>
          <input type="submit" value="Contact Agent" />
        </form>
      </FormContainer>
    )
  }
}

export default Form;