import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [store] = useStoreContext();
  const location = useLocation();

  return (
    <>
    <div id="top" class="top-header hidden-sm hidden-xs">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-md-6">
                  <div class="top-number">
                     <p>
                        <i class="fa fa-phone"></i>  +1 900 234 567, +1 900 234 568
                        &nbsp;&nbsp;&nbsp; <i class="fa fa-envelope-o"></i> Mail : info@osahan.com
                     </p>
                  </div>
               </div>
               <div class="col-xs-12 col-md-6 text-right">
                  <ul class="social-share-top">
                     <a href="#" class="btn-social btn-behance"><i class="fa fa-behance"></i></a>
                     <a href="#" class="btn-social btn-dribbble"><i class="fa fa-dribbble"></i></a>
                     <a href="#" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a>
                     <a href="#" class="btn-social btn-google-plus"><i class="fa fa-google-plus"></i></a>
                     <a href="#" class="btn-social btn-instagram"><i class="fa fa-instagram"></i></a>
                     <a href="#" class="btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a>
                     <a href="#" class="btn-social btn-pinterest"><i class="fa fa-pinterest"></i></a>
                     <a href="#" class="btn-social btn-skype"><i class="fa fa-skype"></i></a>
                     <a href="#" class="btn-social btn-twitter"><i class="fa fa-twitter"></i></a>
                     <a href="#" class="btn-social btn-youtube"><i class="fa fa-youtube"></i></a>
                     <a href="#" class="btn-social btn-email"><i class="fa fa-envelope-o"></i></a>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    <nav>
      {/* <ul class="Mass"><li> Constuction Helper</li></ul> */}
<ul class="menu">
         <li class="logo">
         <img src = "../img/favicon.png"/>
        </li>
        <li class="item"> <Link to="/" className={location.pathname === "/" ? "activate" : "notactivate"}>Home </Link></li>
        <li class="item">
        <Link to="/projects" className={location.pathname === "/projects" ? "activate" : "notactivate"}>Projects </Link> </li>
        
        
        <li class="item">
        <Link to="/contact" className={location.pathname === "/contact" ? "activate" : "notactivate"}>Contact </Link></li>
        <li class="item button"><a href="#">Log In</a></li>
        <li class="item button secondary"><a href="#">Sign Up</a></li>
        <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
        </ul> 
        
</nav>
</>
  );
}

export default Nav;


