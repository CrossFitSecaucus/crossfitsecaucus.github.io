import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Tile from '../components/Tile'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import Schedule from '../components/Schedule'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

const Quote = styled.div`
  padding: 0.7em;
  font-size: 1.7em;
  line-height: 1.2em;

  @media (min-width: 576px) {
    padding: 1em;
    font-size: 2em;
  }

  @media (min-width: 768px) {
    padding: 1.6em 1em;
    font-size: 2.2em;
  }

  @media (min-width: 992px) {
    padding: 1em;
    font-size: 1.8em;
  }

  @media (min-width: 1200px) {
    padding: 0.9em;
    font-size: 2.1em;
  }
`;

const Card = ({color, title, buttonLabel, onClick}) => (
  <div className={`card bg-${color}`}>
    <div className="card-body">
      <h4 className="card-title text-center">
        {title}
      </h4>
      <div className="card-stats justify-content-center">
        <a href="" onClick={onClick} className="btn btn-white btn-lg btn-round">
          {buttonLabel}
          <div className="ripple-container"></div>
        </a>
      </div>
    </div>
  </div>
)


const Heading = ({children}) => (
  <h1 className="title text-center text-uppercase">
    {children}
  </h1>
)

const IndexPage = () => (
  <main>

    <section className="section section-basic">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h1 className="title text-center">GET STARTED TODAY</h1>
          </div>
          <div className="col-md-5 ml-auto ">

            <Card
              color="info"
              title="If you have never worked out in your life, or you're looking for a workout that is new, fun, exciting and actually works."
              buttonLabel="I'M NEW TO CROSSFIT"
              onClick={(e) => {e.preventDefault()} }
              />
          </div>

          <div className="col-md-5  mr-auto">
            <Card
              color="success"
              title="You are already an experienced CrossFitter, and you're looking for a new home. Or you're in town and want to drop in."
              buttonLabel="NOT MY FIRST RODEO"
              onClick={(e) => {e.preventDefault()} }
              />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="row no-gutters">
        <Tile url="/img/athlete-left.jpg" className="d-sm-none d-lg-block"/>
        <Tile className="" style={{background: 'linear-gradient(60deg, #26c6da, #0097a7)'}}>
          <Quote>
            WE BELIEVE IN GREATNESS, PUSHING OURSELVES BEYOND EXPECTATIONS, AND THROUGH THIS BECOMING BETTER EVERYDAY.
          </Quote>
        </Tile>
        <Tile url="/img/athlete-right.jpg" />
      </div>
    </section>

    <section id="testimonials" className="section-image" style={{backgroundImage: "url('/img/testimonials-bg.jpg')"}}>
      <Testimonials />
    </section>

    <section id="how-it-works">
      <HowItWorks heading={ <Heading>How It Works</Heading> } />
    </section>

    <section>
      <div className="row no-gutters">
        <Tile url="/img/athlete-2-left.jpg" className="d-none d-lg-block" />
        <Tile url="/img/athlete-2-center.jpg" className="d-none d-lg-block" />
        <Tile url="/img/athlete-2-right.jpg" />
      </div>
    </section>

    <section id="schedule">
      <Schedule heading={ <Heading>Schedule</Heading> } />
    </section>

    <section>
      <div className="row no-gutters">
        <Tile url="/img/athlete-3-center.jpg" className="d-none d-lg-block" />
        <Tile url="/img/athletes-center.jpg" />
        <Tile url="/img/athlete-3-right.jpg" className="d-none d-lg-block" />
      </div>
    </section>

    <section id="pricing">
      <Pricing />
    </section>

    <section id="contact">
      <Contact />
    </section>

  </main>
)

export default IndexPage
