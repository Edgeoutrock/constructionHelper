import React from "react";

function Nav() {
  return (

<div>

<header id="header">
<div className="intro">
   <div id="osahan-slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
         <div className="item active">
            <div className="imgoverlay"></div>
            <img src="img/sider/slider2.jpg" alt="Third slide"></img>
            <div className="carousel-caption text-center">
               <h1>Construction Helper
               </h1>
               <p>The application lets peple post their project so constructor who are interested can contact them.</p>
            </div>
         </div>

      </div>
   </div>
</div>
</header>


 <nav id="menu" className="navbar navbar-default navbar-fixed-top menu-top">
    <div className="container">
       <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
          <a className="navbar-brand page-scroll" href="#page-top">Construction Helper</a>
       </div>
       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
             <li><a href="#top" className="page-scroll">Home</a></li>
             <li><a href="#about" className="page-scroll">About Us</a></li>
             <li><a href="#portfolio" className="page-scroll">Projects</a></li>
             <li><a href="#plans" className="page-scroll">Login</a></li>
             <li><a href="#contact" className="page-scroll">Sign Up</a></li>
          </ul>
       </div>
    </div>
 </nav>
 <footer>
 <div className="footer-bottom">
 <p> © Copyright 2020 </p>
</div>
</footer>
 </div>
  );
}

export default Nav;
