import React from 'react'

const RegisterUser = () => {
  return (
    <div className='register'>
      <div class="box">
        <div class="image"><img src="leaf.jpg" alt="" class="leaf" />
          <h1>Sign-In</h1></div>
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your Name" />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputNumber" class="form-label">Phone Number</label>
            <input type="number" class="form-control" id="exampleInputnumbers" />
          </div>
          <div class="mb-3">
            <label for="exampleInputddress1" class="form-label">Address (Optional)</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
            <div id="passwordHelp" class="form-text">Use a strong Password</div>
          </div>
          <div class="butt">
            <button type="submit" class="botton">Sign-In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser