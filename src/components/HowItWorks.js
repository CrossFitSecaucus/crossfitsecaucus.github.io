import React from 'react';
import Link from 'gatsby-link';


const Step = ({ number, title, imageUrl, children }) => (
  <div className="row">
    <div className="col-1 offset-1 offset-md-0">
      <span className="btn btn-just-icon btn-info">
        <strong>{number}</strong>
      </span>
    </div>
    <div className="col-9 col-md-6 col-lg-8">
      <h3 className="title">
        { ' ' + title}
      </h3>
      {children}
    </div>
    <div className="d-none d-md-block col-md-5 col-lg-3">
      <img src={imageUrl} className="img-raised rounded img-fluid" />
    </div>

  </div>
)

const HowItworks = ({ heading }) => (
  <div className="container how-it-works">
    {heading}

    <Step
      number="1"
      title="Learn the basics of CrossFit"
      imageUrl="/img/personal-training.jpg"
    >
      <p>
        If you are new to CrossFit, you first complete our 4-session fundamentals course with your dedicated personal trainer.
        We want you to be safe and efficient when you squat, jump, lift, run, row, push, pull and climb during a workout.
        Therefore, we put a lot of emphasis on teaching you proper form.
      </p>
      <p>
        Your trainer will get to know you, your goals, your abilities and even limitations in order to teach you exactly
        what you need to have fun, be safe and be successful when working out.
      </p>
      <p>
        <Link to="/get-started#fundamentals" className="text-info">
          <strong>
            Ready to get started with your personalized fundamentals course?
          </strong>
        </Link>
      </p>
    </Step>

    <Step
      number="2"
      title="Choose a Package"
      imageUrl="/img/group-class.jpg"
    >
      <p>
        Based on your goals and fitness level, your trainer will recommend
        a monthly class package for making maximum progress.
      </p>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>Maintenance</strong>
          &mdash;
          For athletes new to fitness and athletes interested
          in adding CrossFit to an existing workout routine, this package is works
          well with 2-3 classes per week.
        </li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>Transformation (recommended)</strong>
          &mdash;
          Our most popular option for athletes that aspire to become physically fit,
          get rid of unwanted body fat and tone overall physique, this package is ideal
          as it allows for 4-5 classes per week.
        </li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>Competitor</strong>
          &mdash;
          This package supports athletes who made CrossFit a major part of their lifestyle.
        </li>
      </ul>

      <p>
        <Link to="/#pricing" className="text-info">
          <strong>
            View more details about our pricing options.
          </strong>
        </Link>
      </p>

    </Step>

    <Step
      number="3"
      title="Work out and make progress"
      imageUrl="/img/schedule.jpg"
    >
      <p>
        Personal training sessions can be booked throughout the day based on your availability; early mornings to late evenings.
      </p>
      <p>
        Upon completion of the fundamentals course, you can conveniently schedule yourself for our group classes via our website or mobile app.
      </p>
    </Step>
   </div>
)

export default HowItworks

