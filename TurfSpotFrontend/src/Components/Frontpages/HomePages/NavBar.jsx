import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const { userSignIn } = useSelector(state => state.loginState)

    return (
        <div>
            {!userSignIn ? (
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item dropdown bg-dark">
                                <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Register
                                </a>
                                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <Link className="dropdown-item text-white" to="/userregister">User</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item text-white" to="/managerregister">Manager</Link>
                                    </li>
                                </div>
                            </li>
                          
                            <li className="nav-item dropdown bg-dark">
                                <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Login
                                </a>
                                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <Link className="dropdown-item text-white" to="/loginuser">User</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item text-white" to="/loginmanager">Manager</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item text-white" to="/loginadmin">Admin</Link>
                                    </li>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/feedback">Feedback</Link>
                            </li>
                            
                        </ul>

                        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul class="navbar-nav ml-auto">                                                    
                                <li class="nav-item">
                                    <a class="nav-link" href="/" style={{ fontSize: 30, fontFamily: '-moz-initial' }}><b>THE DUGOUT</b></a>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </React.Fragment>) : (<React.Fragment></React.Fragment>)}
        </div>
    )
}
