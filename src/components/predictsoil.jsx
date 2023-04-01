import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Authcontext from '../context/authcontext';

const Predictsoil = () => {
  const { searchsoil } = useContext(Authcontext)
  const [user, setUser] = useState({
    N: "",
    P: "",
    K: "",
    ph: " ",
    temperature: "",
    humidity: "",
    rainfall: "",
    label: ""
  })
  const handleClick = (e) => {
    searchsoil(user)

  }

  const onChange = (e) => {
    user[e.target.name] = e.target.value;
    setUser(user)
  }



  return (
    <div className='predict_main'>
      {/* create form  */}
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Predict Soil</h3>
            <p className="blue-text">Just answer a few questions<br /> so that we can predict the right soil conditions for you.</p>
            <div className="card">
              <form className="form-card">
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nitrogen<span className="text-danger"> *</span></label> <input onChange={onChange} type="number" required name="N" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phosphorus<span className="text-danger"> *</span></label> <input onChange={onChange} type="number" required name="P" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Potassiam<span className="text-danger"> *</span></label> <input type="number" onChange={onChange} required name="K" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Temperature<span className="text-danger"> *</span></label> <input type="number" onChange={onChange} required name="temperature" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Humidity<span className="text-danger"> *</span></label> <input onChange={onChange} type="number" required name="humidity" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Rainfall<span className="text-danger"> *</span></label> <input type="number" onChange={onChange} required name="rainfall" /> </div>
                </div>
                <div className="row justify-content-between text-left ">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Ph<span className="text-danger"> *</span></label> <input type="number" onChange={onChange} required name="ph" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Label<span className="text-danger"> *</span></label> <input type="text" onChange={onChange} required name="label" /> </div>
                </div>
                <div className="df soilbut">
                  <Link to={"/landingPage"}><div className="form-group col-sm-6"> <button type="submit" onClick={handleClick} className="btn-block btn-primary but9">Predict</button> </div></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </div >

  )
}

export default Predictsoil