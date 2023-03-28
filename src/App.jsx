import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact.js";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("About");

  return (
    <Router>
      <Header />
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
