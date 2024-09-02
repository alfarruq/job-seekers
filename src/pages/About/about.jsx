import './about.css';
import writer from '../../assets/writer.png';
import office from '../../assets/office.png';
import man from '../../assets/man.png';
import google from '../../assets/google.png';
import microsoft from '../../assets/microsoft.png';
import airbnb from '../../assets/airbnb.png';
import pinterest from '../../assets/pinterest.png';
function AboutPage() {
  return (
    <div className="App">
      <section className="about-us">
        <div className="about-text">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id tincidunt malesuada pharetra arcu turpis cursus mattis fringilla. Quam enim mi faucibus purus, nec turpis mus at odio. Morbi fringilla diam, diam elit, et risus. Sed purus, aliquet vel ut ipsum consectetur a turpis.</p>
          <hr />
          <button className="join-button">Join Now</button>
          
        </div>
        <div className="about-images">
          <img src={writer} alt="Image 1" />
          <img src={man} alt="Image 3" />
          <img src={office} alt="Image 2" />
          
        </div>
      </section>

      <section className="trusted-by">
        <h3>Trusted by:</h3>
        <div className="logos">
          <img src={google} alt="Google" />
          <img src={microsoft} alt="Microsoft" />
          <img src={airbnb} alt="Airbnb" />
          <img src={pinterest} alt="Pinterest" />
        </div>
      </section>

      <section className="our-numbers">
        <h3>Our numbers</h3>
        <div className="stats">
          <div className="stat-card">
            <h4>20,583+</h4>
            <p>Job Posted</p>
          </div>
          <div className="stat-card">
            <h4>3,896+</h4>
            <p>Successful hires</p>
          </div>
          <div className="stat-card">
            <h4>581+</h4>
            <p>Verified companies</p>
          </div>
          <div className="stat-card">
            <h4>100K+</h4>
            <p>Monthly visits</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h3>Trusted by leading brands and startups</h3>
        <div className="testimonial-card">
          <p>“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
          <span>- Davis Rosser, Director of Content Experience</span>
        </div>
        <div className="testimonial-card">
          <p>“Ngull enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</p>
          <span>- Tiana Geidt, Director of Content Experience</span>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;