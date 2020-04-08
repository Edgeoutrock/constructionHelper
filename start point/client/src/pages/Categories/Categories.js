import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { ProjectList, ProjectListItem } from "../../components/ProjectList";
import { List, ListItem } from "../../components/List";
import './projects.css';
import { InputGroup } from "../../components/Form/InputGroup";
import placeholder from "../../assets/placeholder.png";

class Categories extends Component {
  state = {
    name: "",
    addCat: "", // addIngr is now addCat
    projects: [],
    othCat: "", // othIngr is now othCat
    projectSearch: "",
    username: "",
    lastAPICall: "",
   // heartClass: "far fa-heart" why is this needed? ATP
  };

  componentDidMount() {
    this.loadcategories();
  };

  loadcategories = () => {
    API.getcategories(this.props.user.username)
      .then(res =>
        this.setState({ categories: res.data, name: ""})
      )
      .catch(err => console.log(err));
  };

  deletecategory = id => {
    API.deletecategory(id)
      .then(res => this.loadcategories())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOthCatChange = event => { // handleOthIngrChange
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.addIngr) {
      API.savecategory({
        name: this.state.addCat,
        username: this.props.user.username
      })
      .then(res => {
        this.loadcategories()
        this.setState({addCat: ""})
      })
      .catch(err => console.log(err));
    }
  };

  handleProjectInputChange = event => { //handleRecipeInputChange
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleProjectFormSubmit = event => { //handleRecipeFormSubmit
    // When the form is submitted, prevent its default behavior, get projects update the projects state
    event.preventDefault();
    console.log('EVENT ', event.target)
    API.getApiprojects(this.state.projectSearch)
      .then(res => {
        this.setState({projects: res.data})
        this.setState({othCat: ""});
      })
      .catch(err => console.log(err));
  };

  // When checkbox is checked, change project.selected to true
  chosencategories = id => {
    API.getcategory(id)
    .then(res => {
      if (!res.data.selected) {
        API.updatecategory(id, {
          selected: true
        })
        .then(res => {
          this.loadcategories()
          console.log("Ingredient was updated");
        })
        .catch(err => console.log(err));
      } else {
        API.updatecategory(id, {
          selected: false
        })
        .then(res => {
          this.loadcategories()
          console.log("Ingredient was updated");
        })
        .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
  }; 

  // Search API with checked ingredients

  searchWithChosen = event => {
    event.preventDefault();
    // first, build chosenIngred String from ingredients.selected
    let chosencateg = "";
    let firstTime = true;
    this.state.categories.map(i => {
      if (i.selected === true) {
        if (firstTime === true) {
          firstTime = false;
          chosencateg = i.name;
        } else {
          chosencateg = chosencateg + ", " + i.name;
        }
      }
    });
    // then use chosenIngred String to call API
    console.log("You clicked Search Checked:  " + chosencateg);
    this.setState({lastAPICall: chosencateg})
    API.getApiprojects(chosencateg)
      .then(res => { 
        this.setState({ projects: res.data })
        console.log('res ', res.data)
      })
      .catch(err => console.log(err));
  };

  // Search API with all ingredients
  searchWithAll = event => {
    event.preventDefault();
    // first, build allIngred String from ingredients
    let allcateg = "";
    let firstTime = true;
    this.state.categories.map(i => {
      if (firstTime === true) {
        firstTime = false;
        allcateg = i.name;
      } else {
        allcateg = allcateg + ", " + i.name;
      }
    });
    // then use allIngred String to call API
    console.log("You clicked Search All:  " + allcateg);
    this.setState({lastAPICall: allcateg})
    API.getApiprojects(allcateg)
      .then(res => {
        this.setState({ projects: res.data })
      })
      .catch(err => console.log(err));
  };

  // Search API with Other Ingredients from textbox
  searchWithOther = event => {
    event.preventDefault();
    console.log("You clicked Search (other):  " + this.state.othCat);
    this.setState({lastAPICall: this.state.othCat})
    API.getApiprojects(this.state.othCat)
    .then(res => {
      this.setState({ projects: res.data })
    })
    .catch(err => console.log(err));
  };

  newFave = index => {
    console.log("Hey, I'm getting ready to save a project with index = " + index);
    const project = this.state.projects[index];
    // const username = this.state.user.username;
    project.username = this.props.user.username;
    API.saveFave(project)
      .then(res => this.loadcategories())
      .catch(err => console.log(err));
  };

  render() {
    console.log('PROPS ', this.props)
    console.log('STATE ', this.state)
    return (
      <Container fluid>
        <Row>

        {/* First Column Begins Here */}  
          <Col size="lg-6 md-12">
            <div className="page-header">
              <h1>&emsp;Add a category</h1>
              <form>
               <InputGroup
                  addCat={this.state.addCat}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  handleEnterKey={this.handleEnterKey}
                  placeholder={"Category (required)"}
                  btnText={"Submit"}
                  className={"btn btn-color1"}
                />
              </form>
              <br/>
              <h1>&emsp;Categories On-Hand:</h1>
              {this.state.categories ? (
              <List>
                {this.state.categories.map(categories => {
                  return (
                    <ListItem key={categories._id}>
                      <p>
                        {/* Checkbox is first thing */}
                        <input 
                          type="checkbox"
                          defaultChecked={categories.selected}
                          onClick={() => this.chosencategories(categories._id)}
                        /> &emsp;
                        {/* Ingredient name is second thing */}
                        <strong>
                          {categories.name}
                        </strong>
                        {/* Delete button is final thing */}
                        <DeleteBtn onClick={() => this.deletecategory(categories._id)} />
                      </p>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <List>
                <h5 className="text-blue">No categories to Display</h5>
              </List>
            )}
            </div>
          </Col><br/>

        {/* Second Column Begins Here */}
          <Col size="lg-6 md-12">

              <div className="page-header">
                <h1>&emsp;Find Projects:</h1>
                <div className="input-group mb-3">
                  <div className="input-group-prepend" id="button-addon3">
                    <button className="btn btn-color1" type="button" onClick={this.searchWithAll}>Search All</button>
                    <button className="btn btn-color2" type="button" onClick={this.searchWithChosen}>Search Checked</button>
                  </div>
                  <input type="text" name="othIngr" value={this.state.othCat} onChange={this.handleOthCatChange} className="form-control" placeholder="item1, item2, etc." />
                  
                  <div className="input-group-append">
                    <button className="btn btn-color1" onClick={this.searchWithOther} type="button" id="button-addon2">Search</button>
                  </div>
                </div>
                  {!this.state.projects.length ? (
                    <h5 className="text-blue">No Projects to Display</h5>
                  ) : (
                    <div>
                      <p className="little-note">Add to Favorites</p>
                      <div className="clear-float"></div>
                      
                    <ProjectList>
                      {this.state.projects.map((project, index )=> {
                        return (
                          
                          <ProjectListItem
                            index = {index}
                            key={project.title}
                            title={project.title}
                            href={project.href}
                            ingredients={project.ingredients}
                            thumbnail={project.thumbnail || placeholder}
                            className={this.state.heartClass}
                            onClick={ this.newFave }
                          >
                        </ProjectListItem>
                        
                        );
                      })}
                    </ProjectList>
                    </div>
                  )}
                </div>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Categories;
