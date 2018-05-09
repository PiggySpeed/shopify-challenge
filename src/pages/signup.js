import './signup.less';
import React from 'react';
import {
  Button,
  DropDown,
  ValidatedInput
} from '../components';

const SIGNUP_PAGE_TITLE = 'Stay up to date with ecommerce trends with Shopify\'s newsletter';
const SIGNUP_PAGE_INSTRUCTIONS = 'Subscribe for free marketing tips';
const SIGNUP_PAGE_THANKS = 'Thanks for subscribing';
const SIGNUP_PAGE_THANKS_INFO = 'You\'ll start receiving free tips and resources soon.';
const NEWSLETTER_OPTIONS = ['Marketing', 'Mobile', 'Ecommerce', 'Design'];
const ERR_INVALID_EMAIL = 'Please enter a valid email address';
const ERR_INVALID_NEWSLETTER = 'Please select a newsletter type';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      invalidEmail: false,
      email: '',
      invalidNewsletter: false,
      newsletter: '',
      submitting: false
    };
    this.handleValidate = this.handleValidate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleValidate(e) {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const input = e.target.value;
    const email = input.match(regex);

    if (email) {
      this.setState({
        invalidEmail: false,
        email: email[0]
      });
    } else if (!input) {
      this.setState({
        invalidEmail: false,
        email: ''
      })
    } else {
      this.setState({
        invalidEmail: true,
        email: ''
      })
    }
  };

  handleSelect(e) {
    console.log(e);
  }

  handleSubmit(e) {
    console.log('submitting...');

    // TODO: setTimeout
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

        {!this.state.success && <form id="signup" className="signup-form">
          <div className="signup-form-elements">

            <ValidatedInput
              onBlur={this.handleValidate}
              errorMsg={this.state.invalidEmail ? ERR_INVALID_EMAIL : ''}
            />

            <DropDown
              options={NEWSLETTER_OPTIONS}
              onSelect={this.handleSelect}
              errorMsg={this.state.invalidNewsletter ? ERR_INVALID_NEWSLETTER : ''}
            />
          </div>

          <Button onClick={this.handleSubmit}>
            {this.state.submitting ? "Submitting..." : "Sign up now"}
          </Button>
        </form>}

      </div>
    );
  }

}