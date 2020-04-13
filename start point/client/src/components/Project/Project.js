import React from "react";

function Project() {
  return (

<div>

<div id="services">
    <div lassName="container">
       <div className="section-title">
          <h2>Projects List</h2>
       </div>
       <div className="row">
          <div className="col-sm-6 col-md-4">
             <div className="service-media"> <img src="img/services/service-1.jpg" alt=" "></img></div>
             <div className="service-desc">
                <h3>New Home Construction</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
             </div>
          </div>
          <div className="col-sm-6 col-md-4">
             <div className="service-media"> <img src="img/services/service-2.jpg" alt=" "></img> </div>
             <div className="service-desc">
                <h3>Home Additions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
             </div>
          </div>
          <div className="col-sm-6 col-md-4">
             <div className="service-media"> <img src="img/services/service-3.jpg" alt=" "></img> </div>
             <div className="service-desc">
                <h3>Bathroom Remodels</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
             </div>
          </div>
          <div className="col-sm-6 col-md-4">
             <div className="service-media"> <img src="img/services/service-4.jpg" alt=" "></img> </div>
             <div className="service-desc">
                <h3>Kitchen Remodels</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
             </div>
          </div>
          <div className="col-sm-6 col-md-4">
             <div className="service-media"> <img src="img/services/service-5.jpg" alt=" "></img> </div>
             <div className="service-desc">
                <h3>Windows & Doors</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
             </div>
          </div>
          <div className="col-sm-6 col-md-4">
             <div className="service-media"> <img src="img/services/service-6.jpg" alt=" "></img> </div>
             <div className="service-desc">
                <h3>Decks & Porches</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
             </div>
          </div>
       </div>
    </div>
 </div>


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

export default Project;
