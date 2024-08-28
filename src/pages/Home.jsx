import { NavLink } from 'react-router-dom';
import './Home.css'
import logos from "./img/Logo.png";
import girl from "./img/Mask group.png";
import girl1 from "./img/Mask group (1).png";
import logo1 from './img/message-programming.png';
import logo2 from './img/briefcase (1).png';
import logo3 from './img/status-up.png';
import logo4 from './img/star.png';
import logo5 from './img/24-support.png';
import logo6 from './img/coin.png';
import logo7 from './img/image 12 (2).png';
import logo8 from './img/user-search.png';
import logo9 from './img/Image.png';





function HomePage() {
    return ( 
        <main className="home container" >
            <section className='section-one-home' >
                <div className='section-one-home-left' >
                    <div className='portal-job' >
                        <h1>Portal Job for Developer, Designer, and Marketers</h1>
                        <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                    </div>
                    <div className='search-job' >
                        <div className='search-job-links' >
                        <h3><NavLink to="/">Find Job</NavLink></h3>
                        <h3><NavLink to="/">Find Talents</NavLink></h3>
                        </div>
                        <div className='inputs' >
                            <div className='input-search' > <input placeholder=' Search for job..' type="search" name="" id="" /></div>
                            <div className='input-type' ><input placeholder='Job Type' type="text" name="" id="" /></div>
                            <div className='input-departament' ><input placeholder='Department' type="text" name="" id="" /></div>
                            <button>🔍 Search</button>
                        </div>
                    </div>
                    <div className='trusted' >
                        <h3>Trusted by:</h3>
                        <img src={logos} alt="" />
                    </div>
                </div>  
                <div className='section-one-home-right' >
                    <div className='girl-head' >
                    <img  src={girl1} alt="" />
                    </div>
                    <div className='girl-body' >
                    <img src={girl} alt="" />
                    </div>
                </div>
            </section>
            <section className='section-two-home' >
                <div className='featured' >
                    <h2>Featured Job</h2>
                    <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                </div>
                <div className='fetaured-cards' >
                    <div className='developer' >
                    <img src={logo1} alt="" />
                    <h3>Developer</h3>
                    <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                    <h4> 211K+ contracts</h4>
                    <h5>1,665 skills</h5>
                    <button>Browse Job</button>
                    </div>
                    <div className='designer' >
                    <img src={logo2} alt="" />
                    <h3>Designer</h3>
                    <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                    <h4> 411K+ contracts</h4>
                    <h5>1,422 skills</h5>
                    <button>Browse Job</button>
                    </div>
                    <div className='marketers' >
                    <img src={logo3} alt="" />
                    <h3>Marketers</h3>
                    <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                    <h4> 234K+ contracts</h4>
                    <h5>1,321 skills</h5>
                    <button>Browse Job</button>
                    </div>
                </div>
            </section>
            <section className='section-three-home' >
                <div className='section-three-home-left' >
                    <div className='forclients' >
                        <h3>For Clients</h3>
                        <h2>Why businesses turn to Nguli</h2>
                    </div>
                    <div className='reviews' >
                        <div className='proof' >
                            <img src={logo4} alt="" />
                            <div className='review' >
                                <h3>Proof of quality</h3>
                                <p>Check any pro’s work samples, client reviews, and identity verification.</p>
                            </div>
                        </div>
                        <div className='proof' >
                            <img src={logo5} alt="" />
                            <div className='review' >
                                <h3>Safe and secure</h3>
                                <p>Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</p>
                            </div>
                        </div>
                        <div className='proof' >
                            <img src={logo6} alt="" />
                            <div className='review' >
                                <h3>No cost until you hire</h3>
                                <p>Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-three-home-right' >
                    <img src={logo7} alt="" />
                </div>
            </section>
            <section className='section-four-home' >
                <div className='find' >
                    <h2>Find great work</h2>
                    <p>Meet clients you’re excited to work with and take your career or business to new heights.</p>
                </div>
                <div className='lists' >
                    <div className='freelance' >
                        <div className='career' >
                            <img src={logo8} alt="" />
                            <h3>Find opportunities for every stage of your freelance career</h3>
                            <hr />
                            <button>Join Now</button>
                        </div>
                    </div>
                    <div className='photo' >
                        <img src={logo9} alt="" />
                    </div>
                </div>
            </section>
            <section className='section-five-home' >
                <h2>Trusted by leading brands and startups</h2>
                <div></div>
            </section>
        </main>
     );
}

export default HomePage;