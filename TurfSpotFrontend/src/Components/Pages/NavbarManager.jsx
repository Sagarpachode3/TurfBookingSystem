import React from 'react'
import {Link} from 'react-router-dom';
import { LogoutAction } from '../../Redux/Action/LogoutAction'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


function NavbarManager() {
    
    const dispatch = useDispatch();
    const history = useHistory()
    const Logout = () => {
      dispatch(LogoutAction());
         localStorage.removeItem("user");
      history.push("/");
    }
    
    return (
        <div>
            
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                  
                    <li className="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Turf
                        </a>
                        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                                <Link className="dropdown-item text-white" to="/addturf">Add Turf</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="dropdown-item text-white" to="/viewturf">Turf List</Link>
                            </li>
                        </div>

                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/bookinghistory">View Booking</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link"   onClick={Logout}>Logout </Link>
                    </li>
                </ul>
            </nav>
            </React.Fragment>
        </div>
    )
}

export default NavbarManager

