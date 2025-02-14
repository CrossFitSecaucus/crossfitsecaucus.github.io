import React from 'react';
import Link from 'gatsby-link';

import Recaptcha from './Recaptcha';

class Membership extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      recaptcha: null,
      recaptchaComplete: false,
      inflight: false,
      done: false,
    };
  }

  render() {
    const {firstName, lastName, email, phone, inflight, done, recaptcha, recaptchaComplete}  = this.state;
    const formValid = recaptchaComplete && firstName.length > 1 && lastName.length > 1 && /^[^@]+@[^@]+$/.test(email) && phone.length >= 12;

    return (
      <div className="rotating-card-container manual-flip" style={{height: 550}}>
        <div className="card card-rotate card-pricing">
            <div className="front" style={{height: 550}}>
                <div className="card-body" style={{justifyContent: 'space-between'}}>
                  <h6 className="card-category text-success text-capitalized" style={{fontSize: `1rem`}}>Membership</h6>
                  <div>
                    <h4 className="card-title" style={{padding: `0 15px`}}>
                      The membership is the most popular and cost-effective choice,
                      to get access to the CrossFit group classes.<br/><br/>
                      It offers enough flexibility to support even the most unpredictable schedule.
                    </h4>
                    <p className="card-description">
                      Send us a request for more information, and we'll immediately email you pricing options for the membership.
                    </p>
                  </div>
                  <div className="stats text-center">
                    <button type="button" name="button" className="btn btn-primary btn-fill btn-round btn-rotate">
                      Request Pricing
                    <div className="ripple-container"></div></button>
                  <ul>
                    <li>Get membership pricing instantly!</li>
                  </ul>
                  </div>
                </div>
            </div>
            <div className="back" style={{height: 550}}>
              { done ? (
                <div className="card-body">
                  <h4 className="card-title">
                      Request Sent!
                  </h4>
                  <p className="card-description">
                    Check your inbox (and spam folder) now.
                  </p>

                </div>
              ) : (
                <div className="card-body">
                    <h4 className="card-title">
                        Request Pricing Information
                    </h4>

                    <form id="price-request-form" method="post">
                      <div className="row">
                        <div className="col-md-6">
                          <div className={`label-floating is-filled bmd-form-group`}>
                            <label className="bmd-label-floating" style={{left: 0}}>First name</label>
                            <input type="text" name="name" className="form-control" value={firstName} onChange={e => this.setState({firstName: e.target.value})} disabled={inflight} />
                            <span className="material-input"></span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={`label-floating is-filled bmd-form-group`}>
                            <label className="bmd-label-floating" style={{left: 0}}>Last name</label>
                            <input type="text" name="name" className="form-control" value={lastName} onChange={e => this.setState({lastName: e.target.value})} disabled={inflight} />
                            <span className="material-input"></span>
                          </div>
                        </div>
                      </div>
                      <div className={`label-floating is-filled bmd-form-group`}>
                        <label className="bmd-label-floating" style={{left: 0}}>Email address</label>
                        <input type="text" name="email" className="form-control" value={email} onChange={e => this.setState({email: e.target.value})} disabled={inflight} />
                        <span className="material-input"></span>
                      </div>
                      <div className={`label-floating is-filled bmd-form-group`}>
                        <label className="bmd-label-floating" style={{left: 0}}>Phone number</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          value={phone}
                          onChange={e => {
                            let p = e.target.value.replace(/\D+/g, '');
                            let phoneNumber = null;
                            if (p.length > 0) {
                              const matches = /(\d{3})?(\d{3})?(\d+)?/.exec(p);
                              phoneNumber = matches[0].length === 12 ? p : null;
                              p = matches.slice(1).filter(v => typeof v !== 'undefined').join(' ');
                            }
                            this.setState({phone: p});
                          }}
                          disabled={inflight}
                        />
                        <span className="material-input"></span>
                      </div>
                      <div className="row bmd-form-group">
                        <Recaptcha
                          formVersion={0}
                          id="g-recaptcha-price-request"
                          sitekey="6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3"
                          onRecaptchaChange={r => {
                            this.setState({
                              recaptcha: r,
                              recaptchaComplete: r !== null
                            });
                          }} />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-round"
                        disabled={!formValid || inflight}
                        onClick={e => {
                          e.preventDefault();
                          this.setState({ inflight: true });
                          $.ajax({
                            type: "POST",
                            url: 'https://us-central1-cs-site-209414.cloudfunctions.net/priceRequest',
                            data: JSON.stringify({firstName, lastName, email, phone, recaptcha}),
                            success: response => {
                              this.setState({done: true});
                            },
                            dataType: 'json',
                            contentType: 'application/json',
                          }).fail(({responseJSON}) => {
                            alert(responseJSON.message);
                          })
                          .always(() => this.setState({ inflight: false }));
                        }}
                      >
                        {inflight ? 'Sending ...' : 'Send Request'}
                      </button>
                    </form>

                    <button type="button" name="button" className="btn btn-link btn-round btn-rotate">
                        <i className="material-icons">refresh</i> Back
                    <div className="ripple-container"></div></button>
                </div>
              )}

            </div>
        </div>
      </div>
    );
  }
}

const PricingOption = ({label, url, unitPrice, discountedFromPrice, unit, sessions, sessionPrice, sessionName, sessionsName, description, lastLine, buttonLabel, color, badge, preferred}) => (
  <div className={`card card-pricing ${preferred ? 'bg-' + color : ''}`}>
      <div className="card-body">
          <h6 className="card-category text-success text-capitalized" style={{fontSize: `1rem`}}>{label}</h6>
          <h1 className="card-title">
            <small></small>{sessionPrice}
            { sessionName && (
              <small>/{sessionName}</small>
            )}
          </h1>
          { badge && <span className="badge badge-secondary" style={{fontSize: 20, backgroundColor: '#000'}}>{badge}</span> }
          <ul>
              <li><b>{description}</b></li>
              {sessions && (
                <li>
                    <b>{sessions}</b> {sessionsName} included
                </li>
              )}
              {
                unit && unitPrice &&
                  <li>
                    {discountedFromPrice && <span style={{textDecoration: 'line-through'}}>${discountedFromPrice}</span> }
                    {' '}
                    <b>{unitPrice}</b> per {unit}
                  </li>
              }
              {
                lastLine &&
                  <li>{lastLine}</li>
              }
          </ul>
          {
            url && /^(https?:)?\/\//.test(url) &&
              <a href={url} target="_blank" className={`btn btn-raised btn-round ${preferred ? 'btn-white' : 'btn-' + color}`}>
                {buttonLabel}
              </a>
          }
          {
            url && !/^(https?:)?\/\//.test(url) &&
              <Link to={url} className={`btn btn-raised btn-round ${preferred ? 'btn-white' : 'btn-' + color}`}>
                {buttonLabel}
              </Link>
          }
      </div>
  </div>
)

class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.location.hash === '#personal-training') {
      document.getElementById('personal-training-button').click();
      window.location.hash = "#pricing"
      window.location.hash = "#personal-training"
    }
  }


  render() {
    const compactMode = true;

    return (
      <div className="container">

        <h1 className="title text-center">
          PRICING
        </h1>

        <div className="row">
          <div className="col-sm-12">
            <p id="group-classes" className="text-center">
              Our membership includes one-on-one onboarding for all new athletes
              at no extra cost.
            </p>
            <div className="row">
              <div className="col-md-6 offset-lg-2 col-lg-4">
                <PricingOption
                  label="Trial"
                  buttonLabel="Purchase"
                  url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=24&prodId=10702"
                  unitPrice={59}
                  sessions={3}
                  sessionsName="classes"
                  sessionPrice="59"
                  description="New Clients Only"
                  lastLine="Valid for 1 month"
                  color="info"
                  preferred
                />
              </div>
              <div className="col-md-6 col-lg-4">
                <Membership />
              </div>

              {!compactMode && (
                <div className="col-md-6 col-lg-4">
                  <PricingOption
                    label="Personal Training"
                    buttonLabel="Explore Options"
                    url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40"
                    unitPrice={160}
                    unit="week"
                    sessions="2"
                    sessionName="session"
                    sessionsName="sessions"
                    sessionPrice={80}
                    description={null}
                    lastLine="Renews every week until canceled"
                    color="success"
                   />
                </div>
              )}

            </div>

          </div>
        </div>



      </div>
    );
  }

}

export default Pricing

