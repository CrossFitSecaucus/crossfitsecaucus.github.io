import React from 'react';
import Link from 'gatsby-link';

const PricingOption = ({label, url, unitPrice, unit, sessions, sessionPrice, sessionName, sessionsName, description, lastLine, buttonLabel, color, preferred}) => (
  <div className={`card card-pricing card-plain card-raised ${preferred ? 'bg-' + color : ''}`}>
      <div className="card-body">
          <h6 className="card-category text-success text-capitalized">{label}</h6>
          <h1 className="card-title">
              <small>$</small>{sessionPrice}
              <small>/{sessionName}</small>
          </h1>
          <ul>
              <li><b>{description}</b></li>
              <li>
                  <b>{sessions}</b> {sessionsName} inlcuded
              </li>
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
                Pricing
              </h1>

              <div className="row">
                <div className="col-sm-12">
                    <ul className="nav nav-pills nav-pills-success justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#personal-training" data-toggle="tab" id="personal-training-button">Personal Training</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active show" href="#group-classes" data-toggle="tab">Group Classes</a>
                        </li>
                        <li className="nav-item d-none">
                            <a className="nav-link" href="#hybrid" data-toggle="tab">Hybrid Option</a>
                        </li>
                    </ul>
                    <div className="tab-content tab-space">
                        <div className="tab-pane active show" id="group-classes">
                          <p>
                              Group class pricing options are based on the minimum classes per month. If you use up all class credits before the end of the month, you can purchases additional ones at a discounted rate.
                          </p>

                          <div className="pricing-2">
                              <div className="row">
                                  <div className="col-md-4">
                                      <PricingOption
                                        label="Maintenance"
                                        buttonLabel="Get Started"
                                        url="/get-started"
                                        unitPrice={180}
                                        unit="month"
                                        sessions={12}
                                        sessionName="class"
                                        sessionsName="classes"
                                        sessionPrice={15}
                                        description="For maintaining body composition"
                                        lastLine="Renews on first of every month"
                                        color="info"
                                        />
                                  </div>
                                  <div className="col-md-4">
                                      <PricingOption
                                        label="Transformation"
                                        buttonLabel="Get Started"
                                        url="/get-started"
                                        unitPrice={220}
                                        unit="month"
                                        sessions={20}
                                        sessionName="class"
                                        sessionsName="classes"
                                        sessionPrice={11}
                                        description="For weight loss and muscle gain"
                                        lastLine="Renews on first of every month"
                                        color="info"
                                        preferred
                                        />
                                  </div>
                                  <div className="col-md-4">
                                      <PricingOption
                                        label="Competitor"
                                        buttonLabel="Get Started"
                                        url="/get-started"
                                        unitPrice={260}
                                        unit="month"
                                        sessions={30}
                                        sessionName="class"
                                        sessionsName="classes"
                                        sessionPrice={8.67}
                                        description="For competitive performance athletes"
                                        lastLine="Renews on first of every month"
                                        color="info"
                                        />
                                  </div>
                              </div>
                          </div>
                        </div>

                        <div className="tab-pane" id="personal-training">
                          <p>
                            Personal training sessions are 1-hour long and they are designed specifically around your individual fitness goals.
                            The schedule is flexible and sessions can be booked from 5:30am to 8:30pm.
                            We will contact you for your first appointment after you purchased a personal training pack.
                          </p>
                          <div className="pricing-2">
                              <div className="row">
                                  <div className="col-md-4">
                                      <PricingOption
                                        label="5 session pack"
                                        buttonLabel="Buy 5 Session Pack"
                                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=5&prodId=10306"
                                        unitPrice={400}
                                        unit="session pack"
                                        sessions={5}
                                        sessionName="session"
                                        sessionsName="sessions"
                                        sessionPrice={80}
                                        description="Give personal training a try"
                                        lastLine="One session is 60 minutes"
                                        color="primary"
                                        />
                                  </div>
                                  <div className="col-md-4">
                                      <PricingOption
                                        label="10 session pack"
                                        buttonLabel="Buy 10 Session Pack"
                                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=5&prodId=10307"
                                        unitPrice={600}
                                        unit="session pack"
                                        sessions={10}
                                        sessionName="session"
                                        sessionsName="sessions"
                                        sessionPrice={60}
                                        description="Get about a month of PT"
                                        lastLine="One session is 60 minutes"
                                        color="primary"
                                        preferred
                                        />
                                  </div>
                                  <div className="col-md-4">
                                      <PricingOption
                                        label="20 session pack"
                                        buttonLabel="Buy 20 Session Pack"
                                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=5&prodId=10308"
                                        unitPrice={"1,000"}
                                        unit="session pack"
                                        sessions={20}
                                        sessionName="session"
                                        sessionsName="sessions"
                                        sessionPrice={50}
                                        description="Make PT your primary workout"
                                        lastLine="One session is 60 minutes"
                                        color="primary"
                                        />
                                  </div>
                              </div>
                          </div>

                        </div>
                        <div className="tab-pane" id="hybrid">
                          <p>
                            The hybrid option combines 16 monthly group classes with 2 one-hour personal training sessions.
                            As part of this bundle, we will develop a personal workout plan for you with a path to achieving your short and long term goals.
                            youour trainer will provide support and accountability to ensure you will achieve them.
                          </p>
                          <div className="pricing-2">
                              <div className="row">
                                  <div className="col-md-4 offset-md-4">
                                      <PricingOption
                                        label="Hybrid"
                                        buttonLabel="Get Started"
                                        url="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=5&prodId=10307"
                                        sessions={16}
                                        sessionName="month"
                                        sessionsName="group classes"
                                        sessionPrice={295}
                                        description="Combines group classes and personal training sessions"
                                        lastLine="2 one-hour personal training sessions included"
                                        color="success"
                                        preferred
                                        />
                                  </div>
                              </div>
                          </div>


                        </div>

                    </div>
                </div>
              </div>

          </div>
    );
  }

}

export default Pricing

