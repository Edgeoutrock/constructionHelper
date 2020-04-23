import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_PROJECT, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getProject(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_PROJECT, project: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      project: state.currentProject
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentProject._id
    });
  };

  return (
    <>{state.currentProject ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {state.currentProject.title} 
              </h1>
              <img src={state.currentProject.imageURL} alt={state.currentProject.title} />
              <article>
              <h1>Description:</h1>
              <p>{state.currentProject.description}</p>
            </article>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Col size="md-6">
        <Link className="btn btn-primary" to="/projects">← Back to Projects</Link>
      </Col>
        <Col size="md-6">
          {state.favorites.indexOf(state.currentProject) !== -1 ? (
            <button className="btn btn-primary" onClick={removeFavorite}>
                Remove from Watchlist!
            </button>
          ) : (
            <button className="btn btn-primary" onClick={addFavorite}>
                 Add to Watchlist
            </button>
          )}
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}
    <footer id="footer">
        
    <div class="footer-bottom">
       <p> © Copyright 2017 Website Name. All Rights Reserved </p>
       <small>Made with <i class="fa fa-heart"></i> by <a target="_blank" href="https://www.facebook.com/iamgurdeeposahan"><b>You Nailed It! Contruction</b> </a></small>
    </div>
 </footer></>
  );
};

export default Detail;
