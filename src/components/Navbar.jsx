import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [toggle,setToggle] = useState('home/menu.png')
  const [showlink,setShowlink] = useState(false);
  const click = ()=>{
    if(toggle=='home/menu.png'){
      setToggle('home/close.png')
      setShowlink(true)
    }
    else{
      setToggle('home/menu.png')
      setShowlink(false)
    }
    
  }
  return (
    <>
      <div className="nav-bar">
        <img src="iitg.png" alt="" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/directory">Directory</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li id='nav-btn'><Link to="/auth">Are you an Alumni?</Link></li>
        </ul>

        <img src={toggle} onClick={click} alt="toggle" id="toggle"/>
      </div>
      {showlink && 
        <div className="toggle-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/directory">Directory</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/auth">Are you an Alumni?</Link></li>
          </ul>
        </div>
        }
    </>
  );
};

export default Navbar;