import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tv from "./components/Tv";
import SinglePost from "./components/SinglePost";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}

        <Switch>
          <Route path="/tv" exact>
            <Tv />
          </Route>
          <Route path="/:slug" exact>
            <SinglePost />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
