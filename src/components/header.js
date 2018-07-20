import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.4em !important;
`;


const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent" data-color-on-scroll="150" id="sectionsNav">
        <div className="container">
            <div className="navbar-translate">
                <Title className="navbar-brand">
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
                            <i className="material-icons">directions_run</i> Getting Started
                        </a>
                        <div className="dropdown-menu dropdown-with-icons">
                            <a href="./index.html" className="dropdown-item">
                                <i className="material-icons">fitness_center</i> Trial Class
                            </a>
                            <a href="index.html#schedule" className="dropdown-item" data-scroll="true" data-id="#schedule">
                                <i className="material-icons">calendar_today</i> Schedule
                            </a>
                            <a href="index.html#pricing" className="dropdown-item" data-scroll="true" data-id="#pricing">
                                <i className="material-icons">monetization_on</i> Pricing
                            </a>
                            <a href="./docs/2.0/getting-started/introduction.html" className="dropdown-item">
                                <i className="material-icons">shopping_cart</i> Sign-up
                            </a>
                        </div>
                    </li>
                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <i className="material-icons">people</i> Members Zone
                        </a>
                        <div className="dropdown-menu dropdown-with-icons">
                            <a href="./sections.html#headers" className="dropdown-item">
                                <i className="material-icons">dns</i> Headers
                            </a>
                            <a href="./sections.html#features" className="dropdown-item">
                                <i className="material-icons">build</i> Features
                            </a>
                            <a href="./sections.html#blogs" className="dropdown-item">
                                <i className="material-icons">list</i> Blogs
                            </a>
                            <a href="./sections.html#teams" className="dropdown-item">
                                <i className="material-icons">people</i> Teams
                            </a>
                            <a href="./sections.html#projects" className="dropdown-item">
                                <i className="material-icons">assignment</i> Projects
                            </a>
                            <a href="./sections.html#pricing" className="dropdown-item">
                                <i className="material-icons">monetization_on</i> Pricing
                            </a>
                            <a href="./sections.html#testimonials" className="dropdown-item">
                                <i className="material-icons">chat</i> Testimonials
                            </a>
                            <a href="./sections.html#contactus" className="dropdown-item">
                                <i className="material-icons">call</i> Contacts
                            </a>
                        </div>
                    </li>
                    <li className="button-container nav-item iframe-extern">
                        <a href="#" target="_blank" className="btn  btn-warning   btn-round btn-block">
                            <i className="material-icons">fitness_center</i> Try Class
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header
