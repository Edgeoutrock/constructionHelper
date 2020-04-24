import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { createStackNavigator } from 'react-navigation-stack';
//import auth0Client from '../../Auth';


    
  

import Home from "./pages/Home";
import AddProject from "./pages/AddProject";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import DriftApp from "./components/DriftApp/driftapp.js";
import ProjectPost from "./components/ProjectPost/ProjectPost.js";
import Pricing from "./components/pricing/pricing.js";

//import showProjects from "./components/ProjectPost/showProjects.js";
import Callback from './Callback';

function App() {

  //const Stack = createStackNavigator();
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <DriftApp />
        

      {/* <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pricing" component={Pricing} />
      <Stack.Screen name="Services" component={FavoritesList} />
     {auth0Client.isAuthenticated() && <Stack.Screen name="Display" component={ProjectPost} />} 
     {auth0Client.isAuthenticated() && <Stack.Screen name="Post Project" component={AddProject} />} 
    </Stack.Navigator> */}
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component = {Pricing} />
            <Route exact path="/projects" component={FavoritesList} />
            <Route exact path="/projects/:id" component={Detail} />
            <Route  path="/setwork" component={ProjectPost}/> 
            <Route  path="/startProject" component={AddProject}/> 
            <Route  path='/callback' component={Callback}/>
            <Route component={NoMatch} />

            
          </Switch>

          
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
