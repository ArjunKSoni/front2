import React from 'react'
import { Link } from 'react-router-dom'

const HelpingHand = () => {
  return (
    <div className='df hh_main'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="section-title">Welcome to Helping Desk</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <i className="fas fa-shield-alt box-icon"></i>
              <h2 className="box-title">Insurance</h2>
              <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to=" " className="btn btn-dark s_button round">Search</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <i className="fas fa-car-crash box-icon"></i>
              <h2 className="box-title">Accidents</h2>
              <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link to=" " className="btn btn-dark s_button round">Search</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <i className="fas fa-home box-icon"></i>
              <h2 className="box-title">Property</h2>
              <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link to=" " className="btn btn-dark s_button round">Search</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <i className="fas fa-plane box-icon"></i>
              <h2 className="box-title">Travel</h2>
              <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
              <Link to=" " className="btn btn-dark s_button round">Search</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HelpingHand