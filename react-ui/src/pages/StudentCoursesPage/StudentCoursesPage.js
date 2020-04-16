import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import './StudentCoursesPage.css';

import students from '../../utils/students';

function StudentCoursesPage(props) {

  const match = useRouteMatch();

  console.log(match);

  return (
    <div className="student-courses-page">
      StudentCoursesPage
    </div>
  );
}

export default StudentCoursesPage;
