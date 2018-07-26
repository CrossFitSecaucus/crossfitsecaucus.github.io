import React from 'react';
import styled from 'styled-components';


const GetStartedModal = () => (
  <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-signup" role="document">
        <div className="modal-content">
            <div className="card card-signup card-plain">
                <div className="modal-header">
                    <h3 className="modal-title card-title">Getting Started</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">clear</i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-5 ml-auto">
                            <div className="info info-horizontal">
                                <div className="icon icon-rose">
                                    <i className="material-icons">accessibility_new</i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Welcome!</h4>
                                    <p className="description">
                                        Congratulations on taking the first step in becoming a better you.
                                    </p>
                                </div>
                            </div>
                            <div className="info info-horizontal">
                                <div className="icon icon-primary">
                                    <i className="material-icons">calendar_today</i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Try us out for free!</h4>
                                    <p className="description">
                                        Try a  class for free to see what we're all about.
                                        When attending one of our regularly scheduled group classes, a personal trainer by your side, who will make sure you won't get lost and who will modify the workout to your abilities.
                                        (Must be local resident of age 18 or older.)
                                    </p>
                                </div>
                            </div>
                            <div className="info info-horizontal">
                                <div className="icon icon-info">
                                    <i className="material-icons">group</i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Get started with our fundamentals course</h4>
                                    <p className="description">
                                      Before joining the group classes, you will complete 4 personal training sessions with your dedicated trainer to learn the basics of CrossFit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mr-auto">
                            <form className="form" method="" action="">
                                <div className="card-body">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">face</i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="First Name..." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">mail</i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Email..." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">lock_outline</i>
                                                </span>
                                            </div>
                                            <input type="password" placeholder="Password..." className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" value="" checked="" />
                                            <span className="form-check-sign">
                                                <span className="check"></span>
                                            </span>
                                            I agree to the
                                            <a href="#something">terms and conditions</a>.
                                        </label>
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <a href="#pablo" className="btn btn-primary btn-round">Get Started</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)

export default GetStartedModal

