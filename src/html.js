import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}

          <link rel="apple-touch-icon" sizes="180x180" href="/img/icon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/icon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/icon/favicon-16x16.png" />
          <link rel="manifest" href="/img/icon/site.webmanifest" />
          <link rel="mask-icon" href="/img/icon/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/img/icon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="msapplication-config" content="/img/icon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />


          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons|Montserrat" rel="stylesheet" />

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

          <script src="/js/core/jquery.min.js" type="text/javascript" />
          <script src="/js/core/popper.min.js" type="text/javascript" />
          <script src="/js/core/bootstrap-material-design.min.js" type="text/javascript" />

          <script src="/js/plugins/moment.min.js" />

          <script src="/js/plugins/bootstrap-datetimepicker.js" type="text/javascript" />

          <script src="js/plugins/nouislider.min.js" type="text/javascript" />

          <script src="/js/material-kit.js?v=2.0.3" type="text/javascript" />

          <script src='https://www.google.com/recaptcha/api.js' />
          {
            process.env.NODE_ENV === `production` &&
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-50754912-1" />
          }
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
