import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.scss'

import styled from 'styled-components';

const Cover = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) ), url("/img/cover-outside.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 70px;

  @media (min-width: 768px) {
    height: 110px;
  }

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

    if (process.env.NODE_ENV === `production`) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '982376141925077');
      fbq('track', 'PageView');
    }
  }

  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'keywords', content: 'crossfit, cross fit, gym, near me, box, fitness, Secaucus, NJ, Lyndhurst, Rutherford, Union City, Weehawken, Hoboken, Jersey City, calisthenics, circuit training, barbell, olympic lifting, weightlifting, power lifting, classes, course, personal training, bootcamp, weight loss, slim down, tone, burn, trainer, beginners, intro, private, kids, children, teens, teenagers, sport, performance' },

            { name: 'google-site-verification', content: 'N_htigC_3PxYoand2Bcb1VY_MRTDbLscdlswaMThVNQ' },
            { name: 'google-site-verification', content: 'd7EUGM_PxsNYot-o4oBXr41zfoL0rJK9tqFwQkqVhUo' },
            { name: 'google-site-verification', content: 'ze3SufHiz6eCmyOSeAEFGyiDqokNCjBF2WHR9cSCinw' },

            { name: 'googformat-detection', content: 'telephone=yes' },

            { name: 'google', content: 'nositelinkssearchbox' },

            { property: 'og:title', content: data.site.siteMetadata.title },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://crossfit-secaucus.com' },
            { property: 'og:image', content: 'https://crossfit-secaucus.com/img/athlete-left-outside.jpg' },
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
