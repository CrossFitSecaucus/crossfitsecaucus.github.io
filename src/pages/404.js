import React from 'react'
import Link from "gatsby-link"

import Tile from '../components/Tile'

const NotFoundPage = () => (
  <main>
    <section className="section section-basic">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <div className="text-center">
              <h1>404 Page Not Found</h1>
              <h3>This is not the web page you're looking for!</h3>
              <Link to="/index.html#contact" className="btn btn-primary btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="row no-gutters">
        <Tile url="/img/athlete-3-center.jpg" className="d-none d-lg-block" />
        <Tile url="/img/athletes-center.jpg" />
        <Tile url="/img/athlete-3-right.jpg" className="d-none d-lg-block" />
      </div>
    </section>
  </main>
)

export default NotFoundPage
