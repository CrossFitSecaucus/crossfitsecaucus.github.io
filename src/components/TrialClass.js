import React from 'react';
import moment from 'moment';

import Recaptcha from './Recaptcha';

const OptionsList = ({options, name, onChange}) => (
  <div>
  {
    options.map(option => (
      <div className="form-check" key={[name, option.id].join('_')}>
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
            />
            {option.label || option.value}
          <span className="circle">
            <span className="check"></span>
          </span>
        </label>
      </div>
    ))
  }
  </div>
)


class TrialClass extends React.Component {
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
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleAppointmentChange = this.handleAppointmentChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.buildAppointmentTimes = this.buildAppointmentTimes.bind(this);
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
      recaptchaComplete: false,
      inflight: false,
      formVersion: this.state.formVersion + 1,
    });
    document.getElementById('trial-form').reset();
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

  buildAppointmentTimes() {
    const trialTimes = {
      1: '7:30pm', // Monday
      2: '4:30pm', // Tuesday
      4: '7:30pm', // Thursday
      5: '6:30pm', // Friday
      6: '10am', // Saturday
    };

    const appointmentTimes = [];

    for (let offset = 1 ; offset <= 9; offset++) {
      const day = moment().add(offset, 'days');
      const time = trialTimes[day.day()];
      if (time) {
        appointmentTimes.push({
          id: offset,
          value: day.format('dddd, MMMM Do @ ') + time,
        });
      }
    }
    return appointmentTimes;
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

  handleLastNameChange(event) {
    const lastName = event.target.value;
    this.setState({ lastName, lastNameValid: lastName.trim().length > 0 });
  }

  handleTextChange(event) {
    const text = event.target.value;
    this.setState({text});
  }

  handleAppointmentChange(event) {
    const appointment = event.target.value;
    this.setState({appointment, appointmentValid: !!appointment});
  }

  handleExperienceChange(event) {
    const experience = event.target.value;
    this.setState({experience, experienceValid: !!experience});
  }

  handleFormSubmission(event) {
    event.preventDefault();
    this.setState({ inflight: true });
    const { firstName, lastName, email, phone, text,
      appointment, experience, recaptcha } = this.state;

    $.ajax({
      type: "POST",
      url: 'https://us-central1-cs-site-209414.cloudfunctions.net/trialClassEmail',
      data: JSON.stringify({
        firstName, lastName, email, phone, text, appointment, experience, recaptcha
      }),
      success: response => {
        this.resetForm();
        this.successMessage('Your trial class was successfully booked!');
        window.scrollTo(0, 0);
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
      text,
      experience, experienceValid,
      appointment, appointmentValid,
      recaptchaComplete, inflight, successMessage, errorMessage
  } = this.state;

  const formValid = firstNameValid && lastNameValid && emailValid &&
    phoneValid && experienceValid && appointmentValid && recaptchaComplete;

  return (
    <div className="card card-contact">
      <form id="trial-form" method="post">
        <div className="card-header card-header-raised card-header-success text-center">
          <h3 className="card-title">Schedule A Free Trial Class</h3>
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
              <p className="text-muted">
                Please complete all form fields.
              </p>
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

          <div className="row">
            <div className="col-md-6">
              <div className={`form-group label-floating is-filled bmd-form-group ${!inflight && email.length > 0 ? (emailValid ? 'has-success' : 'has-danger') : ''}`}>
                  <label className="bmd-label-floating">Email address</label>
                  <input type="text" name="email" className="form-control" value={email} onChange={this.handleEmailChange} disabled={inflight} />
                  <span className="material-input"></span>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`form-group label-floating is-filled bmd-form-group ${!inflight && phone.length > 0 ? (phoneValid ? 'has-success' : 'has-danger') : ''}`}>
                  <label className="bmd-label-floating">Phone number</label>
                  <input type="text" name="phone" className="form-control" value={phone} onChange={this.handlePhoneChange} disabled={inflight} />
                  <span className="material-input"></span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h4>Experience Level</h4>

              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input"
                    type="radio" name="experience"
                    value="New to CrossFit"
                    onChange={this.handleExperienceChange}
                    />
                    New to CrossFit
                  <span className="circle">
                      <span className="check"></span>
                  </span>
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input"
                    type="radio"
                    name="experience"
                    value="Experienced CrossFitter"
                    onChange={this.handleExperienceChange}
                    /> Experienced CrossFitter (3+ months)
                  <span className="circle">
                    <span className="check"></span>
                  </span>
                </label>
              </div>
            </div>

            <div className="col-md-6">
              <h4>Appointment Date and Time</h4>
              <OptionsList
                name="appointment"
                options={this.buildAppointmentTimes()}
                onChange={this.handleAppointmentChange}
                />
            </div>
          </div>

          <div className="form-group label-floating is-filled bmd-form-group">
              <label htmlFor="exampleMessage1" className="bmd-label-floating">What are your goals? Do you have any questions, or is there anything you'd like us to know?</label>
              <textarea name="message" className="form-control" id="exampleMessage1" rows="6" value={text} onChange={this.handleTextChange} disabled={inflight}></textarea>
              <span className="material-input"></span>
          </div>

          <div className="row">
            <Recaptcha
              formVersion={this.state.formVersion}
              id="g-recaptcha-trial-class"
              sitekey="6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3"
              onRecaptchaChange={this.handleRecaptchaChange} />
          </div>
        </div>

        <div className="card-footer pull-right">
          <button type="submit" className="btn btn-primary pull-right" disabled={!formValid || inflight} onClick={this.handleFormSubmission}>
            { !inflight ? 'Book Appointment' : 'Booking Appointment ...'}
          </button>
        </div>
      </form>
    </div>
    )
  }
}

export default TrialClass

