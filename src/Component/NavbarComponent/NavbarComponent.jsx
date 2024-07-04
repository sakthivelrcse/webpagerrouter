import React from 'react';
import ServiceComponent from '../serviceComponent/serviceComponent';
import DepartmentComponent from '../departmentComponent/departmentComponent';
import EventComponent from '../eventComponent/eventComponent';
import { Routes, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponents from '../HomeComponents/HomeComponents';
import './NavbarComponent.css'

const NavbarComponent = () => {
  return (
    <React.Fragment>
      <Router>
        <div>
          <nav>
            <ul className='bar'>
              <li className='li'><Link className='link' to='/Home'>Home</Link></li>
              <li className='li'><Link className='link' to='/services'>Services</Link></li>
              <li className='li'><Link className='link' to='/departments'>Departments</Link></li>
              <li className='li'><Link className='link' to='/events'>Events</Link></li>
            </ul>
          </nav>
        </div>

        <div>
          <Routes>
            <Route path='/home' element={<HomeComponents />} />
            <Route path='/services' element={<ServiceComponent />} />
            <Route path='/departments' element={<DepartmentComponent />} />
            <Route path='/events' element={<EventComponent />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
    
  )
}

export default NavbarComponent;
