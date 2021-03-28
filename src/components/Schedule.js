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
                <td><strong>5:15 pm</strong></td>
                <td><strong>5:15 pm</strong></td>
                <td><strong>5:15 pm</strong></td>
                <td><strong>5:15 pm</strong></td>
                <td><strong>5:15 pm</strong></td>
              </tr>
              <tr>
                <td><strong>6:00 pm</strong></td>
                <td><strong>6:00 pm</strong></td>
                <td><strong>6:00 pm</strong></td>
                <td><strong>6:00 pm</strong></td>
                <td><strong>6:00 pm</strong></td>
              </tr>
              <tr>
                <td><strong>6:45 pm</strong></td>
                <td><strong>6:45 pm</strong></td>
                <td><strong>6:45 pm</strong></td>
                <td><strong>6:45 pm</strong></td>
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
                <td><strong>5:15 pm</strong></td>
                <td rowSpan="3">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>6:00 pm</strong></td>
              </tr>
              <tr>
                <td><strong>6:45 pm</strong></td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>
  </div>
)

export default Schedule

