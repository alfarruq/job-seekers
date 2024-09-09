import "./about.css";
import writer from "../About/assets/writer.png";
import office from "../About/assets/office.png";
import man from "../About/assets/man.png";
import google from "../About/assets/google.png";
import microsoft from "../About/assets/microsoft.png";
import airbnb from "../About/assets/airbnb.png";
import pinterest from "../About/assets/pinterest.png";
import DavisRosser from "../About/assets/Ellipse 1.png";
import TianaGeidt from "../About/assets/Ellipse 1 (1).png";


function AboutPage() {
  const comments = [
    {
      id: 0,
      title:
        "“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”",
      profile: DavisRosser,
      name: "Davis Rosser",
    },
    {
      id: 1,
      title:
        "“Nguli enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”",
      profile: TianaGeidt,
      name: "Tiana Geidt",
    },
  ];

  const numbers = [
    {
      id: 0,
      icon: <i className="fa fa-briefcase"></i>,
      value: "20,583",
      name: "Job Posted",
    },
    {
      id: 1,
      icon: <i className="fa fa-thumbs-up"></i>,
      value: "3,896",
      name: "Successful hires",
    },
    {
      id: 2,
      icon: <i className="fa fa-check-circle"></i>,
      value: "581",
      name: "Verified companies",
    },
    {
      id: 3,
      icon: <i className="fa fa-chart-bar"></i>,
      value: "100K",
      name: "Monthly visits",
    },
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
        <h2 className="numbers__title">Our numbers</h2>
        <p className="numbers__subtitle">
          As the fastest-growing online Job board, our mission is to help <br /> great
          individuals connect with great companies.
        </p>
        <div className="numbers__cards">
          {numbers.map((number) => (
            <div key={number.id} className="number-card">
              <div className="icon-container">{number.icon}</div>
              <h3>
                {number.value}
                <span>+</span>
              </h3>
              <p>{number.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        {comments.map((comment) => (
          <div key={comment.id} className="testimonial-card">
            <p>{comment.title}</p>
            <img src={comment.profile} alt={comment.name} />
            <h4>{comment.name}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutPage;
