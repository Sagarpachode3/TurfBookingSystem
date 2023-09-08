import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { LogoutAction } from '../../Redux/Action/LogoutAction'

function NavbarUser() {
    
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
                   

                    <li className="nav-item">
                        <Link className="nav-link" to="/viewturflist">ViewTurfs </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookinghistory">BookingHistory</Link>
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

export default NavbarUser
















