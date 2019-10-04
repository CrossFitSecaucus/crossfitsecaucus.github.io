import React from 'react'
import { Helmet } from "react-helmet"
import Link from 'gatsby-link'
import Tile from '../components/Tile'

const TeensPage = () => (
  <main className="row">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Athlete Performance Development Program - CrossFit Teens</title>
      <meta name="description" content="Athlete Performance Development Program at CrossFit Secaucus." />
      <link rel="canonical" href="https://crossfit-secaucus.com/teens" />
      <meta property="og:title" content="Athlete Performance Development Program - CrossFit Teens" />
      <meta property="og:url" content="https://crossfit-secaucus.com/teens" />
      <meta property="og:image" content="https://crossfit-secaucus.com/img/teens-2.jpg" />
    </Helmet>

    <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">

      <h2>CrossFit Teens</h2>
      <h3>Athlete Performance Development Program</h3>

      <p>
      Our <strong>Athlete Performance Development Program</strong> delivers a positive training experience
      for youth ages 12 to 18 that <strong>improves speed of movement, maximizes overall strength
      and develops unsurpassed conditioning</strong>. The science-based and thoroughly tested curriculum
      has its roots in the successful CrossFit methodology and it guides young athletes to achieve
      their highest potential in sports and overall fitness.
      </p>
      <p>
      The program is ideal for young athletes seeking to <strong>improve in competitive sports</strong> such as
      wrestling, football, basketball, baseball, swimming, ice hockey, and soccer. Specifically,
      it drastically <strong>reduces the risk of sports-related injuries</strong> by teaching body awareness with a
      focus on agility, and enhancing body mechanics through strength training. Furthermore, at its
      core, the programs provides guidance for developing:
      </p>
      <ul>
        <li><strong>adaptive thinking and situational awareness</strong></li>
        <li><strong>leadership qualities</strong></li>
        <li><strong>goal-driven mindset</strong></li>
        <li><strong>health and fitness-centric lifestyle</strong></li>
        <li><strong>coachability</strong></li>

      </ul>

      <h3>Schedule</h3>
      <p>
        The program consists of 3-week units called cycles, which are composed of nine sessions.
        Athletes are encouraged to complete multiple cycles for continuous progress.
        The training sessions vary each cycle to achieve the maximum adaptation in skill
        development, strength and conditioning.
      </p>
      <p><em>Upcoming Cycles:</em></p>
      <ul>
        <li><strong>October 14th – November 1st</strong> <span className="text-muted">(Registration Deadline: October 11th)</span></li>
        <li><strong>November 4th – November 22nd</strong> <span className="text-muted">(Registration Deadline: November 1st)</span></li>
        <li><strong>December 2nd – December 20th</strong> <span className="text-muted">(Registration Deadline: November 29th)</span></li>

      </ul>
      <p>
        <em>Session Times:</em> Monday/Wednesday/Friday from 3:15pm to 4:30pm
      </p>
      <h3>Registration</h3>
      <p>
        To sign up your child, <Link to="/#contact">email us</Link> and provide:
      </p>
      <ul>
        <li>Your full name and phone number</li>
        <li>Your child’s name, age, and the sports your child is participating in</li>
        <li>Your desired start date</li>
      </ul>
      <p>
        Alternatively, you may book an appointment to complete the registration in person
        by calling us at 201-503-6326.
      </p>
      <p>
        We’ll reach out to you within 24 hours to complete the registration, and confirm
        your child’s spot in the program.
      </p>
      <h3>Price</h3>
      <p>
        Registration for a cycle must be completed by Friday before the start date.
        The full amount is due by the deadline. Credit cards and checks are accepted.
      </p>
      <p>
        <strong>$162/cycle</strong> for Secaucus Residents
        <br/>
        <strong>$189/cycle</strong> for Non-Residents
      </p>
      <h3>Location</h3>
      <p>
        CrossFit Secaucus<br/>
        333 Meadowlands Pkwy<br/>
        Secaucus NJ 07094
      </p>
      <p>
        <a href="https://www.google.com/maps/place/CrossFit+Secaucus/@40.779335,-74.082018,15z/data=!4m2!3m1!1s0x0:0x53a6798b1e6295e6" target="_blank">Directions</a>
      </p>
      <img style={{width: 300, marginBottom: 30}} src="/img/map.png" className="img-raised rounded img-fluid" />


    </div>
    <div className="col-12">
      <section>
        <div className="row no-gutters">
          <Tile url="/img/teens-1.jpg" className="d-none d-lg-block" />
          <Tile url="/img/teens-3.jpg" className="d-none d-lg-block" />
          <Tile url="/img/teens-2.jpg" columnCount={3} />
        </div>
      </section>
    </div>
  </main>
)

export default TeensPage
