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
                <td><strong>6:30am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>6:30am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>6:30am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>6:30am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>6:30am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><strong>8:00am</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
              <tr>
                <td><strong>9am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>9am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>9am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>9am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td><strong>9am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="2">&nbsp;</td>
                <td><strong>10:00am</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
              <tr>
                <td rowSpan="4">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>5:45pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>5:45pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>5:45pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>5:45pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>5:45pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
              <tr>
                <td><strong>6:30pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>6:30pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>6:30pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>6:30pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>6:30pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
              <tr>
                <td><strong>7:15pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>7:15pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>7:15pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>7:15pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td><strong>7:15pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
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
                <td><strong>6:30am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><strong>8:00am</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
              <tr>
                <td><strong>9:00am</strong><br/><span className="badge badge-info">Kane Stadium</span></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><strong>10:00am</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
              <tr>
                <td><strong>5:45pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
                <td rowSpan="3">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>6:30pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
              <tr>
                <td><strong>7:15pm</strong><br/><span className="badge badge-warning">Inside Gym</span></td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>

    <div className="row" id="classes">
      <div className="col-10 offset-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
        <h2>Locations</h2>

        <h3 className="text-info title" style={{marginBottom: 0}}>Kane Stadium</h3>
        <p>
          Workouts are conducted on the field, which offers artificial turf (surface of synthetic fibers and rubber granulate).
          Plenty of parking spots are available. All morning classes will be held here from Monday to Friday.
        </p>
        <address>
          Address: 100 Dorigo Ln, Secaucus, NJ 07094
          (<a className="text-success" href="https://www.google.com/maps/search/?api=1&query=kane+stadium+secaucus" target="_blank">Directions</a>)
        </address>

        <hr/>

        <h3 className="text-warning title" style={{marginBottom: 0}}>Inside Gym</h3>
        <p>
          As of September 1, 2020, we are holding indoor classes at the CrossFit Secaucus facility. <br/>
          Limited class size. Spaced out training stations. <strong>Face coverings must be worn at all times.</strong>
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

