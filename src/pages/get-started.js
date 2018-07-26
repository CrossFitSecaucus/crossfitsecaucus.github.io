import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

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


const GetStartedPage = () => (
  <main>

    <section className="section section-basic">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h1 className="title text-center">GET STARTED TODAY</h1>
          </div>
          <div className="col-md-5 ml-auto ">
          </div>
        </div>
      </div>
    </section>



  </main>
)

export default GetStartedPage
