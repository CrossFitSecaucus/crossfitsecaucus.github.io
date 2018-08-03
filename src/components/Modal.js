import React from 'react';
import styled from 'styled-components';


const Modal = ({id, title, children}) => (
  <div className="modal fade" id={id} tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-signup" role="document">
        <div className="modal-content">
            <div className="card card-signup card-plain">
                <div className="modal-header">
                    <h3 className="modal-title card-title">{title}</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">clear</i>
                    </button>
                </div>
                <div className="modal-body">
                  {children}
                </div>
            </div>
        </div>
    </div>
    </div>
)

const NewToCrossFitModal = () => (
  <Modal id="new-to-crossfit-modal" title="New to CrossFit">
    <div className="row">
        <div className="col-md-5 ml-auto">
          <h4 className="info-title">Fundamentals Course</h4>
          <p>
              Congratulations on taking the first step in becoming a better you.
              Prior to starting CrossFit group classes, one of our coaches will lead you through a private four-session course to teach you the basics.
          <br/>
              <strong>No prior fitness experience is required.</strong>
          </p>
          <div className="modal-footer justify-content-center">
              <a href="#pablo" className="btn btn-success btn-round">Learn More</a>
          </div>
        </div>
        <div className="col-md-5 mr-auto">
          <h4 className="info-title">Free Trial</h4>
          <p>
            Not ready to commit just yet? Join us for any of our CrossFit or bootcamp classes.
          <br/>
              <strong>No prior CrossFit experience is required.</strong>
          </p>
          <div className="modal-footer justify-content-center">
              <a href="#pablo" className="btn btn-primary btn-round">Learn More</a>
          </div>
        </div>

    </div>
  </Modal>
)

export default {NewToCrossFitModal}

