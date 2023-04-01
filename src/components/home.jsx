import React, { useState, useContext } from 'react'
import Authcontext from '../context/authcontext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { search } = useContext(Authcontext)
  const [sea, setSearch] = useState("")

  const onchange = (e) => {
    setSearch(e.target.value)
  }
  const handleOnclick = (e) => {
    // e.preventDefault()
    console.log(sea)
    search(sea)
  }

  return (
    <div className='df home'>
      <div className='container h_main df'>
        <form className="d-flex">
          <input className="form-control  s_input" type="search" onChange={onchange} placeholder="Search for Crops..." aria-label="Search" />
          <Link to={"/landingPage"}><button type="submit" onClick={handleOnclick} className="btn btn-dark s_button">Search</button></Link>
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