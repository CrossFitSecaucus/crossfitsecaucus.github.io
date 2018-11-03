import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const Footer = ({ children }) => (
  <footer className="footer footer-black">
    <div className="container">
        <ul className="float-center">
          <li>
              <a href="https://www.facebook.com/CrossFitSecaucus" target="_blank" className="btn btn-just-icon btn-link">
                  <i className="fa fa-facebook-square"></i>
              </a>
          </li>
          <li>
            <a href="https://www.instagram.com/crossfit_secaucus" target="_blank" className="btn btn-just-icon btn-link">
                <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="//journal.crossfit.com/start.tpl?version=CFJ-white123x63">
              <img src="//journal.crossfit.com/templates/images/white-300x150.png" width="100px" alt="CrossFit Journal"/>
            </a>
          </li>
          <li>
            <Link to="/service-agreement">
              Service Agreement
            </Link>
          </li>
          <li>
            <Link to="/we-hire">
              We're Hiring
            </Link>
          </li>
        </ul>
        <div className="copyright float-center">
          © {new Date().getFullYear()} Strength &amp; Conditioning Outlet, llc
        </div>
    </div>
  </footer>
);

export default Footer

