import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import Picks from "../components/Picks/picks.js";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";





const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">

<Picks />
      
      <h1 className="text-center">Here's All of Your Favorite Projects</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a project to view in detail</h3>
          {state.favorites.map(project => (
            <ListItem key={project._id}>
              <Link to={"/projects/" + project._id}>
                <strong>
                  {project.title} by {project.imageURL}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(project._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
