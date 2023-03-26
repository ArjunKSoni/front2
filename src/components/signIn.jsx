import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/authcontext'

const SignIn = () => {
    const { login } = useContext(Authcontext)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleClick = (e) => {
        login(user)
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className='signin df'>
            <form className='form'>
                <img src="leaf.jpg" className='leaf' alt="" />
                <div className="df1">
                    <h1>Login Your Account</h1>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" name='email' onChange={onChange} id="form2Example1" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" name='password' onChange={onChange} id="form2Example2" className="form-control" />
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                    </div>
                </div>
                <div id="signbut">
                    <Link to={"/"}><button id='signbut' type="submit" onClick={handleClick} className="btn btn-dark btn-block mb-4">Sign in</button></Link>
                </div>
                <div className="text-center">
                    <p>Not a member? <Link to="/registerUser">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default SignIn