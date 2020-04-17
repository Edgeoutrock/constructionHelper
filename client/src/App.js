import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import DriftApp from "./components/DriftApp/driftapp.js";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <DriftApp />
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Home} />
            <Route exact path="/projects" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
