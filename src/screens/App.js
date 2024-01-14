import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import Portfolio from "./Porfolio/Portfolio";
import ProjectDetailsPage from "./ProjectDetailsPage/ProjectDetailsPage";
import React from "react";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import Testimonails from "./Testimonails/Testimonails";

function App() {
  return (
    <Router>
      <section id="top" className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Jumbotron />
            <About />
            <Services />
            <Skills />
            <Portfolio />
            <Testimonails />
            <Blog />
            <Contact />
          </Route>
          <Router path="/project-page">
            <ProjectDetailsPage />
          </Router>
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
