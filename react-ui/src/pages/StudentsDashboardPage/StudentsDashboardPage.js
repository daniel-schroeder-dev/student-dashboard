import React from 'react';
import { useHistory } from 'react-router-dom';

import './StudentsDashboardPage.css';

import images from '../../utils/images';

function StudentsDashboardPage(props) {

  const history = useHistory();

  const randomAttempted = () => Math.floor(Math.random() * 16 + 1);
  const randomScore = () => Math.floor(Math.random() * 100 + 1);

  const handleClick = id => {
    history.push(`/students/${id}/courses`);
  };

  const studentImages = images.map(image => (
    <tr className="students-dashboard-page__student-info-row" onClick={() => handleClick(image.id)} key={image.src}>
      <td><img className="students-dashboard-page__student-img" src={image.src} alt="student" /></td>
      <td>{image.name}</td>
      <td>{randomAttempted()}/16</td>
      <td>{randomScore()}/100</td>
    </tr>
  ));

  return (
    <div className="students-dashboard-page">
      <table className="students-dashboard-page__student-table">
        <thead>
          <tr>
            <th></th>
            <th>Student</th>
            <th>Attempted</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {studentImages}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsDashboardPage;
