import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateProjectForm from "../components/CreateProjectForm/index.js";

const AddProject = () => {
 
 
  return (<>
 

    <Container fluid>
  
    
          <CreateProjectForm />

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
}


export default AddProject;