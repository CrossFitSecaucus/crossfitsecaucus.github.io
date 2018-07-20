import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.scss'

import styled from 'styled-components';

const Cover = styled.div`
  background-image: url("/img/cover.jpg");
  transform: translate3d(0px, 0px, 0px);
`;


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Cover className="page-header header-filter clear-filter" data-parallax="true">
    </Cover>

    <div className="main main-raised">
      {children()}
    </div>

    <Footer>
      <a href="#">
      Privacy Policy
      </a>
      <a href="#">
      Membership Agreement
      </a>
      <a href="#">
        Cancelation/Hold Request
      </a>
    </Footer>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
