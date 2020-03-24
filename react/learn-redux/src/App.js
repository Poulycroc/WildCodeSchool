import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PostAll from './components/Posts/All'
import PostShow from './components/Posts/Show'

function App() {
  return (
    <BrowserRouter>
      <div id="app-viewport">
        <Route exact path="/" component={PostAll} />
        <Route exact path="/:post_id" component={PostShow} />
      </div>
    </BrowserRouter>
  );
}

export default App;
