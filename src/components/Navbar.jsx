import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState,useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom"

const Navbar = () => {
  const [toggle,setToggle] = useState('home/menu.png')
  const [showlink,setShowlink] = useState(false);
  const [user,setUser] = useState('Are you an Alumni?')

  const location = useLocation();
  const data = location.state?.data;
  console.log('data',data);

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
  useEffect(() => {
    if (data && data.name) {
      setUser(data.name);
      console.log('user name', user);
    }
  }, [data, user]);

  return (
    <>
      <div className="nav-bar">
        <img src="home/iitg.png" alt="" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/directory">Directory</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li id='nav-btn'><Link to="/auth">{user}</Link></li>
        </ul>

        <img src={toggle} onClick={click} alt="toggle" id="toggle"/>
      </div>
      {showlink && 
        <div className="toggle-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/directory">Directory</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/auth">{user}</Link></li>
          </ul>
        </div>
        }
    </>
  );
};

export default Navbar;