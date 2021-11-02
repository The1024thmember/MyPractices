import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import myTheme from './Themes/Theme';
//components
import { AddComments } from './Components/AddComments';
import { TestTheme } from './Components/Testtheme';
import { SignUp } from './Components/SignUp';

function App() {
  return (
      <div className="App">
      <ThemeProvider theme={myTheme}>
      <Router >

        <Switch>
          <Route exact path="/useref">
            <AddComments />
          </Route>
          <Route exact path="/testTheme">
            <TestTheme />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
        </Switch>

      </Router>
      </ThemeProvider>
      </div>
  );
}

export default App;
