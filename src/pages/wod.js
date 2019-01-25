import React from 'react'
// import 'whatwg-fetch'
import { Helmet } from "react-helmet"

class WodPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      failedFetch: false,
    }
  }

  static defaultProps = {
    wodUrl: 'https://storage.googleapis.com/cs-site/wod.html'
  }

  componentDidMount() {
    window.fetch(this.props.wodUrl)
      .then(res => {
        const {status} = res;
        return status >= 200 && status < 400 ?
          res.text() : null;
      })
      .then(content => this.setState({content}))
      .catch(err => this.setState({failedFetch: true}))
  }

  render() {
    const {content, failedFetch} = this.state;
    const wodDescription = content != null  ?
      <div dangerouslySetInnerHTML={{ __html: content }} />
      :
      <h2>No WODs currently posted.</h2>

    return (
      <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WOD - Workout of the Day</title>
        <meta name="description" content="View a basic summary of today's workout, so you can come to class prepared." />
        <link rel="canonical" href="https://crossfit-secaucus.com/wod" />
      </Helmet>
        <section className="section section-basic">
          <div className="container">
            <div className="card bg-info">
                <div className="card-body">
                    <h5 className="card-category card-category-social">
                        <i className="material-icons">&#xe884;</i>
                        <strong>{` Get the CrossFit Secaucus app today!`}</strong>
                    </h5>
                    <h4 className="card-title text-center" style={{marginBottom: 20}}>
                      View upcoming and historic workouts conventiently on your phone,<br/>
                      and access your personal set weights for strength training sessions.
                    </h4>
                </div>
                <div className="card-footer justify-content-center">
                  <a href="https://itunes.apple.com/us/app/crossfit-secaucus/id1447284609" className="btn btn-white btn-round" style={{margin: '0 20px'}} target="_blank">
                    <i className="fa fa-apple"></i>
                    <span style={{paddingLeft: 10}}>Download for iOS</span>
                  </a>

                  <a href="https://play.google.com/store/apps/details?id=com.rokatu.burpee" className="btn btn-white btn-round" style={{margin: '0 20px'}} target="_blank">
                    <i className="material-icons">android</i>
                    <span style={{paddingLeft: 10}}>Download for android</span>
                  </a>
                </div>
            </div>

            <div className="row d-none">
              <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                {
                  failedFetch ?
                    <iframe src={this.props.wodUrl} style={{border: 0, width: '100%', height: 1000}}></iframe>
                    :
                    wodDescription
                }
                <hr/>
                <p className="text-muted text-small">
                Workouts are subject to change without prior notice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default WodPage
