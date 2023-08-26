import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar(props) {
    const {userSignIn} = useSelector(state => state.loginState)
    return (
        <div>
            {!userSignIn ? (
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">

                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
        
            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#logout" >LogOut</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/token">About Us</Link>
                            </li>
                
                </ul>
            </nav>
            </React.Fragment>
            ):(<React.Fragment></React.Fragment>)}


        </div>
    )
}

