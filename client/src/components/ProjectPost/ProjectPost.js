import React, { useRef, useState } from "react";
import { useStorageState } from 'react-storage-hooks';
// import OpenWeatherMap from 'react-open-weather-map';
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
import BackgroundSlideshow from 'react-background-slideshow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOpenWeatherMapAPI } from "@jakubzet/use-openweathermap-api";


// var ReactWeather = require('react-open-weather').default;
// //Optional include of the default css styles
// require('react-open-weather/lib/css/ReactWeather.css');








function ProjectPost() {
  const inputRef = useRef();
  const descriptionRef = useRef();
  const imageURLRef = useRef();
  const serviceRef = useRef();
  

  const [title, setTitle] = useState('')

  
   // info: sample is the response object from the OpenWeatherMap's API
  //const [projects, setProjects] = useState([]);
  const [projects, setProjects, writeError] = useStorageState(
    localStorage,
    'display-projects',
    []
  );

  const show = () => {

    toast("weather may take time to display");
  }
  const [state, fetchWeather ] = useOpenWeatherMapAPI({
    key: "a824229569c4a405459ff5720da5b0df",
    queryConfig: {
      cityName: title,
      countryCode: "us"
    },
    queryType: "name",
    units: "metric"
  });

  

  const removeLocalStorage = () => {
    localStorage.removeItem('display-projects');

    toast("removed projects from display!");
  }

  
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
        <input
          className="form-control"
          onChange={event => setTitle(event.target.value) }
          
          type = "text"
          placeholder="city in United States for weather"
        />



        
        <button className="btn btn-success mt-3 mb-5" type="submit" onClick= {show}>
          Add to Projects
        </button>
        
      </form>
      
    </div>
    
    <div className = "zindex3">

    <main>
      <h1>Weather</h1>
 
    
 
      <section>
        <h4>Data:</h4>
        {state.data && state.data.name && state.data.main ? (
          <>
            <p>Weather in {state.data.name}:</p>
            <ul>
              <li>Currently: {state.data.main.temp  * 9/5 + 32} degrees</li>
              <li>Max: {state.data.main.temp_max * 9/5 + 32} degrees</li>
              <li>Min: {state.data.main.temp_min * 9/5 + 32} degrees</li>
            </ul>
          </>
        ) : (
          <p>Nope</p>
        )}
      </section>
 
      
    </main>

    </div>
    
   
    
    <div className = "zindex2">
      <h4>My Projects List:</h4>
      <span >  <Link style={{ color: '#000000' }} to="/">Back to home</Link> </span>
      <button type="button" class="btn btn-danger" onClick = {removeLocalStorage}>Clear All Projects</button>
      <button className="btn btn-success mt-3 mb-5" onClick={fetchWeather} >
          Fetch Weather
        </button>
      <ToastContainer />
      {/* <ReactWeather forecast="5days" apikey="a824229569c4a405459ff5720da5b0df" type="geo" lat="48.1351"
  lon="11.5820"/> */}

  
      {/* <OpenWeatherMap {...props} /> */}
  
      


      {writeError && (
        <pre>Cannot write to localStorage: {writeError.message}</pre>
      )}
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
