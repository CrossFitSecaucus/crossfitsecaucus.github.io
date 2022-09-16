import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Title = styled(Link)`

  margin: 5px 0;
  width: 150px;
  height: 40px;

  @media (min-width: 768px) {
    width: 250px;
    height: 80px;
  }

  background: url('/img/logo-grey.png');
  background-size: cover;
  background-position: center center;
  display: block;

  .navbar-transparent  & {
    background: url('/img/logo-white.png');
    background-size: cover;
    background-position: center center;
  }

`;

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent" data-color-on-scroll="50" id="sectionsNav">
        <div className="container">
            <div className="navbar-translate">
                <Title  to="/"></Title>
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
                            <Link to="/index.html#pricing" className="dropdown-item">
                                <i className="material-icons">&#xe263;</i> Pricing
                            </Link>
                            <Link to="/index.html#schedule" className="dropdown-item">
                                <i className="material-icons">&#xe614;</i> Schedule
                            </Link>
                            { false && (<Link to="/index.html#what-is-crossfit" className="dropdown-item">
                                <i className="material-icons">&#xe0f0;</i> What is CrossFit
                            </Link>)}
                            <Link to="/index.html#how-it-works" className="dropdown-item">
                                <i className="material-icons">&#xe896;</i> How to get started
                            </Link>
                            <Link to="/index.html#contact" className="dropdown-item">
                                <i className="material-icons">&#xe325;</i> Contact us
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
                            <Link to="/wod" className="dropdown-item d-none">
                                <i className="material-icons">&#xeb43;</i> WOD
                            </Link>
                            <a href="http://schedule.crossfit-secaucus.com" target="_blank" className="dropdown-item">
                                <i className="material-icons">&#xe614;</i> Book Class
                            </a>
                            <Link to="/apparel" className="dropdown-item">
                                <i className="material-icons">&#xe54e;</i> Apparel
                            </Link>
                            <Link to="/hold-request" className="dropdown-item">
                                <i className="material-icons">&#xe1a2;</i> Hold Request
                            </Link>
                        </div>
                    </li>

                    <li className="nav-item">
                      <a href="http://eepurl.com/hju69X" target="_blank" className="nav-link">
                        Newsletter
                      </a>
                    </li>
                </ul>

                <h4 style={{paddingLeft: 30}}><strong>Call or Text:</strong> 201-503-6326</h4>
            </div>
        </div>
    </nav>
)

export default Header
