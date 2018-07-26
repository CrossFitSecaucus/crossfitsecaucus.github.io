import React from 'react';

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
    };
    this.recaptchaListener = null;
    this.successMessageTimeout = null;
    this.errorMessageTimeout = null;
    this.listenForRecaptchaComplete = this.listenForRecaptchaComplete.bind(this);
    this.successMessage = this.successMessage.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  componentWillUnmount() {
    if (this.recaptchaListener) {
      clearInterval(this.recaptchaListener);
    }
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
    });
    if (typeof grecaptcha !== 'undefined' && typeof grecaptcha.reset === 'function') {
      grecaptcha.reset();
    }
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

  listenForRecaptchaComplete() {
    if (!this.recaptchaListener) {
      this.recaptchaListener = setInterval(() => {
        const recaptchaField = document.getElementById('g-recaptcha-response');
        const recaptcha = String(recaptchaField && recaptchaField.value) || '';
        const recaptchaComplete = recaptcha.length > 0;
        if (recaptchaComplete !== this.state.recaptchaComplete || recaptcha !== this.state.recaptcha) {
          this.setState({ recaptchaComplete, recaptcha });
        }
      }, 500);
    }
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
    if (textValid) {
      this.listenForRecaptchaComplete();
    }
  }

  handleFormSubmission(event) {
    event.preventDefault();
    this.setState({ inflight: true });
    const { firstName, lastName, email, phone, text, recaptcha } = this.state;

    $.ajax({
      type: "POST",
      url: 'https://us-central1-cs-site-209414.cloudfunctions.net/contactUsEmail',
      data: JSON.stringify({
        firstName, lastName, email, phone, text, recaptcha
      }),
      success: response => {
        this.resetForm();
        this.successMessage('Your message was successfully sent!');
      },
      dataType: 'json',
      contentType: 'application/json'
    }).fail(({responseJSON}) => this.errorMessage(responseJSON.message))
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
      <div className="contactus-1 section-image" style={{backgroundImage: "url('img/contact-bg.jpg')"}}>
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-12">
                      <h2 className="title">Get in Touch</h2>
                      <div className="info info-horizontal">
                          <div className="icon icon-primary">
                              <i className="material-icons">phone</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">
                              Give us a ring or text us at:</h4>
                              <h3 className="text-primary">(201) 503-6326</h3>
                          </div>
                      </div>
                      <div className="info info-horizontal">
                          <div className="icon icon-primary">
                              <i className="material-icons">pin_drop</i>
                          </div>
                          <div className="description">
                              <h4 className="info-title">We are located at:</h4>
                              <h3>
                                333 Meadowlands Pkwy<br/>
                                Secaucus NJ 07094<br/>
                              </h3>
                              <p>
                                <a href="https://www.google.com/maps/place/CrossFit+Secaucus/@40.779335,-74.082018,15z/data=!4m2!3m1!1s0x0:0x53a6798b1e6295e6" target="_blank">Directions</a>
                              </p>
                              <img src="http://maps.googleapis.com/maps/api/staticmap?center=333+Meadowland+Parkway,+Secaucus&zoom=12&scale=2&size=300x300&maptype=terrain&sensor=false&format=png&visual_refresh=true&markers=size:mid%7Ccolor:orange%7C333+Meadowlands+Parkway,+Secaucus" className="img-raised rounded img-fluid" />
                          </div>
                      </div>
                  </div>
                  <div className="col-md-7 ml-auto">
                      <div className="card card-contact">
                          <form id="contact-form" method="post">
                              <div className="card-header card-header-raised card-header-primary text-center">
                                  <h4 className="card-title">Contact Us</h4>
                              </div>


                              <div className="card-body">
                                {
                                  successMessage &&
                                      <div className="alert alert-info">
                                          <div className="container">
                                              <div className="alert-icon">
                                                  <i className="material-icons">info_outline</i>
                                              </div>
                                              <b>{successMessage}</b>
                                          </div>
                                      </div>
                                }

                                {
                                  errorMessage &&
                                      <div className="alert alert-danger">
                                          <div className="container">
                                              <div className="alert-icon">
                                                  <i className="material-icons">error_outline</i>
                                              </div>
                                              <b>{errorMessage}</b>
                                          </div>
                                      </div>
                                }

                                  <div className="row">
                                      <div className="col">
                                      <p className="text-muted">Please complete all form fields, and elaborate on your inquiry. We will get back to you within a day.</p>
                                      </div>
                                  </div>
                                  <div className="row">
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
                                  <div className="row">
                                    <div className="g-recaptcha" data-sitekey="6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3" style={{height: 100, marginLeft: 15}}></div>
                                  </div>
                                </div>
                              <div className="card-footer pull-right">
                                <button type="submit" className="btn btn-primary pull-right" disabled={!formValid || inflight} onClick={this.handleFormSubmission}>
                                  { !inflight ? 'Send Message' : 'Sending ...'}
                                </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}


export default Contact

