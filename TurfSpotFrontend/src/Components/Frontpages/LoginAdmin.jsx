import React, { useState } from 'react';

import g1 from '../../images/g1.gif';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { AdminLoginAction } from '../../Redux/Action/AdminLoginAction';
function LoginAdmin(props) {

    const history = useHistory();
    const { userSignIn } = useSelector(state => state.loginState);
    const [loginState, setloginState] = useState({})
    const dispatch = useDispatch();

    const loginClickHandler = (e) => {
        console.log(loginState)
        e.preventDefault();
        dispatch(AdminLoginAction(loginState));
    }

    return (

        <div class="container-fluid">
            {userSignIn ? <Redirect to="/profile/admin" /> : ""}
            <div class="row">
                <div class="col-lg-7 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        
                        <h1 class="display-6 text-center text-white mb-4">Admin Login</h1>
                        <form>
                            
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Username" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const username = e.target.value;
                                            setloginState({ ...loginState, ...{ username } })
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
                                <button type="submit" class="btn btn-block shadow-lg mb-4" onClick={loginClickHandler}>
                                    Login
							    </button>
                            </div>
                         
                        </form>
                    </div>
                </div>

                <div class="col-lg-5 form-block px-4">
                    <img src={g1} alt="bg1" style={{borderRadius:20}} width="500px" />
                </div>
                
            </div>
        </div>

    )
}

export default LoginAdmin;