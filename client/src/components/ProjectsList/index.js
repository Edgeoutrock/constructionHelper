import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
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
            
            <div key={project.title} className="card mx-auto col-4">
            <div style ={divStyle} className = {style.link}>
            <ListItem key={project._id} title={project.title} imageURL = {project.imageURL} id ={project._id}>
            <img className="card-img-top" src={project.imageURL} alt={project.title} />
            <div className="card-body">
              <h4 className="card-title">{project.title}</h4>
            {/* <input type = "text" ref={inputRef}/> */}
            </div>
            </ListItem>
            </div>
            <Row>
            <Col size="md-6">
            <button className="btn btn-primary" onClick={() => dispatch("change" + project.title.split(" ").join(""))}>
            Add Contact Information
          </button>
            </Col>
            <Col size="md-6 sm-12">
            <DeleteBtn className="btn btn-danger" onClick={() => removeProject(project._id)} />
            </Col>
          </Row>
          
          
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
