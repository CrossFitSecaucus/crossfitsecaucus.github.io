import React from 'react';
import {Helmet} from 'react-helmet';

const AppPage = () => (
  <main className="container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>CrossFit Secaucus App</title>
      <meta name="description" content="Download the CrossFit Secaucus mobile app for your phone now." />
      <link rel="canonical" href="https://crossfit-secaucus.com/app" />
      <meta property="og:title" content="CrossFit Secaucus App" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://crossfit-secaucus.com/app" />
      <meta property="og:image" content="https://crossfit-secaucus.com/img/iphone-x-og.png" />
      <meta property="apple-itunes-app" content="app-id=1447284609" />
    </Helmet>

    <div className="features-4">
      <h2 className="title text-center">Get the CrossFit Secaucus App</h2>
      <h5 className="text-center description">
        Get daily updates for the upcoming workout, and track your strength performance.
      </h5>

      <div className="row" style={{padding: '50px 0'}}>
        <div className="col-md-5 ml-auto ">
          <a href="https://itunes.apple.com/us/app/crossfit-secaucus/id1447284609" className="btn btn-success btn-block btn-round">
            Download iOS App
          </a>
        </div>

        <div className="col-md-5  mr-auto">
          <a href="https://play.google.com/store/apps/details?id=com.rokatu.burpee" className="btn btn-info btn-block btn-round">
            Download Android App
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-12 ml-auto order-2 order-lg-1">
          <div className="info info-horizontal">
            <div className="icon icon-info">
              <i className="material-icons">&#xeb43;</i>
            </div>
            <div className="description">
              <h4 className="info-title">Strength</h4>
              <p style={{fontSize: '1.1rem', lineHeight: '1.5rem'}}>
              The app makes it incredibly easy to track your 1-rep max
              for the major lifts: front squat, overhead press, deadlift
              and bench press. It automatically calculates the weight for
              each set, and it even shows you a breakdown of the plates
              needed on the barbell.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 order-1 order-lg-2">
          <div className="phone-container">
            <img src="/img/iphone-x.png" />
          </div>
        </div>
        <div className="col-lg-3 col-md-12 mr-auto order-3 order-lg-3">
          <div className="info info-horizontal">
            <div className="icon icon-primary">
              <i className="material-icons">&#xe92c;</i>
            </div>
            <div className="description">
              <h4 className="info-title">Workout</h4>
              <p style={{fontSize: '1.1rem', lineHeight: '1.5rem'}}>
              See what the workout will be the day before, and view the past week's
              workouts conventiently on your phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AppPage;
