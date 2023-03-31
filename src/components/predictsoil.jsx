import React, { useState } from 'react'
import CropItem from './cropItem';
import { Link } from 'react-router-dom';

const Predictsoil = () => {
  let li = []
  const [crop, setData] = useState(li);
  try {
    (async () => {
      const apicall = await fetch(`...`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify({}),
      })
      let data = await apicall.json()
      data = Array.from(data)
      setData(li.concat(data))
    })();
  } catch (error) {

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
              <form className="form-card" onsubmit="event.preventDefault()">
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nitrogen<span className="text-danger"> *</span></label> <input type="number" id="fname" name="N" placeholder="Enter your first name" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phosphorus<span className="text-danger"> *</span></label> <input type="number" id="lname" name="p" placeholder="Enter your last name" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Potassiam<span className="text-danger"> *</span></label> <input type="number" id="email" name="K" placeholder="" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Temperature<span className="text-danger"> *</span></label> <input type="number" id="mob" name="temperature" placeholder="" /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Humidity<span className="text-danger"> *</span></label> <input type="number" id="job" name="humidity" placeholder="" /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Rainfall<span className="text-danger"> *</span></label> <input type="number" id="mob" name="rainfall" placeholder="" /> </div>
                </div>
                <div className="row justify-content-between text-left df">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Ph<span className="text-danger"> *</span></label> <input type="number" id="job" name="ph" placeholder="" /> </div>
                </div>
                <div className="df soilbut">
                  <Link to={""}><div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">Predict</button> </div></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {crop.map((crop) => {
        return <CropItem crops={crop} />
      })}
    </div>

  )
}

export default Predictsoil