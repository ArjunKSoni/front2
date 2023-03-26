import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='signin df'>
            <form className='form'>
                <img src="leaf.jpg" className='leaf' alt="" />
                <div className="df1">
                    <h1>Login Your Account</h1>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Email address</label>
                    <input type="email" id="form2Example1" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" />
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                    </div>
                </div>
                <div id="signbut">
                    <button id='signbut' type="submit" className="btn btn-dark btn-block mb-4">Sign in</button>
                </div>
                <div className="text-center">
                    <p>Not a member? <Link to="/registerUser">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default SignIn