import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Testimonials from '../components/Testimonials'

import Tile from '../components/Tile'


const GetStartedPage = () => (
  <main>

    <section className="section section-basic" id="select-experience-level">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h4 className="title text-center">CrossFit Secaucus Onboarding</h4>
            <h1 className="title text-center">Let's Get Started</h1>
          </div>
          <div className="col-md-5 ml-auto ">
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 ml-auto ">
            <Link to="/get-started#experienced" className="btn btn-info btn-block btn-round">
              I have experience
            </Link>
          </div>

          <div className="col-md-5  mr-auto">
            <Link to="/get-started#new-to-crossfit" className="btn btn-success btn-block btn-round">
              I'm New
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="row no-gutters">
        <Tile url="/img/athlete-4-left.jpg" className="d-none d-sm-none d-lg-block" columnCount={2}/>
        <Tile url="/img/athlete-4-right.jpg" columnCount={2} />
      </div>
    </section>

    <section className="section section-basic" id="experienced">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h2 className="title text-center">I have done CrossFit for 3 months or more</h2>
          </div>
          <div className="col-md-10 ml-auto mr-auto">
            <p>
              Whether you are ready to join us today or would like to try us out first, we've got you covered. Select the option that suits you best.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card card-profile">
              <div className="card-body ">
                  <h4 className="card-title">Sign-up Now</h4>
                  <p className="card-description">
                    Ready to get back to working out?
                  </p>
                  <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=40" target="_blank" className="btn btn-info btn-round">
                    Sign-up
                  </a>
                  <hr/>
                  <p>
                    For more information about your options, head over to our pricing section to find what best fits your training needs.
                  </p>
                  <Link to="/index.html#pricing" className="btn btn-info btn-round">
                    View Options
                  </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-profile">
              <div className="card-body ">
                  <h4 className="card-title">Dropping In?</h4>
                  <p className="card-description">
                    You can purchase one or more class passes online and directly book yourself for any group class on the schedule.
                  </p>
                  <p className="card-description">
                    <strong>CrossFit experience is required!</strong>
                  </p>
                  <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=29&prodId=10278" target="_blank" className="btn btn-info btn-round">
                    Purchase
                  </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-profile">
              <div className="card-body ">
                  <h4 className="card-title">Try A Free Class</h4>
                  <p className="card-description">
                    Not ready to commit just yet? Join us for any of our CrossFit or bootcamp classes.
                  </p>
                  <p className="card-description">
                    <strong>
                      Must provide ID with local address.
                      <br/>
                      CrossFit experience is required!
                    </strong>
                  </p>
                  <Link to="/index.html#pricing" className="btn btn-info btn-round">
                    Schedule
                  </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



    <section>
      <div className="row no-gutters">
        <Tile url="/img/athlete-5-left.jpg" columnCount={2}/>
        <Tile url="/img/athlete-5-right.jpg" className="d-none d-sm-none d-lg-block" columnCount={2} />
      </div>
    </section>


    <section className="section section-basic" id="new-to-crossfit">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h2 className="title text-center">I am new to this style of training</h2>
          </div>
          <div className="col-md-10 ml-auto mr-auto">
            <p>
              Whether you are ready to join us today or would like to try us out first, we've got you covered. Select the option that suits you best.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-1">
            <div className="card card-profile">
              <div className="card-body ">
                  <h4 className="card-title">Fundamentals</h4>
                  <p className="card-description">
                    Prior to starting classes, one of our trainers will lead you through a private four-session personal training course to teach you the basics.
                  </p>
                  <p className="card-description">
                    <strong>
                      No prior fitness experience is required.
                    </strong>
                  </p>
                  <Link to="/get-started#fundamentals" className="btn btn-success btn-round">
                    Learn More
                  </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card card-profile">
              <div className="card-body ">
                  <h4 className="card-title">Try A Free Class</h4>
                  <p className="card-description">
                    Not ready to commit just yet?
                    Join us for any of our CrossFit or bootcamp group classes with a personal trainer at your side at all times.
                  </p>
                  <p className="card-description">
                    <strong>
                      No prior fitness experience is required.
                    </strong>
                  </p>
                  <Link to="/index.html#pricing" className="btn btn-success btn-round">
                    Schedule
                  </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <hr/>
      </div>
    </section>

    <section className="section section-basic" id="fundamentals">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h2 className="title text-center">Get primed and ready for class</h2>
          </div>
          <div className="col-md-10 ml-auto mr-auto">
            <p>
              Our fundamentals course consists of four one-hour personal training sessions scheduled at your convenience with one of our expert trainers.
              Each session involves skill development and a workout. You and your trainer will review movements, discuss our style of training, tackle specific questions, and set you up for success!
            </p>
            <p>
              <strong>The fundamentals course is required for all new athletes that do not have prior CrossFit experience</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card bg-success">
              <div className="card-body">
                  <h3>
                      <i className="fa fa-star-o fa-in-heading"></i>
                      {' Who can '}
                      <strong>Benefit</strong>
                  </h3>
                  <p className="card-description">
                    <strong>
                    Anyone can benefit from our fundamentals course!
                    Sometimes it’s good to revisit the basics even if you have experience.
                    It is also required for new athletes who do not have at least 3 months of prior CrossFit experience.
                    </strong>
                  </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card bg-info">
              <div className="card-body">
                  <h3>
                      <i className="fa fa-dollar fa-in-heading"></i>
                      {' What is the '}
                      <strong>Cost</strong>
                  </h3>
                  <p className="card-description">
                    <strong>
                    The fundamentals course is $300 for the four sessions.
                    You may choose to add on additional sessions for $75/session.
                    </strong>
                  </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card bg-primary">
              <div className="card-body">
                  <h3>
                      <i className="fa fa-calendar fa-in-heading"></i>
                      {' How to '}
                      <strong>Schedule</strong>
                  </h3>
                  <p className="card-description">
                    <strong>
                    Once you have purchased the fundamentals course, we will email you to coordinate a time.
                    </strong>
                  </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h3 className="title text-center">Sounds like a good fit for you?</h3>
          </div>
          <div className="col-md-10 ml-auto mr-auto text-center">

            <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=41&sTG=5&prodId=10304" target="_blank" className="btn btn-primary btn-lg btn-block btn-round">
              Purchase Fundamentals Course
            </a>
            <p className="text-muted">
              After purchasing, we will email you to schedule your sessions.
            </p>

          </div>
        </div>

      </div>
    </section>

    <section id="testimonials" className="section-image" style={{backgroundImage: "url('/img/testimonials-bg.jpg')"}}>
      <Testimonials/>
    </section>

  </main>
)

export default GetStartedPage
