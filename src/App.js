import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

/*  Components */
import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"  render={() => <Home />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
