import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar';

import StudentsDashboardPage from './pages/StudentsDashboardPage/StudentsDashboardPage';
import StudentCoursesPage from './pages/StudentCoursesPage/StudentCoursesPage';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path="/students/:id/courses">
          <StudentCoursesPage />
        </Route>
        <Route path="/students">
          <StudentsDashboardPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
