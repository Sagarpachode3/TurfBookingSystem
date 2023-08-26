import React, { useEffect } from 'react';
import { useState } from 'react';

import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RegisterAction from '../../Redux/Action/RegisterAction';
import axios from 'axios';
                        
function Registration(props) {

    const [userState, setuserState] = useState({});
    const selector = useSelector(state => state.userSignIn);
    const [doctor, setdoctor] = useState(false);
    const [foster, setfoster] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(userState);
      if(userState.password===userState.confirmPassword)
     {

        localStorage.setItem("registeredUser", JSON.stringify(userState));
        if (doctor) {
            props.history.push("/doctor");
        } else if (foster) {
            props.history.push("/foster");
        } else {
            dispatch(RegisterAction(userState, history));
            
        }
     }
        else{
            alert("Password does not match");    
        }
    }





    return (


        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 form-block px-4">
                    <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        <div className="text-center mb-3 mt-5">
                            <img src={pet_connect} width="350px" />
                        </div>
                        <h4 className="text-center mb-4">
                            Create An Account
					</h4>
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-input">
                                <span><i className="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Full Name" required
                                    onChange={
                                      (e) => {
                                            const name = e.target.value;
                                            setuserState({ ...userState, ...{ name } })
                                        }
                                    }
                                />
                            </div>
                            <div className="form-input">
                                <span><i className="fas fa-laptop-code"></i></span>
                                <input type="email" name="" placeholder="Email" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const email = e.target.value;
                                            setuserState({ ...userState, ...{ email } })
                                        }
                                    }

                                />
                            </div>


                            <div className="form-input">
                                <span><i className="fas fa-tablet-alt"></i></span>
                                <input type="text" name="" placeholder="Mobile No." required
                                    onChange={
                                        (e) => {
                                            const mobileNo = e.target.value;
                                            setuserState({ ...userState, ...{ mobileNo } })
                                        }
                                    }

                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fas fa-tablet-alt"></i></span>
                                <input type="text" name="" placeholder="Alternative Mobile No." required
                                    onChange={
                                        (e) => {
                                            const alernativeMobileNo = e.target.value;
                                            setuserState({ ...userState, ...{ alernativeMobileNo } })
                                        }
                                    }

                                />
                            </div>


                            <div className="form-input">
                                <span><i className="far fa-address-book"></i></span>
                                <input type="text" name="" placeholder="Address" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const address = e.target.value;
                                            setuserState({ ...userState, ...{ address } })
                                        }
                                    }

                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fas fa-city"></i></span>
                                <input type="text" name="" placeholder="City" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const city = e.target.value;
                                            setuserState({ ...userState, ...{ city } })
                                        }
                                    }
                                />
                            </div>

                            <div className="form-input">
                                <span><i className="fas fa-city"></i></span>
                                <input type="text" name="" placeholder="State" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const state = e.target.value;
                                            setuserState({ ...userState, ...{ state } })
                                        }
                                    }
                                />
                            </div>

                            <div className="form-input">
                                <span><i className=" fas fa-book-reader"></i></span>
                                <input type="text" name="" placeholder="Pincode" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const pincode = e.target.value;
                                            setuserState({ ...userState, ...{ pincode } })
                                        }
                                    }
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

                            <div className="form-input">
                                <span><i className="fa fa-key"></i></span>
                                <input type="password" name="" placeholder=" Confirm-Password" required
                                    onChange={
                                        (e) => {
                                            const confirmPassword = e.target.value;
                                            setuserState({ ...userState, ...{ confirmPassword } })
                                        }
                                    }
                                />
                            </div>
                            <div class="text-left ">
                             
                                <h3> What is your Favorite Food? </h3>
						
                            </div>
                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="answer" placeholder="Answer" required 
                                onChange={
                                    (e) => {
                                        const answer = e.target.value;
                                        setuserState({ ...userState, ...{ answer } })
                                    }
                                }
                                />
                            </div>
                            <div className="input">
                                <span><i className="fas fa-user-friends "></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <label>Male<input type="radio" name="gender" value="male" className="left-align"
                                    onChange={
                                        (e) => {
                                            const gender = e.target.value;
                                            setuserState({ ...userState, ...{ gender } })
                                        }
                                    }
                                /></label>
                                <label>Female<input type="radio" name="gender" value="female"
                                    onChange={
                                        (e) => {
                                            const gender = e.target.value;
                                            setuserState({ ...userState, ...{ gender } })
                                        }
                                    }
                                /></label>
                            </div>

                            <div className="input">
                                <span><i className="fas fa-user-friends "></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <label>User<input type="radio" name="optradio" className="left-align" value="user"
                                    onChange={
                                        (e) => {
                                            const profession = e.target.value;
                                            setuserState({ ...userState, ...{ profession } })
                                            //setuser(true);
                                        }
                                    } />
                                </label>
                                <label>Doctor<input type="radio" name="optradio" value="doctor"
                                    onChange={
                                        (e) => {
                                            const profession = e.target.value;
                                            setuserState({ ...userState, ...{ profession } })
                                            setdoctor(true);
                                        }
                                    } />
                                </label>
                                <label>Foster<input type="radio" name="optradio" value="foster"
                                    onChange={
                                        (e) => {
                                            const profession = e.target.value;
                                            setuserState({ ...userState, ...{ profession } })
                                            setfoster(true);
                                        }
                                    } />
                                </label>
                            </div>


                            <div className="mb-3 d-flex align-items-center">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cb1" />
                                    <label className="custom-control-label" for="cb1">I agree all terms & conditions</label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-block" /* onClick={onChangeHandler} */>
                                    Register
							</button>
                            </div>

                            <div className="text-center mb-5">
                                Already have an account
							    <div className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default Registration;