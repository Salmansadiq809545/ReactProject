import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



const PNav = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    await signOut(auth);
   navigate('/login')
 
  };
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      document.getElementById('title').style.display="none"
    } else {
      document.getElementById('title').style.display=""
    }
  });
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      document.getElementById('navbar').style.display=""
    } else {
      document.getElementById('navbar').style.display="none"
    }
  });
  
  return (
    <div className="Nav " >
      <div className="brand">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="head">
        <Navbar variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mt-2">
              <div id="navbar">
                <Link to="/">HOME</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/signup">SIGN UP</Link>
                <Link to="/contact">CONTACT US</Link>
              </div>
              <div id="title">
             
             
              <div className="dropdown mb-4" >
  <button className="btn btn-dark dropdown-toggle me-3 " style={{width:'200px'}}  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  MOVIES
  </button>
  <ul className="dropdown-menu bg-dark" style={{textAlign:'center',width:'300px'}} aria-labelledby="dropdownMenuButton1">
 
            <li> <Link to="/hindimovies">HindiMovie </Link></li>
            <li> <Link to="/kannadamovies">KannadaMovie </Link></li>
            <li>  <Link to="/telgu">TeluguMovie </Link></li>
            <li>  <Link to="/tamil">TamilMovie </Link></li>
            
  </ul>
</div> 
             <div className="dropdown mb-4" >
  <button className="btn btn-dark dropdown-toggle me-3" style={{width:'200px'}}  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  NEWS
  </button>
  <ul className="dropdown-menu bg-dark "  style={{textAlign:'center',width:'300px'}} aria-labelledby="dropdownMenuButton1">
 
            <li> <Link to="/english">English News</Link></li>
            <li> <Link to="/hindi">Hindi News</Link></li>
            <li> <Link to="/kannada">Kannada News</Link></li>
  </ul>
</div> 
  <Link to="/Haj">LIVE HAJ</Link>
              <Link to="/pubg">PUBG LIVE</Link>
              <Link to="/song">New Songs</Link>
              </div>
              
            
          
              <Link onClick={() => Logout()}>LOGOUT</Link> 
            
    
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </div>
      
    </div>
  );
};

export default PNav;
