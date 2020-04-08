import React from "react";
import DeleteBtn from "../DeleteBtn";
import "./ProjectCard.css";

const ProjectCard = (props) => (
  <div className="card recipe-card">
    <img src={props.thumbnail} 
      alt="favorite-recipe"
      className="recipe-image"
    />                            
    <div className="card-body recipe-card-body">
      <h5>{props.title}</h5>
      <p className="card-text">{props.categories}</p>
      <a rel="noreferrer noopener" target="_blank" href={props.href}>
        Go to project!
      </a>
      <a href="#">
        <DeleteBtn onClick={() => {props.deleteFave(props.id)}} /> 
      </a>
    </div>
  </div>
);

export default ProjectCard;
