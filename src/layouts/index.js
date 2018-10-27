import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import {NewToCrossFitModal} from '../components/Modal'
import './index.scss'

import styled from 'styled-components';

const Cover = styled.div`
  background-image: url("/img/cover.jpg");
  // transform: translate3d(0px, 0px, 0px);
  height: 20vh;
`;

class Layout extends React.Component {

  componentDidMount() {
    if (process.env.NODE_ENV === `production`) {
      window.dataLayer = window.dataLayer || [];
      const gtag = () => dataLayer.push(arguments);
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
            { name: 'description', content: 'Crossfit Secaucus is a world-class fitness facility located in Secaucus, NJ, and also serves the areas around Lyndhurst, North Arlington, Kearny, Harrison, Rutherford, Union City, Weehawken, West New York, Hoboken and Jersey City.' },
            { name: 'keywords', content: 'crossfit, fitness, personal training, bootcamp, weight loss, slim down, tone, burn, barbell, trainer' },

            { name: 'google-site-verification', content: 'N_htigC_3PxYoand2Bcb1VY_MRTDbLscdlswaMThVNQ' },
            { name: 'google-site-verification', content: 'd7EUGM_PxsNYot-o4oBXr41zfoL0rJK9tqFwQkqVhUo' },
            { name: 'google-site-verification', content: 'ze3SufHiz6eCmyOSeAEFGyiDqokNCjBF2WHR9cSCinw' },

            { name: 'googformat-detection', content: 'telephone=yes' },

            { property: 'og:title', content: 'CrossFit Secaucus' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://crossfit-secaucus.com' },
            { property: 'og:url', content: 'https://crossfit-secaucus.com/img/cover.jpg' },

          ]}
        >

                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="http://example.com" />
                        <meta property="og:image" content="http://example.com/images/image.jpg" />

        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />


        <Cover className="page-header header-filter clear-filter" />

        <div className="main">
          {children()}
        </div>
        <Footer/>

        <NewToCrossFitModal />
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
