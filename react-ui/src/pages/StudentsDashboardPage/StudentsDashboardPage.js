import React from 'react';
import './StudentsDashboardPage.css';

import images from '../../utils/images';

function StudentsDashboardPage(props) {

  const studentImages = images.map(image => (
    <tr key={image}>
      <td className="students-dashboard-page__student-img"><img src={image} alt="student" /></td>
      <td>Student Name</td>
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
