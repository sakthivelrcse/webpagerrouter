import React from 'react';
import './departmentComponent.css'

const DepartmentComponent = () => {
  return (
    <React.Fragment>
      <div className='depart'>
        <h2>Department</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Head of Department</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer Science</td>
              <td>Dr. John Doe</td>
              <td>Building A, Room 101</td>
            </tr>
            <tr>
              <td>Electrical Engineering</td>
              <td>Prof. Jane Smith</td>
              <td>Building B, Room 202</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>Dr. Michael Brown</td>
              <td>Building C, Room 303</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default DepartmentComponent;
