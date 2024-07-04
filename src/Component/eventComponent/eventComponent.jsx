import React from 'react';
import profile from '../../assets/sdd.jpg';
import './eventComponent.css';

const eventComponent = () => {
  return (
    <React.Fragment>
      <div className='ly'>
        <div className='lay'>
          <h2>Events</h2>
          <img src={profile} alt="" className='imglay'/>
          <p  className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis velit perferendis obcaecati illum reprehenderit sit ipsa, doloribus minus corporis, eos repellendus non deleniti odio rerum quidem! Non itaque in soluta voluptas veritatis obcaecati porro excepturi aperiam quo, quod explicabo eius!</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default eventComponent