import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_PROJECT, UPDATE_PROJECTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import style from "./styles.css";


const divStyle = {
  margin: '10px',
  border: '5px solid black',
  backgroundColor: 'blue'

};
function ProjectsList() {
  const [state, dispatch] = useStoreContext();

  const removeProject = id => {
    API.deleteProject(id)
      .then(() => {
        dispatch({
          type: REMOVE_PROJECT,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getProjects = () => {
    dispatch({ type: LOADING });
    API.getProjects()
      .then(results => {
        dispatch({
          type: UPDATE_PROJECTS,
          projects: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <h1>All Projects</h1>
      <h3 className="mb-5 mt-5">Click on a project to view</h3>
      {state.projects.length ? (
        <List>
          {state.projects.map(project => (
            <div style ={divStyle} className = {style.link}>
            <ListItem key={project._id} title={project.title} imageURL = {project.imageURL} id ={project._id}>
              <div className = {style.detailsContainer}>
              {project.title}  
              </div>
              <div className={style.description}>
              {project.imageURL}
              </div>
              
              <DeleteBtn onClick={() => removeProject(project._id)} />
              
            </ListItem>
            </div>
          ))}
        </List>
      ) : (
        <h3>You haven't added any projects yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
}

export default ProjectsList;
