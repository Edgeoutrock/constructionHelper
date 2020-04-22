import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PROJECT,
  REMOVE_PROJECT,
  UPDATE_PROJECTS,
  ADD_PROJECT,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_PROJECT:
    return {
      ...state,
      currentProject: action.project,
      loading: false
    };

  case UPDATE_PROJECTS:
    return {
      ...state,
      projects: [...action.projects],
      loading: false
    };

  case ADD_PROJECT:
    return {
      ...state,
      projects: [action.project, ...state.projects],
      loading: false
    };

  case REMOVE_PROJECT:
    return {
      ...state,
      projects: state.projects.filter((project) => {
        return project._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.project, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((project) => {
        return project._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    projects: [],
    currentProject: {
      _id: 0,
      title: "",
      description: "",
      imageURL: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
