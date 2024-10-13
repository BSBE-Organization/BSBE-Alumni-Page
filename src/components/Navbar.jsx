import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [showlink,setShowlink] = useState(false);
  const [user,setUser] = useState('Are you an Alumni?')
  const [path,setPath] = useState('/auth');
  const [isLoggedin, setIsloggedIn] = useState(false);

  const storedUserData = localStorage.getItem('userData');
  const navigate = useNavigate();
  const click = ()=>{
    setShowlink(!showlink)
  }
  const handleLogout = () => {
    // console.log("User Logout");
    localStorage.removeItem('userData');
    setUser('Are you an Alumni?');
    setPath('/auth');
    setIsloggedIn(false);
    setShowlink(!showlink)
    navigate('/');
  };
  useEffect(()=>{
      if (storedUserData) {
        const userdata = JSON.parse(storedUserData);
        // console.log('userdata',userdata);
        setUser("Hi, "+userdata.name);
        setPath('/profile')
        setIsloggedIn(true);
        // console.log('user name', user);
      }

  },[storedUserData]);

  return (
    <>
      <div className="nav-bar">
        <img src="home/iitg.png" alt="" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/directory">Directory</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li id='nav-btn'><Link to={path}>{user}</Link></li>
          {isLoggedin && <img src="images/logout.png" id="logout" onClick={handleLogout}/>}
        </ul>

        <img src='home/menu.png' onClick={click} alt="toggle" id="toggle"/>
      </div>
      {showlink && 
        <div className="toggle-menu">
        <div className="toggle-menu-head">
          <div>{isLoggedin && <img src="images/logout.png" id="logout" onClick={handleLogout}/>}</div>
          <img src="home/close.png" alt="" onClick={click}/>
        </div>
          <ul>
            <li><Link to="/" onClick={click}>Home</Link></li>
            <li><Link to="/directory" onClick={click}>Directory</Link></li>
            <li><Link to="/team" onClick={click}>Team</Link></li>
            <li><Link to={path} onClick={click}>{user}</Link></li>
          </ul>
        </div>
        }
    </>
  );
};

export default Navbar;