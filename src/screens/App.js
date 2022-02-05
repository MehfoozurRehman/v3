import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Testimonails from "./Testimonails/Testimonails";
import Services from "./Services/Services";
import Portfolio from "./Porfolio/Portfolio";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Jumbotron from "./Jumbotron/Jumbotron";
import ProjectDetailsPage from "./ProjectDetailsPage/ProjectDetailsPage";

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
