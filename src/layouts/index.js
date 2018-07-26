import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import GetStartedModal from '../components/GetStartedModal'
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
        { name: 'description', content: 'Crossfit Secaucus is a world-class fitness facility located in Secaucus, NJ, and also serves the areas around Lyndhurst, North Arlington, Kearny, Harrison, Rutherford, Union City, Weehawken, West New York, Hoboken and Jersey City.' },
        { name: 'keywords', content: 'sample, something' },

        { name: 'google-site-verification', content: 'N_htigC_3PxYoand2Bcb1VY_MRTDbLscdlswaMThVNQ' },
        { name: 'google-site-verification', content: 'd7EUGM_PxsNYot-o4oBXr41zfoL0rJK9tqFwQkqVhUo' },
        { name: 'google-site-verification', content: 'ze3SufHiz6eCmyOSeAEFGyiDqokNCjBF2WHR9cSCinw' },

        { name: 'googformat-detection', content: 'telephone=yes' },

      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Cover className="page-header header-filter clear-filter" data-parallax="true">
    </Cover>

    <div className="main main-raised">
      {children()}
    </div>
    <GetStartedModal />
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
