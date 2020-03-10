import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const WeHirePage = () => (
  <main className="container">
    <Helmet>
      <script type="application/ld+json">
      {`
        {
          "@context": "http://schema.org",
          "@type": "JobPosting",
          "url": "https://crossfit-secaucus.com/we-hire",
          "title": "CrossFit Trainer",
          "description": "CrossFit Secaucus, a well established CrossFit gym in Secaucus NJ, is looking to hire one part time professional trainer to help us fill our team and ensure that we attain our mission of delivering to our members the best possible health and fitness experience!",
          "identifier": {
            "@type": "PropertyValue",
            "name": "CrossFit Secaucus",
            "value": "333"
          },
          "datePosted" : "2018-11-03",
          "validThrough" : "2020-11-03T00:00",
          "employmentType" : "CONTRACTOR",
          "hiringOrganization" : {
            "@type" : "Organization",
            "name" : "CrossFit Secaucus",
            "sameAs" : "https://crossfit-secaucus.com",
            "logo" : "https://crossfit-secaucus.com/img/logo.png"
          },
          "jobLocation" : {
            "@type" : "Place",
            "address" : {
              "@type" : "PostalAddress",
              "streetAddress" : "333 Meadowlands Pkwy",
              "addressLocality" : "Secaucus",
              "addressRegion" : "NJ",
              "postalCode" : "07094",
              "addressCountry": "US"
            }
          }
        }
      `}
      </script>
    </Helmet>
    <div className="row">
      <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">

        <h2>We're Hiring</h2>
        <h3>Position: Trainer</h3>

        <hr/>

        <p>
          CrossFit Secaucus, a well established CrossFit gym in Secaucus NJ, is looking to hire one
          part time professional trainer to help us fill our team and ensure that we attain our mission
          of delivering to our members the best possible health and fitness experience!
        </p>
        <p>
          Our gym fosters an environment where all members are supported; technique and safety are a
          main priority. We are less focused on competition and concentrate more on making CrossFit
          accessible to people of all fitness levels and helping our members make positive life changes.
        </p>
        <p>
          Potential candidates will have a dynamic personality, be passionate about fitness, and possess
          a genuine desire to help others succeed.
        </p>

        <hr/>

        <h4>Time Commitment:</h4>
        <ul>
          <li>Part Time (6-20 hours per week)</li>
          <li>Available weekday shifts: 5:30am and 6:30am, 4:30pm and 5:30pm, 6:30pm and 7:30pm</li>
        </ul>

        <h4>Skills/ Requirements:</h4>
        <ul>
          <li>Excellent communicator</li>
          <li>Be able to lead a class up to 15 people</li>
          <li>Strong technical knowledge of CrossFit movements</li>
          <li>Help first mentality - we are here for our members and to help them succeed</li>
          <li>Virtuous and accountable</li>
        </ul>

        <h4>Responsibilities</h4>
        <ul>
          <li>Coach 6-8 group classes a week</li>
          <li>Available to schedule and perform fundamentals personal training sessions</li>
          <li>Ensure clients are signed into each class</li>
          <li>Convert leads into members</li>
          <li>Fulfill opening/closing gym responsibilities</li>
          <li>Attend and actively participate in monthly coaches meetings</li>
          <li>Assist in organization and execution of community events</li>
          <li>Communicate class feedback and findings to head coach and owners for further business improvement</li>
          <li>Setup and cleanup at the beginning and conclusion of each class ensuring all equipment is returned to dedicated storage location</li>
          <li>Minimal cleaning required</li>
          <li>Follow all opening and closing procedures</li>
        </ul>

        <h4>Required education:</h4>
        <ul>
          <li>High school or equivalent</li>
        </ul>

        <h4>Required experience:</h4>
        <ul>
          <li>CrossFit Coaching: 6+ months</li>
          <li>CrossFit: 1+ years</li>
        </ul>

        <h4>Required license or certification:</h4>
        <ul>
          <li>CrossFit Level 1</li>
        </ul>

        <hr/>

        <p className="text-center">
          <strong>Interested in becoming part of the team?</strong>
          <br/>
          <br/>
          <Link to="/index.html#contact">Contact us via email</Link> or call us at (201) 503-6326.
        </p>

      </div>
    </div>
  </main>
)

export default WeHirePage
