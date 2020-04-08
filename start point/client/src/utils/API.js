import axios from "axios";

export default {

  // --------categories--------------
  // Gets all categories
  getcategories: function(username) {
    return axios.get(`/api/categories/username/${username}`);
  },
  // Gets the category with the given id
  getcategory: function(id) {
    return axios.get("/api/categories/" + id);
  },
  // Deletes the ingredient with the given id
  deletecategory: function(id) {
    return axios.delete("/api/categories/" + id);
  },
  // Saves an category to the database
  savecategory: function(categoryData) {
    return axios.post("/api/categories", categoryData);
  },
  // Updates an category with the given id
  updatecategory: function(id, categoryData) {
    return axios.put("/api/categories/" + id, categoryData);
  },
  // Updates all categories with the given criteria
  updatecategories: function(filter, ingUpdate) {
    return axios.put("/api/categories/", {filter, ingUpdate});
  },


  // --------projects (FROM API)--------------
  // Gets all projects from API using search query
  getApiprojects: function(query) {
    console.log("API Query: " + query);
    return axios.get("/api/apiprojects", { params: { q: query } });
  },

   // --------PERSONAL projects--------------
  // Gets all personal projects
  getProjects: function(username) {
    return axios.get(`/api/projects/username/${username}`);
  },
  // Gets the personal Project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the personal Project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a personal Project to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
   // Updates a personal projecdt with the given id
   updateProject: function(id, projectData) {
    return axios.put("/api/projects/" + id, projectData);
  },

   // --------FAVORITE projects--------------
  // Gets all favorite projects
  getFaves: function(username) {
    return axios.get(`/api/faves/username/${username}`);
  },
  // Gets the favorite project with the given id
  getFave: function(id) {
    return axios.get("/api/faves/" + id);
  },
  // Deletes the favorite project with the given id
  deleteFave: function(id) {
    return axios.delete("/api/faves/" + id);
  },
  // Saves a favorite project to the database
  saveFave: function(projectData) {
    console.log(projectData);
    return axios.post("/api/faves", projectData);
  }

};
