import "./footer.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const medias = [
    { id: 0, i: <i className="fa-brands fa-facebook"></i> },
    { id: 1, i: <i className="fa-brands fa-linkedin-in"></i> },
    { id: 2, i: <i className="fa-brands fa-twitter"></i> },
    { id: 3, i: <i className="fa-brands fa-youtube"></i> },
    { id: 4, i: <i className="fa-brands fa-instagram"></i> },
  ];

  return (
    <footer>
      <div className="footer__content">
        <div className="container">
          <div className="footer__content--wrapper">
            <div className="footer__content--wrapper-texts">
              <h2>Find your next great opportunity!</h2>
              <h5>
                We are taking action to help our freelancers, our clients, and
                the people of the world—and so can you.
              </h5>
            </div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer__content--wrapper-hero">
            <div className="footer__content--wrapper">
              <Link to='/'><img src={Logo} alt="Logo" /></Link>
              <p>
                We are taking action to help our freelancers, our clients, and
                the people of Ukraine—and so can you.
              </p>
            </div>
            <div className="footer__list">
              <div className="footer__list--wrapper">
                <li>Find Talent</li>
                <li>Clients</li>
                <li>Blog</li>
              </div>
              <div className="footer__list--wrapper">
                <li>FAQ</li>
                <li>About Us</li>
              </div>
            </div>
            <div className="footer__form">
              <p>Newsletter</p>
              <div className="footer__form--wrapper">
                <input type="text" placeholder="Your email here" />
                <button>Send</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer__wrapper">
            <p>© 2022 Nguli® Global Inc.</p>
            <div className="footer__medias">
              {medias.map((media) => (
                <div key={media.id} className="social-card">
                  <div>{media.i}</div>
                </div>
              ))}
            </div>
            <div className="footer__texts">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
