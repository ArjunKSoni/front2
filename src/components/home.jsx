import React from 'react'


const Home = () => {

  return (
    <div className='df home'>
      <div className='container h_main df'>
        <form className="d-flex">
          <input className="form-control  s_input" type="search" placeholder="Search for Crops..." aria-label="Search" />
          <button type="submit" className="btn btn-dark s_button">Search</button>
        </form>
      </div>
      <div className='hr'></div>
      <div className='df'>
        <h1>Services</h1>
        
      </div>
    </div>

  )
}

export default Home