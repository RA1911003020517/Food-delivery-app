import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <div>
          <center>
              <h1>
                 Welcome to About page
               </h1>
        <Link to='/' className='Link'>Back to home</Link>
          </center>
    </div>
  )
}

export default About