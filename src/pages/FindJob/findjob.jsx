
import "./find.css";
import img from "../../../src/assets/Ellipse 1.png";
import Card from "../../components/cardFindJob/card";
import Googllee from "../../assets/Googlee.png";
import Figma from "../../assets/Figma.png";

function FindJob() {


    const info = [
        { src: Googllee, h4: "Sr. UI/UX Web Designer", name: "Figma", coin: "$450", ago: "" },
        { src: Figma, h4: "Sr. UI/UX Web Designer", name: "Google", coin: "$410", ago: "" },
        { src: Googllee, h4: "Sr. UI/UX Web Designer", name: "Medium", coin: "$420", ago: "" },
        { src: Figma, h4: "Sr. UI/UX Web Designer", name: "Dribbble", coin: "$410", ago: "" },
       
    ]

    return (
        <main>
            <div className="Curtis container">
                <img src={img} alt="" />
            </div>
            <div>
                <div></div>
                <div className="cards">
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