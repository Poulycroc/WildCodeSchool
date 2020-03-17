import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "../includes/NavBar";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

export default () => {
  return (
    <BrowserRouter>
      <div className="default-container">
        <NavBar />
        <main className="content">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </main>
      </div>
    </BrowserRouter>
  );
};
