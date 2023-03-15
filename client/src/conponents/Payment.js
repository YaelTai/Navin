import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
export default class Payment extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm" style={{"marginTop":"5%"}}>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        <br/><br/>
            <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br/><br/>
              <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br/><br/>
     
              <input
            type="tel"
            name="expiry"
            placeholder="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /><br/><br/>
                   <input
            type="text"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          {/* <input
            type="text"
            name="focus"
            placeholder="focus"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> */}
        </form>
      </div>
    );
  }
}