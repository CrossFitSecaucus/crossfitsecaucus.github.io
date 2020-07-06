import React from 'react';
import Link from 'gatsby-link';

const PricingOption = ({label, url, unitPrice, unit, sessions, sessionPrice, sessionName, sessionsName, description, lastLine, buttonLabel, color, preferred}) => (
  <div className={`card card-pricing card-plain card-raised ${preferred ? 'bg-' + color : ''}`}>
      <div className="card-body">
          <h6 className="card-category text-success text-capitalized" style={{fontSize: `1rem`}}>{label}</h6>
          <h1 className="card-title">
              <small>$</small>{sessionPrice}
              { sessionName && (
                <small>/{sessionName}</small>
              )}
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
    return (
      <div className="container">

              <h1 className="title text-center">
                  PRICING
              </h1>

              <div className="row">
                <div className="col-sm-12">
                  <p id="group-classes" className="text-center">
                    Whether you are ready to commit or if you want to keep it casual,
                    we have both options for you.
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <PricingOption
                        label="Trial"
                        buttonLabel="Purchase"
                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=24&prodId=10644"
                        unitPrice={75}
                        sessions={5}
                        sessionsName="classes"
                        sessionPrice="75"
                        description="New Clients Only"
                        lastLine="Valid for 3 months"
                        color="info"
                        preferred
                      />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <PricingOption
                        label="Membership"
                        buttonLabel="Purchase"
                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40&prodid=161"
                        unitPrice={180}
                        unit="4-weeks"
                        sessions={12}
                        sessionName="class"
                        sessionsName="classes"
                        sessionPrice={15}
                        description={null}
                        lastLine="Renews every 4 weeks"
                        color="info"
                       />
                      <div className="text-center" style={{padding: `0 15px 50px`}}>
                        <p>
                          <strong>
                            Need more classes before the 4 weeks are over?
                            Purchase extra credits at your locked-in rate of $15.
                          </strong>
                        </p>
                        <p style={{fontSize: `0.9rem`, padding: 0}}>
                          3-month commitment required.
                          Automatic payments every 4 weeks until you cancel.
                          30-day cancellation policy applies.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <PricingOption
                        label="Punch Card"
                        buttonLabel="Purchase"
                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=24&prodId=10223"
                        unitPrice={199}
                        unit="punch card"
                        sessions={10}
                        sessionName="class"
                        sessionsName="classes"
                        sessionPrice="19.90"
                        description={null}
                        lastLine="Valid for 3 months"
                        color="warning"
                      />
                    </div>
                  </div>

                </div>
              </div>
          </div>
    );
  }

}

export default Pricing

