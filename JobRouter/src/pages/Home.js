import React from 'react'
import main from '../assests/main.svg'

const Home = () => {
  return (
    <div className='main'>
      <div className="left-div">
        <img src={main} />
      </div>
      <div className="right-div">
        <h1>Welcome to JobRouter : <br />Your Gateway to Effortless Job Exploration</h1>
        <p>Are you tired of sifting through countless job listings, feeling overwhelmed by the job search process, or missing out on your dream job because it was buried in the noise? Look no further – JobRouter is here to simplify your job discovery journey.</p>
      </div>   
    </div>
  )
}

export default Home