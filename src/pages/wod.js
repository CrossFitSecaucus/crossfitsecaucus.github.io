import React from 'react'
// import 'whatwg-fetch'

class WodPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Loading ...'
    }
  }

  componentDidMount() {
    window.fetch('https://storage.googleapis.com/cs-site/wod.html')
      .then(res => {
        const {status} = res;
        return status >= 200 && status < 400 ?
          res.text() : null;
      })
      .then(content => this.setState({content}))
      .catch(err => this.setState({content: null}))
  }

  render() {
    const {content} = this.state;
    return (
      <main>
        <section className="section section-basic">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                {
                  content != null  ?
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    :
                    <h2>No WODs currently posted.</h2>
                }
                <hr/>
                <p class="text-muted text-small">
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
