import React from 'react';
import './StudentsDashboardPage.css';

import images from '../../utils/images';

function StudentsDashboardPage(props) {

  const studentImages = images.map(image => (
    <tr key={image.src}>
      <td><img className="students-dashboard-page__student-img" src={image.src} alt="student" /></td>
      <td>{image.name}</td>
      <td>12/16</td>
      <td>68/100</td>
    </tr>
  ));

  return (
    <div className="students-dashboard-page">
      <table>
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
