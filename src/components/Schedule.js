import React from 'react';
import Link from 'gatsby-link'

const Schedule = ({ heading }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
        {heading}

        <div className="table-responsive d-none d-md-block">
          <table className="table table-bordered text-center">
            <thead>
              <tr className="table-active">
                <th width="16.666666667%"><strong>Monday</strong></th>
                <th width="16.666666667%"><strong>Tuesday</strong></th>
                <th width="16.666666667%"><strong>Wednesday</strong></th>
                <th width="16.666666667%"><strong>Thursday</strong></th>
                <th width="16.666666667%"><strong>Friday</strong></th>
                <th width="16.666666667%"><strong>Saturday</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>6:00 am</strong></td>
                <td><strong>6:00 am</strong></td>
                <td><strong>6:00 am</strong></td>
                <td><strong>6:00 am</strong></td>
                <td><strong>6:00 am</strong></td>
                <td rowSpan="2">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>6:45 am</strong></td>
                <td><strong>6:45 am</strong></td>
                <td><strong>6:45 am</strong></td>
                <td><strong>6:45 am</strong></td>
                <td><strong>6:45 am</strong></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><strong>8:00 am</strong></td>
              </tr>
              <tr>
                <td><strong>9:00 am</strong></td>
                <td><strong>9:00 am</strong></td>
                <td><strong>9:00 am</strong></td>
                <td><strong>9:00 am</strong></td>
                <td><strong>9:00 am</strong></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td><strong>10:00 am</strong></td>
              </tr>
              <tr>
                <td rowSpan="4">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>5:45 pm</strong></td>
                <td><strong>5:45 pm</strong></td>
                <td><strong>5:45 pm</strong></td>
                <td><strong>5:45 pm</strong></td>
                <td><strong>5:45 pm</strong></td>
              </tr>
              <tr>
                <td><strong>6:30 pm</strong></td>
                <td><strong>6:30 pm</strong></td>
                <td><strong>6:30 pm</strong></td>
                <td><strong>6:30 pm</strong></td>
                <td><strong>6:30 pm</strong></td>
              </tr>
              <tr>
                <td><strong>7:15 pm</strong></td>
                <td><strong>7:15 pm</strong></td>
                <td><strong>7:15 pm</strong></td>
                <td><strong>7:15 pm</strong></td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-responsive d-md-none">
          <table className="table table-bordered text-center">
            <thead>
              <tr className="table-active">
                <th width="50%"><strong>Monday &mdash; Friday</strong></th>
                <th width="50%"><strong>Saturday</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>6:00 am</strong></td>
                <td rowSpan="2">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>6:45 am</strong></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><strong>8:00 am</strong></td>
              </tr>
              <tr>
                <td><strong>9:00 am</strong></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><strong>10:00 am</strong></td>
              </tr>
              <tr>
                <td><strong>5:45 pm</strong></td>
                <td rowSpan="3">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>6:30 pm</strong></td>
              </tr>
              <tr>
                <td><strong>7:15 pm</strong></td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>

    <div className="row" id="classes">
      <div className="col-10 offset-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
        <h3 className="text-warning title" style={{marginBottom: 0}}>Location</h3>
        <p>
          As of September 1, 2020, we are holding indoor classes at the CrossFit Secaucus facility. <br/>
          For the safety of our athletes, we strictly follow the guidelines for sanitizing, 25% capacity and face coverings. <br/>
          Furthermore, during class each athlete has their own properly-spaced workout station with their own
          equipment and EPA-certified sanitizing wipes for their convenience.<br/>
        </p>
        <address>
          Address: 333 Meadowlands Pkwy, Secaucus, NJ 07094
          (<a className="text-success" href="https://www.google.com/maps/search/?api=1&query=crossfit+secaucus" target="_blank">Directions</a>)
        </address>

      </div>
    </div>
  </div>
)

export default Schedule

