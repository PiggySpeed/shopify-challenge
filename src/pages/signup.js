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

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      invalidEmail: false,
      email: '',
      newsletter: '',
      submitting: false
    };
    this.handleValidate = this.handleValidate.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleDropDownChange(e) {
    this.setState({
      newsletter: NEWSLETTER_OPTIONS[e.target.value]
    });
  }

  handleSubmit() {
    if (this.state.submitting) {
      return;
    }

    if (!this.state.email) {
      this.setState({
        invalidEmail: true
      });
      return;
    }

    this.setState({
      submitting: true,
      invalidEmail: false
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        success: true
      });
      console.log(`
        Email: ${this.state.email}, 
        Newsletter Type: ${this.state.newsletter ? this.state.newsletter : "None"}
      `);
    }, 2000);
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-inner-container">

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
                onChange={this.handleDropDownChange}
                errorMsg=""
              />
            </div>

            <Button onClick={this.handleSubmit} errorMsg="">
              {this.state.submitting ? "Submitting..." : "Sign up now"}
            </Button>
          </form>}

        </div>
      </div>
    );
  }
}