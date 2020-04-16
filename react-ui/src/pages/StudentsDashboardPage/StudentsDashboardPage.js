import React from 'react';
import './StudentsDashboardPage.css';

function StudentsDashboardPage(props) {
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
          <tr>
            <td><img /></td>
            <td>Student Name</td>
            <td>12/16</td>
            <td>68/100</td>
          </tr>
          <tr>
            <td>Student Name</td>
            <td>12/16</td>
            <td>68/100</td>
          </tr>
          <tr>
            <td>Student Name</td>
            <td>12/16</td>
            <td>68/100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentsDashboardPage;
