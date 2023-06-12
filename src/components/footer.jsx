import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>

      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" placeholder='Email address' className="form-control" />
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="agroexperttt123@gmail.com" role="button"><i className="fab fa-google"></i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/agroexpert_31?igshid=ZDdkNTZiNTM=" role="button"><i className="fab fa-instagram"></i></a>
          </section>
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
              repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
              eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
          </section>
          <section className="">
            <div className="row">
            </div>

          </section>

        </div>

        <div className="text-center p-3">
          © 2023 Copyright:
          <Link className="text-white" to="/">Farm Expert</Link>
        </div>
      </footer>

    </div>
  )
}

export default Footer
