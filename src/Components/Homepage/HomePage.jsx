import React from 'react'
import "./HomePage.css"
const HomePage = ({setLoginUser}, props) => {
  
  return (
    <div className='Homepageofficial'>
      <div className="homepage">
        <h2>Hello HomePage</h2>
        
        <button className="button" onClick={()=> setLoginUser({})}>Logout</button>
      </div>
    </div>
  )
}

export default HomePage
