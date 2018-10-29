import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.scss'

import styled from 'styled-components';

const Cover = styled.div`
  background-image: url("/img/cover.jpg");
  // transform: translate3d(0px, 0px, 0px);
  height: 30vw;
  max-height: 200px;
`;

class Layout extends React.Component {

  componentDidMount() {
    if (process.env.NODE_ENV === `production`) {
      window.dataLayer = window.dataLayer || [];
      const gtag = () => dataLayer.push(arguments);
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'UA-50754912-1');
    }
  }

  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'keywords', content: 'crossfit, fitness, personal training, bootcamp, weight loss, slim down, tone, burn, barbell, trainer' },

            { name: 'google-site-verification', content: 'N_htigC_3PxYoand2Bcb1VY_MRTDbLscdlswaMThVNQ' },
            { name: 'google-site-verification', content: 'd7EUGM_PxsNYot-o4oBXr41zfoL0rJK9tqFwQkqVhUo' },
            { name: 'google-site-verification', content: 'ze3SufHiz6eCmyOSeAEFGyiDqokNCjBF2WHR9cSCinw' },

            { name: 'googformat-detection', content: 'telephone=yes' },

            { name: 'google', content: 'nositelinkssearchbox' },

            { property: 'og:title', content: data.site.siteMetadata.title },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://crossfit-secaucus.com' },
            { property: 'og:image', content: 'https://crossfit-secaucus.com/img/group-class.jpg' },
          ]}
        >
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Cover className="page-header header-filter clear-filter" />

        <div className="main">
          {children()}
        </div>
        <Footer/>
      </div>
      );
  }
}


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
