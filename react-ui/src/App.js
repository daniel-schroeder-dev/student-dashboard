import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.css';

import StudentsDashboardPage from './pages/StudentsDashboardPage/StudentsDashboardPage';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={`/students/:id/courses`}>
          Courses Page
        </Route>
        <Route path="/students">
          <StudentsDashboardPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
