import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tv from "./components/Tv";
import Radio from "./components/Radio";
import Articles from "./components/Articles";
import SinglePost from "./components/Blog/SinglePost.js";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(45, 110, 29)",
        // main: "#11cb5f",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Navbar />
          <div className="pageContainer">
            <Switch>
              <Route path="/tv" exact>
                <Tv />
              </Route>
              <Route path="/radio" exact>
                <Radio />
              </Route>
              <Route path="/articles" exact>
                <Articles />
              </Route>
              <Route path="/:slug" exact>
                <SinglePost />
              </Route>

              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
