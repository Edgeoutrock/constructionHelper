import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import projects from "./projects.json";

class App extends Component {
  
  state = {
    projects
  };

  removeProject = id => {
 
    const projects = this.state.projects.filter(project => project.id !== id);
    
    this.setState({ projects });
  };


  render() {
    return (
      <Wrapper>
        <Title>Projects offered</Title>
        {this.state.projects.map(project => (
          <FriendCard
            removeProject={this.removeProject}
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            details ={project.details}
            location={project.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
