import React, { useState } from 'react'
import CropItem from './cropItem';

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
      <form className='ct'>
        <h1>Crop Prediction</h1>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="number" required name='N' id="form3Example1" className="form-control" />
              <label className="form-label" htmlFor="form3Example1">Nitrogen</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="number" required name='K' id="form3Example2" className="form-control" />
              <label className="form-label" htmlFor="form3Example2">Potassium</label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="number" required name='Phosphorus' id="form3Example1" className="form-control" />
              <label className="form-label" htmlFor="form3Example1">Phosphorus</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="number" required name='PH' id="form3Example2" className="form-control" />
              <label className="form-label" htmlFor="form3Example2">PH</label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input type="text" required name='Address' id="form3Example4" size={50} className="form-control" />
          <label className="form-label" htmlFor="form3Example4">Address</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">Predict</button>
      </form>
      {crop.map((crop) => {
        return <CropItem crops={crop} />
      })}
    </div>

  )
}

export default Predictsoil