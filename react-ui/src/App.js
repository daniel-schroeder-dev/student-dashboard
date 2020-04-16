import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <NavLink to="/students">Students</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/students">
          Students Page
        </Route>
        <Route path="/courses">
          Courses Page
        </Route>
      </Switch>
    </div>
  );
}

export default App;
