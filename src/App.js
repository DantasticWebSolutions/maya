import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tv from "./components/Portfolios/Tv";
import Radio from "./components/Portfolios/Radio";
import Articles from "./components/Portfolios/Articles";
import SinglePost from "./components/Blog/SinglePost";
import SlideShow from "./components/Blog/SlideShow";
import Post from "./components/Blog/Post";
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
        main: "rgb(45, 110, 29, 0.6)",
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
              <Route path="/blog" exact>
                <SlideShow />
                <Post />
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
