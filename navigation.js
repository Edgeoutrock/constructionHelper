import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
function NavTabs() {
    
    const location = useLocation();
  
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blog"
            className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}
          >
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact Us
          </Link>
        </li>
        
      </ul>
    );
  }

class App extends Component  {
  
  
    render(){
  
  
  
    return (
      <Router>
        <div> 
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
  
        
        </div>
      </Router>
    );
  
    }
  }






ReactDOM.render(<App />, document.getElementById("root"));