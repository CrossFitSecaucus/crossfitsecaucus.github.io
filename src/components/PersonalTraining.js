import React from 'react';
import Link from 'gatsby-link';

const PricingOption = ({label, url, unitPrice, unit, sessions, sessionPrice, sessionName, sessionsName, description, lastLine, buttonLabel, color, preferred}) => (
  <div className={`card card-pricing card-plain card-raised ${preferred ? 'bg-' + color : ''}`}>
      <div className="card-body">
          <h6 className="card-category text-success text-capitalized" style={{fontSize: `1rem`}}>{label}</h6>
          <h1 className="card-title">
              <small>$</small>{sessionPrice}
              <small>/{sessionName}</small>
          </h1>
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
                      <b>${unitPrice}</b> per {unit}
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

class PersonalTraining extends React.Component {
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
    return (
      <div className="container">

              <h1 className="title text-center">
                  PRICING
              </h1>

              <h2 className="title text-center">Personal Training</h2>

              <p id="personal-training">
                Personal training sessions are 1-hour long and they are designed specifically around your individual fitness goals.
                The schedule is flexible and sessions can be booked from 5:30am to 8:30pm.
                We will contact you for your first appointment after you purchased a personal training pack.
              </p>

              <div className="row">
                <div className="col-md-4">
                  <PricingOption
                    label="2 weekly sessions"
                    buttonLabel="Get 2 sessions/week"
                    url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40&prodId=156"
                    unitPrice={160}
                    unit="week"
                    sessionName="session"
                    sessionPrice={80}
                    description="Customized Program"
                    lastLine="Minimum 4 week commitment"
                    color="primary"
                  />
                </div>
                <div className="col-md-4">
                  <PricingOption
                    label="3 weekly sessions"
                    buttonLabel="Get 3 sessions/week"
                    url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40&prodId=157"
                    unitPrice={180}
                    unit="week"
                    sessionName="session"
                    sessionPrice={60}
                    description="Customized Program"
                    lastLine="Minimum 4 week commitment"
                    color="primary"
                    preferred
                  />
                </div>
                <div className="col-md-4">
                  <PricingOption
                    label="5 session pack"
                    buttonLabel="Buy 5 Session Pack"
                    url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=5&prodId=10311"
                    unitPrice={450}
                    unit="session pack"
                    sessionName="session"
                    sessionPrice={90}
                    description="Give Personal Training a Try"
                    lastLine="One session is 60 minutes"
                    color="primary"
                  />
                </div>
              </div>

            </div>
    );
  }

}

export default PersonalTraining

