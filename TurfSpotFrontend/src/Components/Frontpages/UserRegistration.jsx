import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RegisterAction from '../../Redux/Action/RegisterAction';
import axios from 'axios';

function UserRegistration(props) {

    const [userState, setuserState] = useState({});
    const selector = useSelector(state => state.userSignIn);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(userState);
        localStorage.setItem("registeredUser", JSON.stringify(userState));
        dispatch(RegisterAction(userState, history));
        alert("User registered successfully !");
    }

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 form-block px-4">
                    <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">

                        <h1 class="display-6 text-center text-white mb-4 mt-4">Create User Account</h1>
                        <form onSubmit={onSubmitHandler}>
                            
                            <div className="form-input">
                                <span><i className="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="First Name" required
                                    onChange={
                                        (e) => {
                                            const firstName = e.target.value;
                                            setuserState({ ...userState, ...{ firstName } })
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
                                            setuserState({ ...userState, ...{ lastName } })
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
                                            setuserState({ ...userState, ...{ emailId } })
                                        }
                                    }
                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fas fa-tablet-alt"></i></span>
                                <input type="text" name="" placeholder="Mobile No." 
                                maxLength="10"    required
                                    onChange={
                                        (e) => {
                                            const contactNo = e.target.value;
                                            setuserState({ ...userState, ...{ contactNo } })
                                        }
                                    }
                                    onClick={(e) => {
                                        const contactNo = e.target.value;
                                        if (!(contactNo.length == 10)) {
                                            alert("Contact number must be of 10 digits");
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
                                            setuserState({ ...userState, ...{ password } })
                                        }
                                    }
                                />
                            </div>

                            <div className="mb-3 d-flex align-items-center">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cb1" required />
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
                                    <Link className="nav-link text-white text-decoration-underline" to="/loginuser">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default UserRegistration;
