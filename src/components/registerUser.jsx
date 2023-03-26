import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/authcontext'

const RegisterUser = () => {
  const { register } = useContext(Authcontext)
  const [user, setUser] = useState({
    user: "",
    email: "",
    password: "",
    mobile: ""
  })
  const handleClick = (e) => {
    register(user)
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <div className='register'>
      <div class="box">
        <div class="image"><img src="leaf.jpg" className='leaf2' alt="" />
          <h1>Sign-Up</h1></div>
        <form>
          <div class="mb-3">
            <label htmlFor="inputName" class="form-label">Name</label>
            <input type="text" name='user' onChange={onChange} required class="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your Name" />
          </div>

          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" name='email' onChange={onChange} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputNumber" class="form-label">Phone Number</label>
            <input type="number" name='mobile' onChange={onChange} required class="form-control" id="exampleInputnumbers" />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" name='password' onChange={onChange} required class="form-control" id="exampleInputPassword1" />
            <div id="passwordHelp" class="form-text">Use a strong Password</div>
          </div>
          <div id="signbut">
            <Link to={"/"}><button id='signbut' type="submit" onClick={handleClick} className="btn btn-dark btn-block mb-4">Register</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser