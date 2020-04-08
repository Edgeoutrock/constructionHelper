import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn} from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    project: {},
    title: "",
    categories: "",
    instructions: ""
  };

  // When this component mounts, grab the recipe with the _id of this.props.match.params.id
  componentDidMount() {
    this.loadProject();
  }

  loadProject = () => {
    // API.getRecipe(this.props.match.params.id)
    console.log (this.props)
    API.getProject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }))
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

    if (this.state.title || this.state.categories || this.state.instructions) {
      API.updateProject(this.state.project._id, {
         // If there are empty fields, use values stored in state rather than clearing field
        title: this.state.title || this.state.project.title, 
        categories: this.state.categories || this.state.project.categories,
        instructions: this.state.instructions || this.state.project.instructions
      })
        .then(res => this.loadProject())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.project.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>


        <Row> 
          {/* left side */}
          <Col size="md-6">
          {/* row 1 */}
          <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Categories</h1>
              <p>
              {this.state.project.categories}
              </p>
            </article>
            </Col>
          </Row>
          {/* row 2 */}
          <Row>
          <Col size="md-10 md-offset-1">
          <article>
              <h1>Instructions</h1>
              {/* Using <pre> instead of <p> will render user-inputted line breaks and formatting */}
              <pre>
              {this.state.project.instructions}
              </pre>
            </article>
          </Col>
          </Row>
          {/* row 3 */}
        <Row>
        <Col size="md-2">    </Col>
          <Col size="md-8">
          <Link to="/personalrecipe">← Back to Personal Projects</Link>
         </Col>
        </Row>
          </Col>

          {/* right side */}
          <Col size="md-6">
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder={this.state.project.title}
                  inputvalue=""
                />
                <Input
                  value={this.state.categories}
                  onChange={this.handleInputChange}
                  name="ingredients"
                  placeholder={this.state.project.categories}
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
                    placeholder={this.state.project.instructions}>
                  </textarea>
                </div>
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  Update Project
                </FormBtn>
              </form>
          </Col>
        </Row>
        </Container>
    );
  }
}

export default Detail;
