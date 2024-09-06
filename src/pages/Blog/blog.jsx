


import "../Blog/blog.css"
import Card from   "../../components/Card/card";
import {data} from "../../components/Card/cardData"


function BlogPage() {
    return (
        <main className="container">
            <div className="frames">
                <div className="blueFrame">
                <i className="fa-regular fa-newspaper" ></i>
                    <h2>Resource & Learning Center</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id tincidunt malesuada pharetra arcu turpis cursus mattis fringilla.
                    </p>
                    <br />               
                    <hr />
                </div>
                <div className="bigFrame" > <button>For Designer</button></div>
                <div className="leftFrames">
                    <div className="leftFrameDeveloper"> <button>For Developer</button></div>
                    <div className="leftFrameMarkets"> <button>For Markets</button></div>

                </div>
            </div>
            <div className="cards">
                {data.map((qator)=>{
                    return <Card key={qator.id} item={qator}/>
                })}
            </div>
        </main>
    );
}

export default BlogPage;