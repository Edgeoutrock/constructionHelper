import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";

const Home = () => {
  return (<>
 
 {/* <!-- Get Touch Section --> */}
      <div id="get-touch">
         <div class="container">
            <div class="row">
               <div class="col-sm-8 col-xs-12 col-md-8">
                  <h3>Providing professional construction services since 1990.</h3>
                  <p>Get Started Today and Complete Our Form to Request Your Free Estimate</p>
               </div>
               <div class="col-sm-4 col-xs-12 col-md-4 text-right"><a href="#contact" class="btn btn-custom btn-lg page-scroll">PURCHASE NOW</a></div>
            </div>
         </div>
      </div>
	  {/* <!-- End Get Touch Section --> */}
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>

    {/* <!-- Footer Section --> */}
      <footer id="footer">
        
         <div class="footer-bottom">
            <p> © Copyright 2017 Website Name. All Rights Reserved </p>
            <small>Made with <i class="fa fa-heart"></i> by <a target="_blank" href="https://www.facebook.com/iamgurdeeposahan"><b>You Nailed It! Contruction</b> </a></small>
         </div>
      </footer>
    </>
  );
};

export default Home;
