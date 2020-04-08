import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class FavesDetail extends Component {
  state = {
    project: {}
  };

  // When this component mounts, grab the project with the _id of this.props.match.params.id
  componentDidMount() {
    console.log(this.props);
    API.getFave(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }


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
        <Col size="md-2">    </Col>
          <Col size="md-8 md-offset-1">
            <article>
              <h1>Categories</h1>
              <p>
              {this.state.project.categories}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
        <Col size="md-2">    </Col>
          <Col size="md-8 md-offset-1">
            <article>
              <h1>Instructions</h1>
              <p>
              {this.state.project.instructions}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
        <Col size="md-2">    </Col>
          <Col size="md-2">
            <Link to="/favoriteprojects">← Back to Favorite Projects</Link> {/*the to attribute for link property might be changed in */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FavesDetail;
