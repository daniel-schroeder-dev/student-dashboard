import React from 'react';
import './HomePage.css';

function HomePage(props) {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Student Dashboard Demo</h1>
      <p className="home-page__description">This is a simple demo for a Student Dashboard application. It's made with React, React Router, and Express.</p> 
      <p className="home-page__description">Click 'Students' to see a list of students, and click on a student to see the courses associated with that student.</p>
    </div>
  );
}

export default HomePage;
