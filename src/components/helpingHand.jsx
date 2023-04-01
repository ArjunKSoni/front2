import React from 'react'
import { Link } from 'react-router-dom'

const HelpingHand = () => {
  return (
    <div className='hh_main'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="section-title">Welcome to Helping Desk</h1>
          </div>
        </div>
        <div className="row df2">
          <div className="col-md-6">
            <div className="box df">
              <i className="fas fa-shield-alt box-icon"></i>
              <h2 className="box-title">Loans and Credits</h2>
              <p className="box-text"></p>
              <Link to="/loans " className="btn btn-dark  round">Search</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box df">
              <i className="fas fa-car-crash box-icon"></i>
              <h2 className="box-title">Government Help</h2>
              <p className="box-text">
              </p>
              <Link to="/govern" className="btn btn-dark  round">Search</Link>
            </div>
          </div>
        </div>
        <div className="row df2">
          <div className="col-md-6">
            <div className="box df">
              <i className="fas fa-home boxbox-icon"></i>
              <h2 className="box-title">Plant Prevention</h2>
              <p className="box-text">
              </p>
              <Link to=" " className="btn btn-dark  round">Search</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box df">
              <i className="fas fa-plane box-icon"></i>
              <h2 className="box-title">Tutorial</h2>
              <p className="box-text">
              </p>
              <Link to=" " className="btn btn-dark  round">Search</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HelpingHand