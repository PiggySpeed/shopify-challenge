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
const ERR_INVALID_NEWSLETTER = 'Please select a topic';
const ERR_INCOMPLETE_FORM = 'Please complete the form';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      invalidEmail: false,
      email: '',
      invalidNewsletter: false,
      newsletter: '',
      incompleteForm: false,
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
        email: email[0],
        incompleteForm: false
      });
    } else if (!input) {
      this.setState({
        invalidEmail: false,
        email: '',
        incompleteForm: false
      })
    } else {
      this.setState({
        invalidEmail: true,
        email: '',
        incompleteForm: false
      })
    }
  };

  handleDropDownChange(e) {
    this.setState({
      newsletter: NEWSLETTER_OPTIONS[e.target.value],
      invalidNewsletter: false,
      incompleteForm: false
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
    }

    if (!this.state.newsletter) {
      this.setState({
        invalidNewsletter: true
      });
    }

    if (!this.state.email || !this.state.newsletter) {
      this.setState({
        incompleteForm: true
      });
      return;
    }

    this.setState({
      submitting: true,
      invalidEmail: false,
      invalidNewsletter: false,
      incompleteForm: false,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        success: true
      });
      console.log(`
        Email: ${this.state.email}, 
        Newsletter Type: ${this.state.newsletter}
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
                errorMsg={this.state.invalidNewsletter ? ERR_INVALID_NEWSLETTER : ''}
              />
            </div>

            <Button
              onClick={this.handleSubmit}
              errorMsg={this.state.incompleteForm ? ERR_INCOMPLETE_FORM : ''}
            >
              {this.state.submitting ? "Submitting..." : "Sign up now"}
            </Button>
          </form>}

        </div>
      </div>
    );
  }
}