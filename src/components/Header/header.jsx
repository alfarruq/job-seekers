import { useNavigate } from "react-router-dom";
import headerLog from "../../assets/Logo (2).png"
import './header.css'
function Header() {

  const navigate = useNavigate()

    return ( 
        <header className="container">
            <img onClick={()=> navigate('/')} src={headerLog} alt="" />
            <div className="links">
                <a href="/home">Find Talent</a>
                <a href="/clients">Clients</a>
                <a href="/community">Community</a>
                <a href="/blog">Blog</a> 
                <a href="/about">About us</a> 
                <a href="/findJob">Find Job</a> 
            </div>
            <div className="btns">
                <button  >Log in</button>
                <button onClick={()=> navigate('/signin')} >  Sign up</button>
            </div>
        </header>
     );
}

export default Header;