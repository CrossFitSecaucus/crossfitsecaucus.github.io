import React from 'react';
import Link from 'gatsby-link'

const Safety = ({ heading }) => (
      <div className="container">

        {heading}

        <h3>Face Covering</h3>
        <p>
          Athletes are required to wear a face covering indoors <em>at all times</em> &mdash; including during the workout.
          If you haven't worked out with a mask before, don't worry. It's not as bad as it sounds.
          Our team continually tests different performance face coverings so that we can offer insight as to what will be the most comfortable while ensuring everyone's safety.
        </p>

        <h3>Arriving to Class</h3>
        <p>
          Reserve your class spot no later then 30 minutes before it starts. You may enter the facility 5 minutes prior to class time.
          A <strong className="text-success">green light</strong> next to the entrace will indicate that we're ready to welcome you into the gym and take your temperature.
          If the light is off or <strong className="text-danger">red</strong>, please patiently wait outside or in the warm comfort of your car.
        </p>
        <p>
          Upon entering the facility, you will have the option to change into your gym sneakers and hang your jacket on a rack.
        </p>

        <h3>Your Workout</h3>
        <p>
          During class, please remain in your assigned station. All equipment you need for the day's workout will be provided to you, and it will not be shared.
          EPA-certified cleaning wipes are available at each station.
        </p>

        <h3></h3>
        <p>
          At the end of your class, please exit the facility through the back door. If you brought a jacket and street shoes, you will have them waiting for you by the exit.
        </p>
      </div>
)

export default Safety

