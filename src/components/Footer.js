import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const Footer = ({ children }) => (
  <footer className="footer" data-background-color="black">
      <div className="container">
          <nav className="float-left">
            <ul>
            {
              children.map((child, idx) => (
                <li key={idx}>{child}</li>
              ))
            }
            </ul>
          </nav>
          <div className="copyright float-right">
              © {new Date().getFullYear()} Strength &amp; Conditioning Outlet, llc
          </div>
          <div>
            <a href="//journal.crossfit.com/start.tpl?version=CFJ-black123x63">
              <img src="//journal.crossfit.com/templates/images/black-300x150.png" width="100px" alt="CrossFit Journal"/>
            </a>
          </div>
      </div>
  </footer>
)

export default Footer

