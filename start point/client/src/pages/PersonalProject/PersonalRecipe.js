import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Input, FormBtn} from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import image from '../../assets/PastaPic.jpg';
import './PersonalProject.css';

class PersonalProject extends Component {
  state = {
    title: "",
    name: "",
    ingredients: "",
    instructions: "",
    username: ""
  };
 
  componentDidMount() {
    this.loadProjectss();
  }

  loadProjects = () => {
    API.getProjectss(this.props.user.username)
      .then(res =>
        this.setState({ projects: res.data, title: "", categories: "", instructions: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.title && this.state.categories && this.state.instructions) {
      console.log(this.props)
      API.saveProject({
        title: this.state.title, 
        categories: this.state.categories,
        instructions: this.state.instructions,
        username: this.props.user.username
      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };
 
  render() {
    return (
      <Container fluid>
        <Row id="topRow">
          <Col size="md-6">
            <img src={image} className="img-thumbnail" alt="recipe">
            </img>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Project Name"
                  inputvalue=""
                />
                <Input
                  value={this.state.ingredients}
                  onChange={this.handleInputChange}
                  name="categories"
                  placeholder="categories"
                  inputvalue=""
                />
              </form>

              <form>
                <div className="form-group">
                  <textarea
                    className="form-control" rows="5" id="instructionsInput"
                    value={this.state.instructions}
                    onChange={this.handleInputChange}
                    name="instructions"
                    placeholder="Instructions">
                  </textarea>
                </div>
                <FormBtn
                  disabled={!(this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Project
                </FormBtn>
              </form>
          </Col>

        <Col size="md-6 sm-12">
          <Container>
          <h1 id="savedProjectsHeader">&emsp;Saved Personal Projects</h1>
            {this.state.projects ? (
                  <List>
                    {this.state.projects.map(projects => {
                      return (
                        <ListItem key={projects._id}>
                          <a href={"/projects/" + projects._id}>
                            <strong>
                              {projects.title}
                            </strong>
                          </a>
                          <DeleteBtn onClick={() => this.deleteProject(projects._id)} />
                        </ListItem>
                      );
                    })}
                  </List>
                ) : (
                  <h3>No Project to Display</h3>
                )}
            </Container>
        </Col>
      </Row>
    </Container>
        );
    }
}

export default PersonalProject;