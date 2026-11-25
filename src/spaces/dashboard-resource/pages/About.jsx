
import React from "react";
import "../styles/About.css";


function AnimatedNumber({ end, duration = 6000 }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;

    const interval = setInterval(() => {
      setCount((previous) => {
        const next = previous + Math.ceil(end / (duration / 30));

        if (next >= end) {
          clearInterval(interval);
          return end;
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <>{count.toLocaleString("en-US")}</>;
}
function About() {
  return (
    <>

      {/* NAVBAR */}
     


      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">

          <div className="hero-text">
            <h1>About</h1>
            <p>
              Believing Banking and Achieving
              <br />
              Different
            </p>
          </div>

          <div className="hero-images">

            <video
              className="hero-animation"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                src="/images/about-illustration1.mp4"
                type="video/mp4"
              />
              Your browser does not support video.
            </video>

          </div>

        </div>
      </section>


      {/* ABOUT US SECTION */}
      <section className="about-intro">

        <div className="intro-content">
          <h2>About Us</h2>

          <p>
            Global ambitions need financial solutions without borders.
            Amanah makes cross-border banking simple, secure and seamless
            – your trusted digital partner for managing money and turning
            financial possibilities into opportunities.
          </p>

<div className="stats-grid">

  <div className="stat-card">
    <h2><AnimatedNumber end={15000} /></h2>
    <p>We employ 15,000 people around the world</p>
  </div>

  <div className="stat-card">
    <h2><AnimatedNumber end={125} /></h2>
    <p>Our colleagues come from 125 different countries</p>
  </div>

  <div className="stat-card">
    <h2><AnimatedNumber end={75} /></h2>
    <p>More than 75 years in business</p>
  </div>

  <div className="stat-card">
    <h2><AnimatedNumber end={450} /></h2>
    <p>450 branches worldwide</p>
  </div>

</div>
        </div>

        <div className="intro-images">

          <img
            className="intro-img img-one"
            src="./images/person1.png"
            alt="Amanah Customer"
          />

          <img
            className="intro-img img-two"
            src="./images/person2.png"
            alt="Amanah Customer"
          />

          <img
            className="intro-img img-three"
            src="./images/person3.png"
            alt="Amanah Customer"
          />

        </div>

      </section>


      {/* CORE VALUES */}
      <section className="core-values">

        <div className="section-heading">
          <span>Our core values</span>

          <h2>Our Values define better banking</h2>

          <p>
            Our values shape how we build, grow, and serve our customers.
          </p>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon">♙</div>

            <h3>Customer First</h3>

            <p>
              We strive to deliver trusted financial solutions and
              personalized service that help our customers grow,
              overcome challenges, and achieve lasting success.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">♡</div>

            <h3>Passion over Pedigree</h3>

            <p>
              We seek passionate and driven individuals who embrace
              challenges, continuously learn, and bring fresh ideas
              to everything they do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">♧</div>

            <h3>Commitment</h3>

            <p>
              Your money deserves the highest level of protection.
              We're committed to keeping your finances secure while
              providing smarter ways to grow your wealth.
            </p>
          </div>

        </div>
      </section>


      {/* BRANCH NETWORK */}
      <section className="branches-section">

        <div className="section-heading">
          <h2>Explore our branches and banking network</h2>

          <p>
            Explore our branch locations and find essential details,
            including branch names, routing numbers, addresses, and
            contact information—all in one place.
          </p>
        </div>

        <div className="branch-map">

          <img
            src="/images/world-map.png"
            alt="World Map"
          />

          <div className="branch-marker marker-one">
            <span>📍</span>
            <div className="branch-info">
              Amanah main branch,
              <br />
              Motijheel, Dhaka.
              <br />
              Routing No:123456789
              <br />
              Mobile:01700000000
            </div>
          </div>

          <div className="branch-marker marker-two">
            <span>📍</span>
            <div className="branch-info">
              Amanah main branch,
              <br />
              Motijheel, Dhaka.
              <br />
              Routing No:123456789
              <br />
              Mobile:01700000000
            </div>
          </div>

          <div className="branch-marker marker-three">
            <span>📍</span>
            <div className="branch-info">
              Amanah main branch,
              <br />
              Motijheel, Dhaka.
              <br />
              Routing No:123456789
              <br />
              Mobile:01700000000
            </div>
          </div>

          <div className="branch-marker marker-four">
            <span>📍</span>
            <div className="branch-info">
              Amanah main branch,
              <br />
              Motijheel, Dhaka.
              <br />
              Routing No:123456789
              <br />
              Mobile:01700000000
            </div>
          </div>

          <div className="branch-marker marker-five">
            <span>📍</span>
            <div className="branch-info">
              Amanah main branch,
              <br />
              Motijheel, Dhaka.
              <br />
              Routing No:123456789
              <br />
              Mobile:01700000000
            </div>
          </div>

        </div>
      </section>


      {/* OUR TEAM */}
      <section className="team-section">

        <div className="section-heading">

          <span>The Amazing team behind our company</span>

          <h2>
            The right expertise, the right people, and the right
            solutions to move your financial future forward.
          </h2>

          <p className="team-description">
            Our diverse perspectives and youthful energy drive our
            strength, inspire innovation, and shape the way we serve
            our customers.
          </p>

        </div>

        <div className="team-tabs">
          <button>Board</button>
          <button>Leader</button>
          <button className="active">Designer</button>
          <button>Developer</button>
          <button>HR</button>
        </div>

        <div className="team-grid">

          <div className="team-card">
            <img src="/images/team1.jpg" alt="Team Member" />
            <h3>Mr John</h3>
            <p>CEO and Founder</p>
          </div>

          <div className="team-card">
            <img src="/images/team2.jpg" alt="Team Member" />
            <h3>Mr David</h3>
            <p>CEO and Founder</p>
          </div>

          <div className="team-card">
            <img src="/images/team3.jpg" alt="Team Member" />
            <h3>Ms Sarah</h3>
            <p>CEO and Founder</p>
          </div>

          <div className="team-card">
            <img src="/images/team4.jpg" alt="Team Member" />
            <h3>Ms Ayesha</h3>
            <p>CEO and Founder</p>
          </div>

        </div>
      </section>


      {/* CAREER SECTION */}
      <section className="career-section">

        <div className="section-heading">
          <span>Current Positions</span>
          <h2>Unlock your career at Amanah</h2>
        </div>

        <div className="jobs-grid">

          <div className="job-card">
            <h3>Office Manager</h3>
            <button>Apply Now</button>
          </div>

          <div className="job-card">
            <h3>Senior Backend Developer</h3>
            <button>Apply Now</button>
          </div>

          <div className="job-card">
            <h3>Management Trainee Officer</h3>
            <button>Apply Now</button>
          </div>

          <div className="job-card">
            <h3>HR/Human Resource</h3>
            <button>Apply Now</button>
          </div>

        </div>
      </section>


      {/* CONTACT SECTION */}
      <section className="contact-cta">

        <h2>Can't find the perfect position?</h2>

        <p>
          Send us an email anyways! We will save your resume for next time
          a relevant position opens. We're always looking for talent.
        </p>

        <button>Contact Us</button>

      </section>


      {/* FOOTER */}

    </>
  );
}

export default About;
