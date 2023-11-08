import React from 'react'
import {FaFacebookSquare,FaLinkedin,FaTwitterSquare,FaWhatsapp} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Team(props) {
  return (
           <div className='team-sec'>
           <div className='team-sec-pic'>
           <img src={props.devpic} width={351} height={250}></img>
           </div>
           <div className='team-sec-des'>
              <h1 style={{color:" #1fc9ad", padding:"10px",textTransform:"uppercase"}}>{props.name}</h1>
              <p style={{margin:"10px"}}>senior developer</p>

            <div className='social-link'> 
            <NavLink>{<FaFacebookSquare />}</NavLink>
            <NavLink>{<FaWhatsapp />}</NavLink>
            <NavLink>{<FaTwitterSquare />}</NavLink>
            <NavLink>{<FaLinkedin />}</NavLink>
            
            
            </div>
              
           </div> 
           </div>
  )
}


export default Team
