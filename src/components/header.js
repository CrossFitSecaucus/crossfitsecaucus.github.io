import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Title = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6em !important;

  @media (min-width: 576px) {
    font-size: 2em !important;
  }

  @media (min-width: 768px) {
    font-size: 2.4em !important;
  }
`;


const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent" data-color-on-scroll="50" id="sectionsNav">
        <div className="container">
            <div className="navbar-translate">
                <Title  to="/" className="navbar-brand">
                  {siteTitle}
                </Title>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                          Getting Started
                        </a>
                        <div className="dropdown-menu dropdown-with-icons"  onClick={() => {$(".navbar-toggler").first().click()}}>
                            <Link to="/index.html#how-it-works" className="dropdown-item">
                                <i className="material-icons">&#xe896;</i> How it works
                            </Link>
                            <Link to="/index.html#schedule" className="dropdown-item">
                                <i className="material-icons">&#xe614;</i> Schedule
                            </Link>
                            <Link to="/index.html#pricing" className="dropdown-item">
                                <i className="material-icons">&#xe263;</i> Pricing
                            </Link>
                            <Link to="/trial-class" className="dropdown-item">
                                <i className="material-icons">&#xeb43;</i> Trial Class
                            </Link>
                            <Link to="/get-started" className="dropdown-item">
                                <i className="material-icons">&#xe8cc;</i> Sign-up
                            </Link>
                        </div>
                    </li>

                    <li className="dropdown nav-item">
                        <div
                          className="dropdown-toggle nav-link"
                          style={{cursor: 'pointer'}}
                          data-toggle="dropdown"
                        >
                          Members
                        </div>
                        <div className="dropdown-menu dropdown-with-icons" onClick={() => {$(".navbar-toggler").first().click()}}>
                            <Link to="/app" className="dropdown-item">
                                <i className="material-icons">&#xe884;</i> App
                            </Link>
                            <Link to="/wod" className="dropdown-item">
                                <i className="material-icons">&#xeb43;</i> WOD
                            </Link>
                            <a href="http://schedule.crossfit-secaucus.com" target="_blank" className="dropdown-item">
                                <i className="material-icons">&#xe614;</i> Book Class
                            </a>
                            <a href="http://hoodie.crossfit-secaucus.com" target="_blank" className="dropdown-item">
                                <i className="material-icons">&#xe54e;</i> Apparel
                            </a>
                        </div>
                    </li>

                    <li className="button-container nav-item iframe-extern">
                        <a href="/trial-class" className="btn  btn-warning   btn-round btn-block">
                            <i className="material-icons">&#xeb43;</i> Try A Class
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header
