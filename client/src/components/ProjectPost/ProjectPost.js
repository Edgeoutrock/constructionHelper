import React, { useRef, useState} from "react";

import BackgroundSlideshow from 'react-background-slideshow';
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import image3 from '../assets/pic3.jpg';
import image4 from '../assets/pic4.jpg';
import image5 from '../assets/pic5.jpg';
import image6 from '../assets/pic6.jpg';
import image7 from '../assets/pic7.jpg';
import image8 from '../assets/pic8.jpg';
import "./fade.css";

import { Link } from "react-router-dom";




function ProjectPost() {
  const inputRef = useRef();
  const descriptionRef = useRef();
  const imageURLRef = useRef();
  const serviceRef = useRef();
  

  const [projects, setProjects] = useState([]);



  const addProject = (e) => {
    e.preventDefault();
    setProjects([
      ...projects,
      {
        id: projects.length * Math.random(),
        name: inputRef.current.value,
        description: descriptionRef.current.value,
        imageURL: imageURLRef.current.value,
        servicesNeeded: serviceRef.current.value
      }
    ]);

    
    inputRef.current.value = "";
    descriptionRef.current.value = "";
    imageURLRef.current.value = "";
    serviceRef.current.value = "";

  };

  // const removeProject = (e, index) => {
   
  //   projects.filter(( ) => {
  //     return item.id !== index;
  //   });

  // }

  // const prioritizeProject = (e, index) => {
    
  //   projects.map((item) => {
  //     if (item.id === index) {
  //       return Object.assign({}, item, {
  //         priority: !item.priority
  //       });
  //     }
  //     return item;
  //   });

  // }



  return (<>
    <div className = "zindex1">
      <h1>Create a Project!</h1>
      <form className="form-group mt-5" onSubmit={addProject}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Project Name"
        />
        <input
          className="form-control"
          ref={descriptionRef}
          placeholder="description"
        />
        <input
          className="form-control"
          ref={imageURLRef}
          placeholder="copy image location with Google"
        />
        <input
          className="form-control"
          ref={serviceRef}
          placeholder="Services desired"
        />
        
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to Projects
        </button>
      </form>
    </div>
    
    
   
    
    <div className = "zindex2">
      <h4>My Projects List:</h4>
      <span >  <Link style={{ color: '#000000' }} to="home">Back to home</Link> </span>
      <ul className = "list-group">
      {projects.map((item, index) => (
          <li className="list-group-item" key={item.id}>
            
            <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.imageURL} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title"> <span className={item.priority ? "font-weight-bold" : ""}> {item.name}</span></h4>
            <ul className="card-text">
              <li>
              <p >
                {item.description}
              </p>
              </li>
              <li>
              <span className={item.priority ? "font-weight-bold card-text" : ""}> Service: {item.servicesNeeded ? item.servicesNeeded : "none" }</span> 
              </li>
              </ul>
         
         {/*
          <li>
          <button
              className="btn btn-warning mr-4"
              onClick={() => setProjects(Object.assign({}, item, {priority: !priority}))}
            >
              
              Prioritize
            </button>
           
            
          </li>
           <li>
          <button
              className="btn btn-danger mr-4"
              onClick={() => removeProject(item.id)}
            >
              X Remove
            </button>
          </li> */}
           </div>
           </div>
          </li>
        ))}
      </ul>
    </div>
<BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6, image7, image8 ]} />
</>
  );
}

export default ProjectPost;
