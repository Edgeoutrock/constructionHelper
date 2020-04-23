import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
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
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <DriftApp />
        
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component = {Pricing} />
            <Route exact path="/projects" component={FavoritesList} />
            <Route exact path="/projects/:id" component={Detail} />
            <Route  path="/setwork" component={ProjectPost}/> 
            <Route  path='/callback' component={Callback}/>
            <Route component={NoMatch} />

            
          </Switch>

          
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
