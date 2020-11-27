import React from 'react';
import Link from 'gatsby-link';

const PricingOption = ({label, url, unitPrice, discountedFromPrice, unit, sessions, sessionPrice, sessionName, sessionsName, description, lastLine, buttonLabel, color, badge, preferred}) => (
  <div className={`card card-pricing card-plain card-raised ${preferred ? 'bg-' + color : ''}`}>
      <div className="card-body">
          <h6 className="card-category text-success text-capitalized" style={{fontSize: `1rem`}}>{label}</h6>
          <h1 className="card-title">
            <small>$</small>{sessionPrice}
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

              <h2 className="text-center">CrossFit Group Classes</h2>
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
                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40&prodId=168"
                        unitPrice={180}
                        unit="renewal"
                        sessions={12}
                        sessionName="class"
                        sessionsName="classes"
                        sessionPrice={15}
                        description={null}
                        lastLine="Renews every 4 weeks or when all credits are used"
                        color="info"
                       />
                      <div className="text-center" style={{padding: `0 15px 50px`}}>
                        <p style={{fontSize: `0.9rem`, padding: 0}}>
                          Automatic payments every 4 weeks until you cancel.
                          28-day cancellation policy applies.
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
                        color="success"
                        preferred
                      />
                    </div>
                  </div>

                </div>
              </div>


              <hr style={{padding: 25}}/>

              <h2 className="text-center">At-Home Workouts</h2>
              <div className="row">
                <div className="col-sm-12">
                  <p id="group-classes" className="text-center">
                    Get a <em>CrossFit At-Home Kit</em> from us, so you can do our workouts at home.
                  </p>
                  <div className="row">
                    <div className="offset-md-3 col-md-6 offset-lg-4 col-lg-4">
                      <PricingOption
                        label="Membership"
                        buttonLabel="Purchase"
                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43&catid=100016&prodGroupId=10686"
                        unitPrice={79}
                        unit="renewal"
                        sessions="unlimited"
                        sessionName="workout"
                        sessionsName="workouts"
                        sessionPrice={3.95}
                        description="includes equipment package"
                        lastLine="Renews every 4 weeks"
                        color="warning"
                        badge="Black Friday Special"
                        discountedFromPrice={159}
                        preferred
                       />
                      <div className="text-center" style={{padding: `0 15px 50px`}}>
                        <p style={{fontSize: `0.9rem`, padding: 0}}>
                          After signing up, we will contact you to schedule your equipment pick-up.<br/>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <hr style={{padding: 25}}/>

              <h2 className="text-center">Personal Training</h2>
              <div className="row">
                <div className="col-sm-12">
                  <p id="group-classes" className="text-center">
                    Get on a customized workout plan and one-on-one sessions with your personal trainer.
                  </p>
                  <div className="row">
                    <div className="offset-md-0 col-md-6 offset-lg-2 col-lg-4">
                      <PricingOption
                        label="Personal Training"
                        buttonLabel="Purchase"
                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40&prodId=156"
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

                    <div className="col-md-6 col-lg-4">
                      <PricingOption
                        label="Personal Training"
                        buttonLabel="Purchase"
                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40&prodId=157"
                        unitPrice={180}
                        unit="week"
                        sessions="3"
                        sessionName="session"
                        sessionsName="sessions"
                        sessionPrice={60}
                        description={null}
                        lastLine="Renews every week until canceled"
                        color="success"
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

