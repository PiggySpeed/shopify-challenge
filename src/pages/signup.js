import './signup.less';
import React from 'react';
import {
  Button,
  DropDown,
  Input
} from '../components';

const SIGNUP_PAGE_TITLE = 'Stay up to date with ecommerce trends with Shopify\'s newsletter';
const SIGNUP_PAGE_INSTRUCTIONS = 'Subscribe for free marketing tips';
const SIGNUP_PAGE_THANKS = 'Thanks for subscribing';
const SIGNUP_PAGE_THANKS_INFO = 'You\'ll start receiving free tips and resources soon.';
const ERR_INVALID_EMAIL = 'Please enter a valid email address';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
  }

  render() {
    return (
      <div className="signup-container">

        <h1 className="signup-title">{SIGNUP_PAGE_TITLE}</h1>

        <span className="signup-info">
          {!this.state.success && <p>{SIGNUP_PAGE_INSTRUCTIONS}</p>}
          {this.state.success && <p className="bold">{SIGNUP_PAGE_THANKS}</p>}
          {this.state.success && <p>{SIGNUP_PAGE_THANKS_INFO}</p>}
        </span>

        {!this.state.success && <form className="signup-form">
          <div className="signup-form-elements">
            <Input />
            <DropDown />
          </div>
          <Button>{this.state.success ? "Sign up now" : "Submitting..."}</Button>
        </form>}

      </div>
    );
  }

}