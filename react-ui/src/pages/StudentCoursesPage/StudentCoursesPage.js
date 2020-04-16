import React from 'react';
import { useParams } from 'react-router-dom';

import './StudentCoursesPage.css';

import students from '../../utils/students';
import teachers from '../../utils/teachers';

function StudentCoursesPage(props) {

  const { id } = useParams();
  const student = students[+id - 1];

  const courses = teachers.map(teacher => (
    <div key={teacher.id} className="student-courses-page__course-card">
      <div>
          <h2 className="student-courses-page__course-card__course">{teacher.course}</h2>
          <p className="student-courses-page__course-card__description">{teacher.description}</p>
      </div>
      <div className="student-courses-page__course-card__instructor-info-wrapper" >
        <img className="student-courses-page__course-card__img" src={teacher.src} alt="teacher" />
        <p className="student-courses-page__course-card__name" >{teacher.name}</p>
      </div>
    </div>    
  ));

  return (
    <div className="student-courses-page">
      <div className="student-courses-page__student-info" >
        <p className="student-courses-page__student-info__name">{student.name}</p>
        <img className="student-courses-page__student-info__img" src={student.src} alt="student" />
      </div>
      <div className="student-courses-page__courses-wrapper" >
        {courses}
      </div>
    </div>
  );
}

export default StudentCoursesPage;
