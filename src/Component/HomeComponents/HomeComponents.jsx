import React from 'react';
import profile from '../../assets/sdd.jpg';
import './HomeComponents.css';

const HomeComponents = () => {
  return (
    <div className="container">
      <img src={profile} alt="Profile" className="profile" />
      <div className="text-overlay">Saveetha Engineering College Thandalam Chennai</div>
    </div>
  );
}

export default HomeComponents;
