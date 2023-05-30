import React, {useState} from "react";
import { Link } from "react-scroll";
import "./Header.css"
import {BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened]= useState(false)
  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
      
    }
    console.log(getMenuStyles)
  }
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

<OutsideClickHandler 
onOutsideClick={()=>
setMenuOpened(false)}>


        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <Link to="residencies" spy={true} smooth={true} offset={-100} duration={500}>
            Residensies
          </Link>
          <Link to="ourvalues" spy={true} smooth={true} offset={10} duration={500}>Our Values</Link>
          <Link to="contactus" spy={true} smooth={true} offset={10} duration={500}>Contact Us</Link>
          <Link to="getstarted" spy={true} smooth={true} offset={-150} duration={500}>Get Started</Link>
          <button className="button">
          <a href="mailto:harisawan934@gmail.com">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>
      
    </section>
  );
};

export default Header;
