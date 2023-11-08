import React from 'react'
import {FaFacebookSquare,FaLinkedin,FaTwitterSquare,FaWhatsapp,FaAddressCard} from "react-icons/fa";
import {IoMdContact} from "react-icons/io";
import {GrMail} from "react-icons/gr";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
    <div class="footer-section">
      <h3>About Us</h3>
      <p>We are a team of professionals dedicated to creating high-quality web content.</p>
      <p>We are a team of professionals dedicated to creating high-quality web content.</p>
    </div>
    <div class="footer-section">
      <h3>Recent Posts</h3>
      <ul>
        <li><a href="#">Lorem ipsum dolor sit amet</a></li>
        <li><a href="#">Consectetur adipiscing elit</a></li>
        <li><a href="#">Lorem ipsum dolor sit amet</a></li>
        <li><a href="#">Consectetur adipiscing elit</a></li>
        <li><a href="#">Sed do eiusmod tempor incididunt</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Contact Us</h3>
      <ul style={{lineHeight:"30px"}}>
         <h4>{<IoMdContact />} 123-456-7890</h4>
         <h4>{<GrMail />} info@example.com</h4>
         <h4>{<FaAddressCard />} 123 Main St, Anytown USA</h4>
         <h4>{<GrMail  />}  info@example.com</h4>
        </ul>
    </div>

    <div className='footer-social-link'> 
    <NavLink>{<FaFacebookSquare />}</NavLink>
    <NavLink>{<FaWhatsapp />}</NavLink>
    <NavLink>{<FaTwitterSquare />}</NavLink>
    <NavLink>{<FaLinkedin />}</NavLink>
    
    
    </div>
  </footer>
  
  )
}

export default Footer
