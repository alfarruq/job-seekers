import "./numbers.css";

const numbers = () => {
  const numbers = [
    {
      id: 0,
      icon: <i className="fa-solid fa-bag-shopping"></i>,
      number: "20,583",
      name: "Job Posted",
    },
    {
      id: 1,
      icon: <i className="fa-solid fa-thumbs-up"></i>,
      number: "3,896",
      name: "Successful hires",
    },
    {
      id: 2,
      icon: <i className="fa-solid fa-check"></i>,
      number: "581",
      name: "Verified companies",
    },
    {
      id: 3,
      icon: <i className="fa-solid fa-chart-simple"></i>,
      number: "100K",
      name: "Monthly visits",
    },
  ];

  return (
    <div className="numbers">
      <h2 className="numbers__title">Our numbers</h2>
      <p className="numbers__subtitle">
        As the fastest-growing online Job board, our mission is to help great
        individuals connect with great companies.
      </p>
      <div className="numbers__cards">
        {numbers.map((number) => (
          <div key={number.id} className="number-card">
            <div>{number.icon}</div>
            <div className="number__content">
              <h3>{number.number}</h3>
              <p>+</p>
            </div>
            <p>{number.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default numbers;
