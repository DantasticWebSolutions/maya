import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogoAnimation from "./components/LogoAnimation";

import Navbar from "./components/Navbar";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Home = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Home")
  );
});
const Tv = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Portfolios/Tv")
  );
});
const Radio = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Portfolios/Radio")
  );
});
const Articles = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Portfolios/Articles")
  );
});
const SinglePost = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Blog/SinglePost")
  );
});

const SlideShow = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Blog/SlideShow")
  );
});
const Post = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Blog/Post")
  );
});

const Footer = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
    import("./components/Footer")
  );
});

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
      <Suspense fallback={<LogoAnimation />}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
