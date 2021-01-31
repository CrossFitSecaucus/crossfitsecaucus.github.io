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
      title="Get Your Membership or Punch Card"
      imageUrl="/img/group-class-2-outside.jpg"
    >
      <ul className="fa-ul" style={{marginLeft: 10}}>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>Membership (recommended)</strong>
          &mdash;
          With a membership, you receive 12 class credits, which can be used to reserve your spot in class.
          The membership automatically renews every 4 weeks or when your 12 classes are used up, whichever happens first.
          <span className="text-muted"> No annual or long term contracts. 28 day cancelation notice required.</span>
        </li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>Punch Card</strong>
          &mdash;
          A punch card includes 10 class credits and is valid for 3 months or until all classes are used up.
          It does not automatically renew.
        </li>
      </ul>
      <p>
        <Link to="/#pricing" className="text-info">
          <strong>
            View Pricing Information
          </strong>
        </Link>
      </p>
      <p>
        If you are unsure what's best for you, we'll gladly give you a recommendation
        based on your fitness goals. Call us at 201-503-6326.
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
        <div>
          <strong>"Mindbody" app</strong>
          &mdash;
          Quickly and easily manage your class sign-ups.
          <div>
          <a href="https://itunes.apple.com/us/app/crossfit-secaucus/id689501356" className="text-success">
            Download iOS App
          </a>
          <br/>
          <a href="https://play.google.com/store/apps/details?id=com.mindbodyonline.connect" className="text-info">
            Download Android App
          </a>
          </div>
        </div>
        </li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span>
        <strong>"CrossFit Secaucus" app</strong>
          &mdash;
          Get a sneak preview of the day's workout, so you know what extra equipment to pack
          (i.e. jump rope, running sneakers)
          <div>
          <a href="https://itunes.apple.com/us/app/crossfit-secaucus/id1447284609" className="text-success">
            Download iOS App
          </a>
          <br/>
          <a href="https://play.google.com/store/apps/details?id=com.rokatu.burpee" className="text-info">
            Download Android App
          </a>
          </div>

        </li>
      </ul>
    </Step>

    <Step
      number="3"
      title="Attend Your First Workout"
      imageUrl="/img/group-class.jpg"
    >
      <p>
        Book your prefered class time via the <em>Mindbody Connect</em> app
        and arrive at least 5 minutes before class start.
      </p>
      <p>
        No need to be nervous.
        Your trainer will know that it's your first day and help you get settled in.
      </p>
      <p>
        Many of our athletes have never done CrossFit before or were new to fitness,
        and are now hooked because of the attentive trainering staff and rewarding workout experience.
      </p>
      <p>
        See you in class soon!
      </p>
    </Step>
   </div>
)

export default HowItworks

