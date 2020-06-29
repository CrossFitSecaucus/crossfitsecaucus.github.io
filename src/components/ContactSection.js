import React from 'react';
import Link from 'gatsby-link'

import Contact from './Contact';

class ContactSection extends React.Component {

  render() {

    return (
      <div className="contactus-1 section-image" style={{backgroundImage: "url('img/contact-bg.jpg')"}}>
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-12">
                      <h2 className="title">Get in Touch</h2>
                      <div className="info info-horizontal">
                          <div className="icon icon-primary">
                              <i className="material-icons">phone</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">
                              Give us a ring or text us at:</h4>
                              <h3 className="text-primary">(201) 503-6326</h3>
                          </div>
                      </div>
                      <div className="info info-horizontal">
                          <div className="icon icon-primary">
                              <i className="material-icons">pin_drop</i>
                          </div>
                          <div className="description">
                              <h4 className="info-title">We are located at:</h4>
                              <h3>
                                333 Meadowlands Pkwy<br/>
                                Secaucus NJ 07094<br/>
                              </h3>
                              <p>
                                <a href="https://www.google.com/maps/place/CrossFit+Secaucus/@40.779335,-74.082018,15z/data=!4m2!3m1!1s0x0:0x53a6798b1e6295e6" target="_blank">Directions</a>
                              </p>
                              <img src="/img/map.png" className="img-raised rounded img-fluid" />
                          </div>
                      </div>
                  </div>
                  <div className="col-md-7 ml-auto">
                    <Contact
                      title="Contact Us"
                      header={
                        <div>
                          <p className="text-muted">For general inquiries please complete all form fields. We will get back to you within a day.</p>
                        </div>
                      }
                    />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}


export default ContactSection;

