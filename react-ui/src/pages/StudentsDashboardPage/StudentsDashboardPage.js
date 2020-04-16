import React from 'react';
import { useHistory } from 'react-router-dom';

import './StudentsDashboardPage.css';

import students from '../../utils/students';

function StudentsDashboardPage(props) {

  const history = useHistory();

  const randomAttempted = () => Math.floor(Math.random() * 16 + 1);
  const randomScore = () => Math.floor(Math.random() * 100 + 1);

  const handleClick = id => {
    history.push(`/students/${id}/courses`);
  };

  const studentsInfo = students.map(student => (
    <tr className="students-dashboard-page__student-info-row" onClick={() => handleClick(student.id)} key={student.src}>
      <td className="students-dashboard-page__student-img-wrapper"><img className="students-dashboard-page__student-img" src={student.src} alt="student" /></td>
      <td><p className="students-dashboard-page__student-name" >{student.name}</p></td>
      <td><p className="students-dashboard-page__attempted">{randomAttempted()}/16</p></td>
      <td><p>{randomScore()}/100</p></td>
    </tr>
  ));

  return (
    <div className="students-dashboard-page">
      <table className="students-dashboard-page__student-table">
        <thead>
          <tr>
            <th colSpan="2">Student</th>
            <th>Attempted</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {studentsInfo}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsDashboardPage;
