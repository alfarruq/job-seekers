
import "./find.css";
import img from "../../../src/assets/Ellipse 1.png";
import Card from "../../components/cardFindJob/card";
import Googllee from "../../assets/Googlee.png";
import Figma from "../../assets/Figma.png";
import Med from "../../assets/Medium.png";
import drib from "../../assets/Dribble.png";

function FindJob() {


    const info = [
        { src: Googllee, name: "Figma", coin: "$450", ago: "20" },
        { src: Figma, name: "Google", coin: "$410", ago: "17" },
        { src: Med, name: "Medium", coin: "$420", ago: "18" },   
        { src: drib, name: "Dribbble", coin: "$410", ago: "20" },
       
    ]

    return (
        <main className="main-9 container">
            <div className="Curtis ">
                <img src={img} alt="" />
            </div>
            <div>

                <div className="cards2">
                    {
                        info.map((product) => {
                            return <Card key={product.id} data={product} />
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default FindJob;