import React from 'react'

const RegisterUser = () => {
  return (
    <div className='register'>
      <div class="box">
        <div class="image"><img src="leaf.jpg" className='leaf2' alt="" />
          <h1>Sign-Up</h1></div>
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" required class="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your Name" />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputNumber" class="form-label">Phone Number</label>
            <input type="number" required class="form-control" id="exampleInputnumbers" />
          </div>
          <div class="mb-3">
            <label for="exampleInputddress1" class="form-label">Address (Optional)</label>
            <input type="text" required class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" required class="form-control" id="exampleInputPassword1" />
            <div id="passwordHelp" class="form-text">Use a strong Password</div>
          </div>
          <div id="signbut">
            <button id='signbut' type="submit" className="btn btn-dark btn-block mb-4">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser