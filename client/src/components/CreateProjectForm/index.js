import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_PROJECT, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateProjectForm() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageURLRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      imageURL: imageURLRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_PROJECT,
          project : result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    imageURLRef.current.value = "";
  };

  return (
    <div>
      
      <h1>Create a Project</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
        <textarea className="form-control mb-5" required ref={descriptionRef} placeholder="Description" />
        <input className="form-control mb-5" ref={imageURLRef} placeholder="Add image URL" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Project
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
