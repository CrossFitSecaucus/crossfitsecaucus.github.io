import React from 'react';
import Link from 'gatsby-link'

import Recaptcha from './Recaptcha';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      firstNameValid: false,
      lastName: '',
      lastNameValid: false,
      email: '',
      emailValid: false,
      phone: '',
      phoneValid: false,
      text: '',
      textValid: false,
      recaptchaComplete: false,
      inflight: false,
      successMessage: null,
      errorMessage: null,
      formVersion: 0,
    };
    this.successMessageTimeout = null;
    this.errorMessageTimeout = null;
    this.successMessage = this.successMessage.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleRecaptchaChange = this.handleRecaptchaChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  resetForm() {
    this.setState({
      firstName: '',
      firstNameValid: false,
      lastName: '',
      lastNameValid: false,
      email: '',
      emailValid: false,
      phone: '',
      phoneValid: false,
      text: '',
      textValid: false,
      recaptchaComplete: false,
      inflight: false,
      formVersion: this.state.formVersion + 1,
    });
  }

  successMessage(successMessage) {
    if (this.successMessageTimeout !== null) {
      clearTimeout(this.successMessageTimeout);
      this.successMessageTimeout = null;
    }

    this.successMessageTimeout = setTimeout(() => {
      this.setState({ successMessage: null });
    }, 10000);

    this.setState({ successMessage, errorMessage: null });
  }

  errorMessage(errorMessage) {
    if (this.errorMessageTimeout !== null) {
      clearTimeout(this.errorMessageTimeout);
      this.errorMessageTimeout = null;
    }

    this.errorMessageTimeout = setTimeout(() => {
      this.setState({ errorMessage: null });
    }, 5000);

    this.setState({ errorMessage, successMessage: null });
  }

  handleRecaptchaChange(recaptcha) {
    this.setState({ recaptcha, recaptchaComplete: recaptcha !== null });
  }

  handleFirstNameChange(event) {
    const firstName = event.target.value;
    this.setState({ firstName, firstNameValid: firstName.trim().length > 0 });
  }

  handleLastNameChange(event) {
    const lastName = event.target.value;
    this.setState({ lastName, lastNameValid: lastName.trim().length > 0 });
  }

  handleEmailChange(event) {
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = event.target.value;
    this.setState({ email, emailValid: emailFormat.test(String(email).toLowerCase()) });
  }

  handlePhoneChange(event) {
    const phone = (String(event.target.value || '')).replace(/[^\d().+ -]/g, '').replace(/\s+/, ' ');
    this.setState({ phone, phoneValid: phone.replace(/[^\d]/g, '').length >= 10 });
  }

  handleTextChange(event) {
    const text = event.target.value;
    const textValid = text.trim().length > 10;
    this.setState({ text, textValid })
  }

  handleFormSubmission(event) {
    event.preventDefault();
    this.setState({ inflight: true });
    const { firstName, lastName, email, phone, text, recaptcha } = this.state;

    $.ajax({
      type: "POST",
      url: 'https://us-central1-cs-site-209414.cloudfunctions.net/contactUsEmail',
      data: JSON.stringify({
        firstName, lastName, email, phone, text: (text || '') + "\n\n\n" + (this.props.messageAddition || ''), recaptcha
      }),
      success: response => {
        this.resetForm();
        this.successMessage('Your message was successfully sent!');
      },
      dataType: 'json',
      contentType: 'application/json'
    }).fail(({responseJSON}) => {
      this.errorMessage(responseJSON.message);
      window.scrollTo(0, 0);
    })
    .always(() => this.setState({ inflight: false }));

  }

  render() {
    const {
      firstName, firstNameValid,
      lastName, lastNameValid,
      email, emailValid,
      phone, phoneValid,
      text, textValid,
      recaptchaComplete, inflight, successMessage, errorMessage
    } = this.state;

    const formValid = firstNameValid && lastNameValid && emailValid &&
      phoneValid && textValid && recaptchaComplete;

    return (
      <div className={this.props.noCard ? "": "card card-contact"}>
          <form id="contact-form" method="post">

            {this.props.title && (
              <div className="card-header card-header-raised card-header-primary text-center">
                  <h4 className="card-title">{this.props.title || 'Contact Us'}</h4>
              </div>
            )}


              <div className="card-body">
                <div className="row">
                  <div className="col">
                  {this.props.header || ''}
                  </div>
                </div>
                <div className="row bmd-form-group">
                  <div className="col-md-6">
                    <div className={`form-group label-floating is-filled bmd-form-group ${!inflight && firstName.length > 0 ? (firstNameValid ? 'has-success' : 'has-danger') : ''}`}>
                      <label className="bmd-label-floating">First name</label>
                      <input type="text" name="name" className="form-control" value={firstName} onChange={this.handleFirstNameChange} disabled={inflight} />
                      <span className="material-input"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`form-group label-floating is-filled bmd-form-group ${!inflight && lastName.length > 0 ? (lastNameValid ? 'has-success' : 'has-danger') : ''}`}>
                      <label className="bmd-label-floating">Last name</label>
                      <input type="text" name="name" className="form-control" value={lastName} onChange={this.handleLastNameChange} disabled={inflight} />
                      <span className="material-input"></span>
                    </div>
                  </div>
                </div>
                <div className={`form-group label-floating is-filled bmd-form-group ${!inflight && email.length > 0 ? (emailValid ? 'has-success' : 'has-danger') : ''}`}>
                  <label className="bmd-label-floating">Email address</label>
                  <input type="text" name="email" className="form-control" value={email} onChange={this.handleEmailChange} disabled={inflight} />
                  <span className="material-input"></span>
                </div>
                <div className={`form-group label-floating is-filled bmd-form-group ${!inflight && phone.length > 0 ? (phoneValid ? 'has-success' : 'has-danger') : ''}`}>
                  <label className="bmd-label-floating">Phone number</label>
                  <input type="text" name="phone" className="form-control" value={phone} onChange={this.handlePhoneChange} disabled={inflight} />
                  <span className="material-input"></span>
                </div>
                <div className={`form-group label-floating is-filled bmd-form-group ${!inflight && text.length > 0 ? (textValid ? 'has-success' : 'has-danger') : ''}`}>
                  <label htmlFor="exampleMessage1" className="bmd-label-floating">Your Message {text.length > 0 && !textValid && ' - Please elaborate on your request.' }</label>
                  <textarea name="message" className="form-control" id="exampleMessage1" rows="6" value={text} onChange={this.handleTextChange} disabled={inflight}></textarea>
                  <span className="material-input"></span>
                </div>
                <div className="row bmd-form-group">
                  <Recaptcha
                    formVersion={this.state.formVersion}
                    id="g-recaptcha-contact"
                    sitekey="6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3"
                    onRecaptchaChange={this.handleRecaptchaChange} />
                </div>

                {successMessage && (
                  <div className="alert alert-info">
                    <div className="container">
                      <div className="alert-icon">
                        <i className="material-icons">info_outline</i>
                      </div>
                      <b>{successMessage}</b>
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="alert alert-danger">
                    <div className="container">
                      <div className="alert-icon">
                        <i className="material-icons">error_outline</i>
                      </div>
                      <b>{errorMessage}</b>
                    </div>
                  </div>
                )}
              </div>

              <div className="card-footer pull-right">
                <button type="submit" className="btn btn-primary pull-right" disabled={!formValid || inflight} onClick={this.handleFormSubmission}>
                  {!inflight ? (this.props.submitLabel || 'Send Message') : 'Sending ...'}
                </button>
              </div>
          </form>
      </div>
    )
  }
}


export default Contact;

