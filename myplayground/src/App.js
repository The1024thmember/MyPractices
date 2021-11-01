import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { AddComments } from './Components/AddComments';
function App() {
  return (
    <div className="App">
    <Router >
      <Switch>
        <Route exact path="/useref">
          <AddComments />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
