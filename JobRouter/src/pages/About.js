import React, { useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

const About = () => {
const [user, setUser] = useState('mario')
const [searchParams] = useSearchParams()
const name = searchParams.get('name')

if(!user) {
  return <Navigate to="/" replace={true} />
}
  return (
    <div className='about'>
      {name && <p>Hi, {name}!</p>}
      
        <h1>About Us</h1>
        <p>At JobRouter, we are on a mission to redefine the job discovery experience for professionals everywhere. We understand that finding the right job can be a daunting task, filled with uncertainty and endless searching. That's why we've created a platform that simplifies and streamlines the process, putting you in control of your career path.</p>
        <h2>Our Vision</h2>
        <p>Our vision is to empower individuals like you to take charge of your career journey. Whether you're a recent graduate, a seasoned professional looking for a change, or someone reentering the job market, JobRouter is designed to cater to your unique needs and aspirations.</p>
        <button onClick={()=> setUser(null)}>Logout</button>
    </div>
  )
}

export default About