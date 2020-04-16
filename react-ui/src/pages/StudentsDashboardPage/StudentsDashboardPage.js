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
      <td className="students-dashboard-page__student-img-wrapper"><img className="students-dashboard-page__student-img" src={image.src} alt="student" /></td>
      <td><p className="students-dashboard-page__student-name" >{image.name}</p></td>
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
          {studentImages}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsDashboardPage;
