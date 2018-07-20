import React from 'react';


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
      title="Learn the basic CrossFit movements"
      imageUrl="/img/personal-training.jpg"
    >
      <p>
        If you are new to CrossFit, you first complete our 4-session fundamentals course with your own personal trainer.
        We want you to be safe and efficient when you squat, jump, lift, run, row, push, pull and climb during a workout.
        Therefore, we put a lot of emphasis on teaching you proper form.
      </p>
      <p>
        Your trainer will get to know you, your goals, your abilities and even limitations in order to teach you exactly
        what you need to have fun, be safe and be successful when working out.
      </p>
    </Step>

    <Step
      number="2"
      title="Choose a training strategy"
      imageUrl="/img/group-class.jpg"
    >
      <p>
        Based on your goals and fitness level, your personal trainer will recommend recurring personal training sessions,
        group classes or a hybrid of both for making maximum progress.
      </p>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span><strong>Personal Training only</strong> &mdash; for when you want to fast-track your progress and target your specific problem areas.</li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span><strong>Group Classes</strong> &mdash; perfect choice for when you are self-motivated and comfortable working out in a group setting.</li>
        <li><span className="fa-li"><i className="material-icons text-success">done</i></span><strong>Hybrid Membership</strong> &mdash; mix personal training sessions and group classes for the best of both worlds.</li>
      </ul>

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
        After completing the fundamentals course, you can conveniently schedule yourself for our group classes via our website or mobile app.
      </p>
    </Step>
   </div>
)

export default HowItworks

