import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/authcontext'


const Navbar = () => {
    const { token, setToken, user } = useContext(Authcontext)
    const handleOnclick = (e) => {
        setToken("")
    }
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Farm Expert</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active`} aria-current="page" to="/store">Store</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tools
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item " to="/disease">Plant Diseases</Link></li>
                                <li><Link className="dropdown-item " to="/predsoil">Predict Soil</Link></li>
                                <li><Link className="dropdown-item " to="/predcrop">Predict Crop</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item " to="/helpingHand">Helping Hands</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {!token && <>
                        <Link type="button" to="/registerUser" className="btn btn-secondary ml">Signup</Link>
                        <Link type="button" to="/sign-in" className="btn btn-secondary">Login</Link>
                    </>}
                    {token && <>
                        <Link type="button" className="btn btn-secondary ml">{user}</Link>
                        <Link type="button" to="/" onClick={handleOnclick} className="btn btn-secondary ml">logout</Link></>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar