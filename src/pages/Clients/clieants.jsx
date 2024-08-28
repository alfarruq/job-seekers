import "./clieants.css"; // Corrected file name
import Profile1 from "../../assets/Ellipse 1.png";
import Profile2 from "../../assets/Ellipse 1 (1).png";
import Profile3 from "../../assets/Ellipse 1 (2).png";
import Profile4 from "../../assets/Ellipse 1 (3).png";
import Profile5 from "../../assets/Ellipse 1 (4).png";
import Profile6 from "../../assets/Ellipse 1 (5).png";
import Comment from "../../components/Comment/comment";
import LeftArrow from "../../assets/arrow-circle-left.png";
import RightArrow from "../../assets/arrow-circle-right.png";
import Numbers from "../../components/Numbers/numbers"

function ClientsPage() {
  const comments = [
    {
      id: 0,
      title:
        "“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”",
      profile: Profile1,
      name: "Davis Rosser",
    },
    {
      id: 1,
      title:
        "“Nguli enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”",
      profile: Profile2,
      name: "Tiana Geidt",
    },
    {
      id: 2,
      title:
        "“I recently used the job seekers web platform to search for and apply to job openings.”",
      profile: Profile3,
      name: "Marilyn Herwitz",
    },
    {
      id: 3,
      title:
        "“ I was amazed by the vast amount of opportunities available and the ease of use of the website.”",
      profile: Profile4,
      name: "Gustavo George",
    },
    {
      id: 4,
      title:
        "“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”",
      profile: Profile5,
      name: "James Kenter",
    },
    {
      id: 5,
      title:
        "“Nguli enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”",
      profile: Profile6,
      name: "Desirae Baptista",
    },
  ];

  return (
    <main className="container">
      <div className="hero">
        <div className="hero__box">
          <h3>Reviews on Ngul!</h3>
          <h4>
            See how clients and talent celebrate their wins and stay accountable
            for their work together, or join today to make your own connections.
          </h4>
          <button className="get-started-button">Get Started</button>
          <hr />
        </div>
        <div className="hero__image"></div>
      </div>
      <div className="comment">
        <h2>Clients and talent leave each other 10k new reviews per week</h2>
        <div className="comment__cards">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        <div className="comment__slide">
          <img src={LeftArrow} alt="Left Arrow" />
          <div className="shapes">
            <div className="rectangle"></div>
            <div className="ellipse"></div>
            <div className="ellipse"></div>
          </div>
          <img src={RightArrow} alt="Right Arrow" />
        </div>
      </div>
      <Numbers />
    </main>
  );
}

export default ClientsPage;
