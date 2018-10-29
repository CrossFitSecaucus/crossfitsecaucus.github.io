import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Helmet } from "react-helmet"

import TrialClass from '../components/TrialClass'


const GetStartedPage = () => (
  <main className="row">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Trial Class</title>
      <meta name="description" content="Try a class for free with a personal trainer at your side to guide you through the group workout." />
      <link rel="canonical" href="https://crossfit-secaucus.com/trial-class" />
      <meta property="og:title" content="CrossFit Secaucus Trial Class" />
      <meta property="og:url" content="https://crossfit-secaucus.com/trial-class" />
      <meta property="og:image" content="https://crossfit-secaucus.com/img/personal-training.jpg" />
    </Helmet>

    <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
      <TrialClass />
    </div>
  </main>
)

export default GetStartedPage
