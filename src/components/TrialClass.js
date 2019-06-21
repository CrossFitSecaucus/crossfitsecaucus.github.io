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
      fundamentals: '',
      fundamentalsValid: false,
      plan: '',
      planValid: false,
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
    this.handleFundamentalsChange = this.handleFundamentalsChange.bind(this);
    this.handlePlanChange = this.handlePlanChange.bind(this);
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
      1: '7:20pm', // Monday
      2: '4:20pm', // Tuesday
      3: '7:20pm', // Wednesday
      // 4: '7:20pm', // Thursday
      5: '4:20pm', // Friday
      6: '10:05am', // Saturday
    };

    const closedDays = [
      '2019-07-01',
      '2019-07-03',
      '2019-07-04',
      '2019-07-05',
      '2019-07-08',
      '2019-09-02',
      '2019-11-27',
      '2019-11-28',
      '2019-11-29',
      '2019-11-30',
      '2019-12-24',
      '2019-12-25',
      '2019-12-26',
      '2019-12-27',
      '2019-12-28',
      '2019-12-29',
      '2019-12-30',
      '2019-12-31',
      '2020-01-01',
    ].map(d => moment(d, 'YYYY-MM-DD').startOf('day'));

    const appointmentTimes = [];
    let maxFutureDays = 9;

    for (let offset = 1 ; offset <= maxFutureDays; offset++) {
      const day = moment().startOf('day').add(offset, 'days');
      if (closedDays.find(d => d.valueOf() == day.valueOf())) {
        maxFutureDays++;
        continue;
      }
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

  handleFundamentalsChange(event) {
    const fundamentals = event.target.value;
    this.setState({fundamentals, fundamentalsValid: !!fundamentals});
  }

  handlePlanChange(event) {
    const plan = event.target.value;
    this.setState({plan, planValid: !!plan});
  }

  handleFormSubmission(event) {
    event.preventDefault();
    this.setState({ inflight: true });
    const { firstName, lastName, email, phone, text,
      appointment, experience, fundamentals, plan, recaptcha } = this.state;

    $.ajax({
      type: "POST",
      url: 'https://us-central1-cs-site-209414.cloudfunctions.net/trialClassEmail',
      data: JSON.stringify({
        firstName, lastName, email, phone, text, appointment, experience, fundamentals, plan, recaptcha
      }),
      success: response => {
        this.resetForm();
        this.successMessage('Your trial class appointment was successfully booked!');
        window.scrollTo(0, 0);
        if (typeof gtag == 'function') {
          gtag('event', 'generate_lead');
        }
        if (typeof fbq == 'function') {
          fbq('track', 'Schedule');
        }
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
      fundamentalsValid, planValid,
      text,
      experience, experienceValid,
      appointment, appointmentValid,
      recaptchaComplete, inflight, successMessage, errorMessage
  } = this.state;

  const formValid = firstNameValid && lastNameValid && emailValid &&
    phoneValid && experienceValid && appointmentValid && fundamentalsValid
    && planValid && recaptchaComplete;

  return (
    <div className="card card-contact">
      <form id="trial-form" method="post">
        <div className="card-header card-header-raised card-header-success text-center">
          <h3 className="card-title">Schedule Your Free Trial Class</h3>
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
                <strong>
                {`
                  Free trial classes are available for local residents only.
                  Please bring your driver's license or an ID with your home address.
                  If you're from out of town, you may be interested in
                `}
                <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=29&prodId=10278" target="_blank">purchasing a drop-in pass</a>.
                </strong>
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

          <div className="row bmd-form-group">
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

            {
              firstNameValid && lastNameValid && emailValid && phoneValid &&
                <div className="row bmd-form-group">
                  <div className="col-12">
                    <h3>What's your experience level?</h3>

                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input"
                          type="radio" name="experience"
                          value="New to CrossFit"
                          onChange={this.handleExperienceChange}
                          />
                          I'm New to CrossFit
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
                          /> I'm an Experienced CrossFitter (3+ months)
                        <span className="circle">
                          <span className="check"></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
            }

            {
              experienceValid &&
                <div className="row bmd-form-group">
                  <div className="col-12">
                    <h3>Appointment Date and Time</h3>
                    <p>
                      Please arrive at the time selected below to get the most out
                      of your trial class.
                    </p>
                    <OptionsList
                      name="appointment"
                      options={this.buildAppointmentTimes()}
                      onChange={this.handleAppointmentChange}
                      />
                  </div>
                </div>
            }



          {
            appointmentValid &&
              <div className="row bmd-form-group">
                <div className="col-12">
                  <h3>Fundamentals Program</h3>
                  <p>
                    After your trial class, you have the opportunity to sign up for
                    our fundamentals program, which is required before starting with
                    CrossFit group classes. The program consists of at least 4 one-hour
                    personal training sessions ($75/each) during which you will
                    learn the basics of CrossFit and proper movement patterns to
                    be safe and efficient in our group workouts.
                  </p>
                  <p>
                    <strong>
                    What times would you be available to start fundamentals after
                    your trial class?
                    </strong>
                  </p>

                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input"
                        type="radio" name="fundamentals"
                        value="mornings"
                        onChange={this.handleFundamentalsChange}
                        />
                        Mornings
                      <span className="circle">
                          <span className="check"></span>
                      </span>
                    </label>
                  </div>

                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input"
                        type="radio" name="fundamentals"
                        value="evenings"
                        onChange={this.handleFundamentalsChange}
                        />
                        Evenings
                      <span className="circle">
                          <span className="check"></span>
                      </span>
                    </label>
                  </div>

                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input"
                        type="radio" name="fundamentals"
                        value="varies"
                        onChange={this.handleFundamentalsChange}
                        />
                        Not sure yet, it varies
                      <span className="circle">
                          <span className="check"></span>
                      </span>
                    </label>
                  </div>

                </div>
              </div>
            }

            {
              fundamentalsValid &&
                <div className="row bmd-form-group">
                  <div className="col-12">
                    <h3>Monthly Pricing Options</h3>
                    <p>
                      <strong>
                      Once you graduate from fundamentals, you're ready for group classes.
                      Which plan would work best for you?
                      </strong>
                    </p>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input"
                          type="radio" name="plan"
                          value="12 classes/month"
                          onChange={this.handlePlanChange}
                          />
                          Maintenance - 12 classes/month (2-3 classes/week) @ $15/class ($180/month)
                        <span className="circle">
                            <span className="check"></span>
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input"
                          type="radio" name="plan"
                          value="20 classes/month"
                          onChange={this.handlePlanChange}
                          />
                          Transformation - 20 classes/month (4-5 classes/week) @ $11/class ($220/month)
                        <span className="circle">
                            <span className="check"></span>
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input"
                          type="radio" name="plan"
                          value="30 classes/month"
                          onChange={this.handlePlanChange}
                          />
                          Competitor - 30 classes/month (6-7 classes/week) @ $8.67/class ($260/month)
                        <span className="circle">
                            <span className="check"></span>
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input"
                          type="radio" name="plan"
                          value="Not sure"
                          onChange={this.handlePlanChange}
                          />
                          Not sure. Please consult me during my trial class
                        <span className="circle">
                            <span className="check"></span>
                        </span>
                      </label>
                    </div>
                  <p>
                    <strong>{`Pro Tip: `}</strong>
                    Pay via bank draft and save 3% on reoccurring charges.
                    Bring a blank check or provide us with your routing and
                    account numbers when you sign up.
                  </p>
                  </div>
              </div>
            }


          {
            planValid &&
              <div className="form-group bmd-form-group">
                <h3>What are your goals?</h3>
                  <p>
                    What are your goals? Do you have any questions, or is there anything you'd like us to know?
                  </p>
                  <textarea name="message" className="form-control" id="exampleMessage1" rows="6" value={text} onChange={this.handleTextChange} disabled={inflight}></textarea>
                  <span className="material-input"></span>
              </div>
          }
          {
            planValid &&
              <div className="row bmd-form-group">
                <Recaptcha
                  formVersion={this.state.formVersion}
                  id="g-recaptcha-trial-class"
                  sitekey="6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3"
                  onRecaptchaChange={this.handleRecaptchaChange} />
              </div>
          }
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

