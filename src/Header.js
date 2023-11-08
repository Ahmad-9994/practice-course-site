import "./style.css"
import { NavLink } from "react-router-dom"
function Header(){
    return(
        <div className="header">
        <div className="logo"><h2>HELLO TECH</h2></div>
        <nav>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/service">SERVICES</NavLink></li>
            <li><NavLink to="/about">ABOUT US</NavLink></li>
            <li><NavLink to="/contact">CONTACT US</NavLink></li>
        </nav>
     
      
     
     </div>
 )
    
}

export default Header