import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
      <div>
          <center>
        <h1>Dashboard page</h1>
        <Link to='/' className='Link'>Back to home</Link>
          </center>
    </div>
  )
}

export default Dashboard