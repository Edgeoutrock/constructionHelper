import axios from "axios";

export default {
  // Gets all posts
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the post with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the post with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a post to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  }
};
