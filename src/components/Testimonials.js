import React from 'react';

const Star = () => (
  <i className="material-icons text-warning">star</i>
)

const Testimonial = ({name, photoUrl, joinDate, children}) => (
  <div className="col-md-4">
    <div className="card card-testimonial">
      <div className="card-body ">
        <h5 className="card-description">
          {children}
        </h5>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className="card-footer ">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-category">Member since {joinDate}</h6>
        {
          false &&
            <div className="card-avatar">
              <a href="#pablo">
                <img className="img" src={photoUrl} />
              </a>
            </div>
          }
      </div>
    </div>
  </div>
)

const Testimonials = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 ml-auto mr-auto text-center">
        <h3 className="title text-uppercase">Testimonials</h3>
        <h5 className="description">
          {'See what our current clients have to say about their experience at CrossFit Secaucus. Read all reviews on '}
          <a href="#" target="_blank">Google</a>
          {' and '}
          <a href="#" target="_blank">Facebook</a>.
          </h5>
      </div>
    </div>
    <div className="row">
      <Testimonial
        name="Izzy R."
        photoUrl="/img/face.png"
        joinDate="March 2015"
      >
        I got bored working out at the gym by myself so I started going to Crossfit Secaucus to get motivated and now I am hooked.
        I feel great after a training session and have tons of energy since I've started.
      </Testimonial>

      <Testimonial
        name="Hardik R."
        photoUrl="/img/face.png"
        joinDate="March 2015"
      >
        Since I joined, I have made tremendous progress in my strength and endurance.
        The coaches push me to be a better athlete and reach my goals without compromising safety.
      </Testimonial>

      <Testimonial
        name="Azu C."
        photoUrl="/img/face.png"
        joinDate="November 2014"
      >
        CrossFit Secaucus is a great place to stay active and challenge myself everyday.
        The trainers are very friendly and welcoming, and no one feels left out.
      </Testimonial>

      <Testimonial
        name="Misi A."
        photoUrl="/img/face.png"
        joinDate="November 2014"
      >
        Crossfit has changed me; not only am I in the best shape I’ve ever been in, stronger and more confident, but I am mentally tougher too!
        There’s nothing I can’t do (that’s how I feel anyway)!
      </Testimonial>

     <Testimonial
        name="Katie D."
        photoUrl="/img/face.png"
        joinDate="November 2014"
      >
        I was extremely nervous about CrossFit <em>after</em> I signed up and thought, what did I get myself into?!
        It was very intimidating at first, but as soon as Rob started the fundamentals class, I felt comfortable right away!
        I am so, <em>so</em> happy I stuck with it!
      </Testimonial>

      <Testimonial
        name="Erika M."
        photoUrl="/img/face.png"
        joinDate="March 2015"
      >
        I joined CrossFit Secaucus back in March, 2015.  I was hooked from the start! Coaches Rob and Manuel have infinite patience with someone who had no such experience with CrossFit techniques.
      </Testimonial>

      <Testimonial
        name="Khrystyna T."
        photoUrl="/img/face.png"
        joinDate="January 2018"
      >
        Love it! CrossFit Secaucus is a great place to get my workout done, decompress after a stressful day and have some good chats with my fellow CrossFitters.
        Every workout is challenging me to push my limits.
      </Testimonial>

      <Testimonial
        name="Neha A."
        photoUrl="/img/face.png"
        joinDate="February 2018"
      >
        The coaches are excellent in motivating and making sure <em>all</em> members got in a great workout, no matter what the fitness
        or experience level was. I won’t be lying if I say I look forward to that one hour of session at CrossFit Secaucus everyday!
      </Testimonial>

      <Testimonial
        name="Patrick G."
        photoUrl="/img/face.png"
        joinDate="October 2015"
      >
        Rob has been my foundation coach and he knows his stuff. He has been patient and gives much needed support to ensure I execute the exercises properly.
        <br />
        I  ❤️ Crossfit Secaucus
      </Testimonial>

      <Testimonial
        name="Mamta P."
        photoUrl="/img/face.png"
        joinDate="January 2018"
      >
        Can’t say enough good things about CrossFit Secaucus. Both Coaches Rob and Manuel are excellent trainers. Even in a full class they pay attention to everyone. Joining CrossFit Secaucus has been my best decision of 2018.
      </Testimonial>
    </div>
  </div>
)

export default Testimonials

