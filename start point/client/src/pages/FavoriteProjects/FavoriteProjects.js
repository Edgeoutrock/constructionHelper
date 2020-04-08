import React, { Component } from "react";
import API from "../../utils/API";
import './FavoriteProjects.css';
import placeholder from '../../assets/placeholder.png';
import ProjectCard from "../../components/ProjectCard";
import CardWrapper from "../../components/CardWrapper";

class FavoriteProjects extends Component {
    state = {
      currentPage: "FavoriteProjects",
      faves: [],
      username: ""
    };
     
  componentDidMount() {
    this.loadFaves();
  }

  loadFaves = () => {
    API.getFaves(this.props.user.username)
      .then(res =>
        this.setState({ faves: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteFave = id => {
    API.deleteFave(id)
      .then(res => this.loadFaves())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
  render() {
    console.log('PROPS ', this.props)
    console.log('STATE ', this.state)
    return (
      <div>
        <h1>Favorite Projects</h1>
        <CardWrapper>
          {this.state.faves.map(faves => {
            return (

              <ProjectCard key={faves._id}
                thumbnail={faves.thumbnail || placeholder}
                title={faves.title}
                ingredients={faves.categories}
                href={faves.href}
                id={faves._id}
                deleteFave={this.deleteFave}
              >
              </ProjectCard>

            )
          })}
        </CardWrapper>
      </div>
    );
  }
}

export default FavoriteProjects;    
