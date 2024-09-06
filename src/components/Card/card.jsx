

import "../Card/card.css";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item?.img} alt="" />
      <h3>{item?.title}</h3>
      <p>{item?.info}</p>
      <div className="date">
        <p>Juni 27, 2022</p>
        <p style={{ color: "#4864E1" }}>Read More</p>
      </div>
    </div>
  );
}

export default Card;

