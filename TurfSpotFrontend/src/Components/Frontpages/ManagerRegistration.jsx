import React, { useEffect } from 'react';
import { useState } from 'react';

import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RegisterAction2 from '../../Redux/Action/RegisterAction2';
import axios from 'axios';
                        
function ManagerRegistration(props) {

    const [managerState, setmanagerState] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(managerState);
        localStorage.setItem("manager", JSON.stringify(managerState));
        dispatch(RegisterAction2(managerState, history));
        alert("Manager registered successfully !");
            
    }
     
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 form-block px-4">
                    <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">

                    <h1 class="display-6 text-center text-white mb-4 mt-4">Create Manager Account</h1>

                        <form onSubmit={onSubmitHandler}>
                            
                            <div className="form-input">
                                <span><i className="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="First Name" required
                                    onChange={
                                      (e) => {
                                            const firstName = e.target.value;
                                            setmanagerState({ ...managerState, ...{ firstName } })
                                        }
                                    }
                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Last Name" required
                                    onChange={
                                      (e) => {
                                            const lastName = e.target.value;
                                            setmanagerState({ ...managerState, ...{ lastName } })
                                        }
                                    }
                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fas fa-laptop-code"></i></span>
                                <input type="email" name="" placeholder="Email" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const emailId = e.target.value;
                                            setmanagerState({ ...managerState, ...{ emailId } })
                                        }
                                    }
                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fas fa-tablet-alt"></i></span>
                                <input type="text" name="" placeholder="Mobile No." required maxLength="10"
                                    onChange={
                                        (e) => {
                                            const contactNo = e.target.value;
                                            setmanagerState({ ...managerState, ...{ contactNo } })
                                        }
                                    }
                                    onMouseOut={(e) => {
                                        const contactNo = e.target.value;
                                        if (!(contactNo.length == 10)) {
                                            alert("Contact number must be of 10 digits!");
                                        }
                                    }}
                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fa fa-key"></i></span>
                                <input type="password" name="" placeholder="Password" required
                                    onChange={
                                        (e) => {
                                            const password = e.target.value;
                                            setmanagerState({ ...managerState, ...{ password } })
                                        }
                                    }
                                />
                            </div>                         
                                  
                            <div className="mb-3 d-flex align-items-center">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cb1" />
                                    <label className="custom-control-label text-white" for="cb1">I agree all terms & conditions</label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-block shadow-lg" /* onClick={onChangeHandler} */>
                                    Register
							    </button>
                            </div>

                            <div className="text-center mb-5">
                                Already have an account
							    <div className="nav-item">
                                <Link className="nav-link text-white text-decoration-underline" to="/loginmanager">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default ManagerRegistration;