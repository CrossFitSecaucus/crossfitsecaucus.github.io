import React from 'react'
import { Helmet } from "react-helmet"
import Link from 'gatsby-link'
import moment from 'moment'

const Button = ({label, to, isExternal = false, color = 'primary'}) => (
  <div className="row" style={{margin: 15, width: '100%'}}>
    <div className="col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
      {
        isExternal ? (
          <a href={to} className={`btn btn-${color} btn-lg btn-block`} style={{margin: 'auto'}}>
            {label}<div className="ripple-container"></div>
          </a>
        ) : (
          <Link to={to} className={`btn btn-${color} btn-lg btn-block`} style={{margin: 'auto'}}>
            {label}
          </Link>
        )
      }
    </div>
  </div>
);

const LinksPage = () => (
  <main className="row">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Links - CrossFit Secaucus</title>
      <meta name="description" content="Overview of recent links." />
      <link rel="canonical" href="https://crossfit-secaucus.com/links" />
      <meta property="og:title" content="Overview of recent links." />
      <meta property="og:url" content="https://crossfit-secaucus.com/links/" />
      <meta property="og:image" content="https://crossfit-secaucus.com/img/athlete-3-center.jpg" />
    </Helmet>

    {moment().isBefore('2022-05-28') && (
        <Button label="🇺🇸 Memorial Day WOD" to="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=-7&sTG=31&sVT=27&sView=day&sLoc=0&date=05/28/22" isExternal  />
    )}
    {moment().isBefore('2022-05-28') && (
        <Button label="👕 MDW T-shirt Pre-order" to="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43" isExternal color="info" />
    )}

    <Button label="5-Class Trial" to="http://try.crossfit-secaucus.com/" isExternal color="danger" />

    <p>
      <hr/>
    </p>
    <Button label="Schedule" to="/index.html#schedule" />
    <Button label="Pricing" to="/index.html#pricing" />
    <Button label="Contact Us" to="/index.html#contact" />
    <p>
      <hr/>
    </p>
    <Button label="Mobile App" to="/app" color="info"/>
  </main>
)

export default LinksPage
