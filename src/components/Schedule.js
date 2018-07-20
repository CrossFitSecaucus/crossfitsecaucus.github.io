import React from 'react';

const Schedule = ({ heading }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
        {heading}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr className="table-active">
                <th><strong>Monday</strong></th>
                <th><strong>Tuesday</strong></th>
                <th><strong>Wednesday</strong></th>
                <th><strong>Thursday</strong></th>
                <th><strong>Friday</strong></th>
                <th><strong>Saturday</strong></th>
                <th><strong>Sunday</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>5:30am</strong><br/><span className="text-primary"><strong>Barbell</strong></span></td>
                <td><strong>5:30am</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>5:30am</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>5:30am</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>5:30am</strong><br/><span className="text-primary"><strong>Barbell</strong></span></td>
                <td rowSpan="2">&nbsp;</td>
                <td rowSpan="4">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>6:30am</strong><br/><span className="text-info"><strong style={{whiteSpace: 'nowrap'}}>CrossFit 30</strong></span></td>
                <td><strong>6:30am</strong><br/><span className="text-rose"><strong>tone+burn</strong></span></td>
                <td><strong>6:30am</strong><br/><span className="text-info"><strong style={{whiteSpace: 'nowrap'}}>CrossFit 30</strong></span></td>
                <td><strong>6:30am</strong><br/><span className="text-rose"><strong>tone+burn</strong></span></td>
                <td><strong>6:30am</strong><br/><span className="text-info"><strong style={{whiteSpace: 'nowrap'}}>CrossFit 30</strong></span></td>
              </tr>
              <tr>
                <td rowSpan="3">&nbsp;</td>
                <td rowSpan="3">&nbsp;</td>
                <td rowSpan="3">&nbsp;</td>
                <td rowSpan="3">&nbsp;</td>
                <td rowSpan="3">&nbsp;</td>
                <td><strong>8:00am</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
              </tr>
              <tr>
                <td><strong>9:00am</strong><br/><span className="text-rose"><strong>tone+burn</strong></span></td>
              </tr>
              <tr>
                <td><strong>10:00am</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td rowSpan="2" className="align-top"><strong>10:00am</strong><br/><span className="text-success"><strong>Open Gym</strong></span></td>
              </tr>
              <tr>
                <td><strong>4:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>4:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>4:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>4:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>4:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td rowSpan="4">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>5:30pm</strong><br/><span className="text-primary"><strong>Barbell</strong></span></td>
                <td><strong>5:30pm</strong><br/><span className="text-rose"><strong>tone+burn</strong></span></td>
                <td><strong>5:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>5:30pm</strong><br/><span className="text-rose"><strong>tone+burn</strong></span></td>
                <td><strong>5:30pm</strong><br/><span className="text-primary"><strong>Barbell</strong></span></td>
                <td rowSpan="3">&nbsp;</td>
              </tr>
              <tr>
                <td><strong>6:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>6:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>6:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>6:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>6:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
              </tr>
              <tr>
                <td><strong>7:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>7:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>7:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td><strong>7:30pm</strong><br/><span className="text-info"><strong>CrossFit</strong></span></td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>

        </div>

        <p>
          <strong className="text-info">CrossFit</strong> &mdash;
          Functional movements at high intensity combining gymnastics, plyometrics, calisthenics, weightlifting, running, rowing and more.
          Great for <em>new</em> and <em>seasoned athletes</em>.
          All movements are scaled to <em>every</em> athlete's skill, endurance and ability level.
          (Requires completion fundamentals course or previous CrossFit experience.)
        </p>

        <p>
          <strong className="text-info">CrossFit 30</strong> &mdash;
          Our 30 minute CrossFit class ensures that you get the most out of your workout before you start your busy day.
        </p>

        <p>
          <strong className="text-warning">Barbell</strong> &mdash;
          Specialized class that focuses on the Olympic lifts (<em>snatch</em> and <em>clean &amp; jerk</em>) and accessory movements.
          Focuses on the very basics for novice lifters to the smallest details for advanced lifters to ensure continuous progress.
        </p>

        <p>
          <strong className="text-rose">tone+burn bootcamp</strong> &mdash;
          The ladies-only bootcamp class consists of workouts specifically designed for toning overall physique and burning calories.
          These fun high-energy classes are great for anyone as the workouts can be scaled up and down to maximize the benefit for each athlete.
        </p>

        <p>
          <strong className="text-success">Open Gym</strong> &mdash;
          Missed a workout this week? Wanna practice a movement? That's what open gym is for.
        </p>


      </div>
    </div>
  </div>
)

export default Schedule

