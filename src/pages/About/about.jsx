import "./about.css";
import writer from "../About/assets/writer.png";
import office from "../About/assets/office.png";
import man from "../About/assets/man.png";
import google from "../About/assets/google.png";
import microsoft from "../About/assets/microsoft.png";
import airbnb from "../About/assets/airbnb.png";
import pinterest from "../About/assets/pinterest.png";
import DavisRosser from '../About/assets/Ellipse 1.png';
import TianaGeidt from '../About/assets/Ellipse 1 (1).png';


function AboutPage() {
  const comments = [
    {
      id: 0,
      title: "“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”",
      profile: DavisRosser,
      name: "Davis Rosser",
    },
    {
      id: 1,
      title: "“Nguli enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”",
      profile: TianaGeidt,
      name: "Tiana Geidt",
    },
    // You can add more comments as needed
  ];

  return (
    <div className="App">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id
            tincidunt malesuada pharetra arcu turpis cursus mattis fringilla.
            Quam enim mi faucibus purus, nec turpis mus at odio. Morbi fringilla
            diam, diam elit, et risus. Sed purus, aliquet vel ut ipsum
            consectetur a turpis.
          </p>
          <button className="join-button">Join Now</button>
        </div>
        <div className="about-images">
          <img src={writer} alt="Image 1" />
          <img src={office} alt="Image 2" />
          <img src={man} alt="Image 3" />
        </div>
      </div>

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
        <h3>Our numbers:</h3>

        

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
        {comments.map((comment) => (
          <div key={comment.id} className="testimonial-card">
            <p>{comment.title}</p>
            <img src={comment.profile} alt={comment.name} />
            <h4>{comment.name}</h4>
            <span>{comment.position}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutPage;
