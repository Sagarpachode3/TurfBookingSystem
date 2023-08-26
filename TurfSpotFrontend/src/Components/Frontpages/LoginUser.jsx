import React, { useState } from 'react';

import g1 from '../../images/g1.gif';
import ForgotPassword from './ForgotPassword'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { UserLoginAction } from '../../Redux/Action/UserLoginAction';

function Loginuser(props) {

    const history = useHistory();
    const { userSignIn } = useSelector(state => state.loginState);
    const [loginState, setloginState] = useState({})
    const dispatch = useDispatch();

    const loginClickHandler = (e) => {
        console.log(loginState)
        e.preventDefault();
        dispatch(UserLoginAction(loginState));
    }

    return (

        <div class="container-fluid">
            {userSignIn ? <Redirect to="/profile/user" /> : ""}
            <div class="row">
                <div class="col-lg-7 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                    <h1 class="display-6 text-center text-white mb-4 mt-4">User Login</h1>
                        <form>

                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="User Email" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const emailId = e.target.value;
                                            setloginState({ ...loginState, ...{ emailId } })
                                        }
                                    }
                                />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="" placeholder="Password" required
                                    onChange={
                                        (e) => {
                                            const password = e.target.value;
                                            setloginState({ ...loginState, ...{ password } })
                                        }
                                    }
                                />
                            </div>

                            <div class="mb-3">
                                <button type="submit" class="btn btn-block shadow-lg" onClick={loginClickHandler}>
                                    Login
							    </button>
                            </div>

                            <div class="text-center">
                                <div className="nav-item">
                                    <Link className="nav-link text-white text-decoration-underline" to="/forgotpassword">Forgot Password</Link>
                                </div>
                            </div>

                            <div class="text-center mb-3">
                                or login with
						    </div>

                            <div class="row mb-3">
                                <div class="col-4">
                                    <a href="" class="btn btn-block btn-social btn-facebook shadow-lg">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </div>

                                <div class="col-4">
                                    <a href="" class="btn btn-block btn-social btn-google shadow-lg">
                                        <i class="fab fa-google"></i>
                                    </a>
                                </div>

                                <div class="col-4">
                                    <a href="" class="btn btn-block btn-social btn-twitter shadow-lg">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="text-center mb-5">
                                Don't have an account?
                            <Link className="nav-link text-white text-decoration-underline" to="/userregister">Register here</Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-5 form-block px-4">
                    <img src={g1} alt="g1" style={{borderRadius:20}} width="500px" />
                </div>

            </div>
        </div>


    )
}

export default Loginuser;