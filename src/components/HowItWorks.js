import React from 'react';
import Link from 'gatsby-link';


const Step = ({ number, title, imageUrl, children }) => (
  <div>
  <div className="row" style={{marginBottom: `1em`}}>
    <div className="col-1 offset-1 offset-md-0">
      <span className="btn btn-just-icon btn-info btn-round">
        <strong>{number}</strong>
      </span>
    </div>
    <div className="col-9 col-md-11 col-lg-8">
      <h3 className="title">
        { ' ' + title}
      </h3>
    </div>
  </div>
  <div className="row" style={{marginTop: `1em`}}>
    <div className="col-12 col-md-5 col-lg-9">
      {children}
    </div>
    <div className="d-none d-md-block col-md-5 col-lg-3">
      <img src={imageUrl} className="img-raised rounded img-fluid" />
    </div>
  </div>

  </div>
)

const HowItworks = ({ heading }) => (
  <div className="container how-it-works">
    {heading}
    <Step
      number="1"
      title="Purchase a Membership or Punch Card"
      imageUrl="/img/group-class-outside.jpg"
    >
      <p>
        So you have decided to start CrossFit with us.
        Select a pricing option that best suits your needs.
      </p>
      <ul className="fa-ul" style={{marginLeft: 10}}>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>Membership (recommended)</strong>
          &mdash;
          With a membership, you may attend 12 classes within a 4 week period.
          Typically, our athletes attend 3 classes per week, but you may split
          up your 12 classes any way you see fit between the 4 weeks.
          The membership automatically renews every 4 weeks, until you cancel.
          No annual or long term contracts. 30 day cancelation notice required.
        </li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>Punch Card</strong>
          &mdash;
          A punch card is valid for 3 months or until all classes are used up,
          and it does not automatically renew.
        </li>
      </ul>
      <p>
        <Link to="/#pricing" className="text-info">
          <strong>
            View more details about our pricing options.
          </strong>
        </Link>
      </p>
      <p>
        If you are unsure what's best for you, we'll gladly give you a recommendation
        based on your fitness goals. Call us at 201-503-6326 for a chat.
      </p>
    </Step>

    <Step
      number="2"
      title="Book Your Class"
      imageUrl="/img/apps.jpg"
    >
      <p>
      We seamlessly integrate with your digital lifestyle.
      For the best experience, download the following two apps from your phone's app store:
      </p>
      <ul className="fa-ul" style={{marginLeft: 10}}>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>"Mindbody Connect" app</strong>
          &mdash;
          Quickly and easily manage your class sign-ups.
        </li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>"CrossFit Secaucus" app</strong>
          &mdash;
          Get a sneak preview of the day's workout, so you know what extra equipment to pack
          (i.e. jump rope, running sneakers)
        </li>
      </ul>
    </Step>

    <Step
      number="3"
      title="Attend Your First Workout"
      imageUrl="/img/group-class-2-outside.jpg"
    >
      <p>
        It's finally here! Your first workout. Be sure to book yourself
        for the desired class time in the <em>Mindbody Connect</em> app
        and arrive at least 10 minutes before class start.
      </p>
      <p>
        Your trainer will know that it's your first day
        and help you get settled in.
      </p>
      <p>
        No need to be nervous.
        The workout will be the right amount of difficult,
        and you will feel accomplished for having
        championed the workout.
      </p>
      <p className="text-warning">
        <strong>
          Classes will be held outdoors at Kane Stadium and
          in front of the CrossFit Secaucus gym,
          while gyms are not allowed to hold classes indoors.
          See schedule below for details.
        </strong>
      </p>
    </Step>
   </div>
)

export default HowItworks

