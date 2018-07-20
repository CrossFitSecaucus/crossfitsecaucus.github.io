import React from 'react';

const PricingOption = ({label, unitPrice, unit, sessions, sessionPrice, sessionName, sessionsName, description, lastLine, color, preferred}) => (
  <div className={`card card-pricing card-plain ${preferred ? 'card-raised bg-' + color : ''}`}>
      <div className="card-body">
          <h6 className="card-category text-success text-capitalized">{label}</h6>
          <h1 className="card-title">
              <small>$</small>{sessionPrice}
              <small>/{sessionName}</small>
          </h1>
          <ul>
              <li><b>{description}</b></li>
              <li>
                  <b>${unitPrice}</b> per {unit}
              </li>
              <li>
                  <b>{sessions}</b> {sessionsName} inlcuded
              </li>
              {
                lastLine &&
                  <li>{lastLine}</li>
              }
          </ul>
          <a href="#pablo" className={`btn btn-raised btn-round ${preferred ? 'btn-white' : 'btn-' + color}`}>
              Get Started
          </a>
      </div>
  </div>
)

const Pricing = ({ children }) => (
    <div className="container">

            <h1 className="title text-center">
              Pricing
            </h1>

            <div className="row">

                        <div className="col-sm-12">
                            <ul className="nav nav-pills nav-pills-success justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active show" href="#group-classes" data-toggle="tab">Group Classes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#personal-training" data-toggle="tab">Personal Training</a>
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
                                  <div className="pricing-2">
                                      <div className="row">
                                          <div className="col-md-4">
                                              <PricingOption
                                                label="5 session pack"
                                                unitPrice={400}
                                                unit="session pack"
                                                sessions={5}
                                                sessionName="session"
                                                sessionsName="sessions"
                                                sessionPrice={80}
                                                description="For maintaining body composition"
                                                lastLine="One session is 60 minutes"
                                                color="primary"
                                                />
                                          </div>
                                          <div className="col-md-4">
                                              <PricingOption
                                                label="10 session pack"
                                                unitPrice={600}
                                                unit="session pack"
                                                sessions={10}
                                                sessionName="session"
                                                sessionsName="sessions"
                                                sessionPrice={60}
                                                description="For weight loss and muscle gain"
                                                lastLine="One session is 60 minutes"
                                                color="primary"
                                                preferred
                                                />
                                          </div>
                                          <div className="col-md-4">
                                              <PricingOption
                                                label="20 session pack"
                                                unitPrice={"1,000"}
                                                unit="session pack"
                                                sessions={20}
                                                sessionName="session"
                                                sessionsName="sessions"
                                                sessionPrice={50}
                                                description="For competitive performance athletes"
                                                lastLine="One session is 60 minutes"
                                                color="primary"
                                                />
                                          </div>
                                      </div>
                                  </div>


                                </div>
                            </div>
                        </div>
                      </div>

        </div>
)

export default Pricing

