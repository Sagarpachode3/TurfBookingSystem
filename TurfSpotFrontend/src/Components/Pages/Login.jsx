
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { LoginAuthAction } from '../../Redux/Action/AuthAction'

export default function Login(props) {

    const history = useHistory();
    const userSignIn = useSelector(state => state.userSignIn);
    const [loginState, setloginState] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        if (userSignIn)
            window.location.href("/home/profile");
            

    }, [userSignIn])
    const addClickHandeler = async () => {
        console.log(loginState);
        dispatch(LoginAuthAction(loginState, history));

    }


    return (
        <div className="w-50 mt-4 m-auto p-5 shadow-lg bg-white ">

            <h3>Login</h3>
            <hr />

            <div className="form-group row">
                <label htmlFor="email" className="col-2 col-form-label">email</label>
                <div className="col-10">
                    <input id="email" type="text" placeholder="product price" className="form-control"

                        onChange={
                            (e) => {
                                const email = e.target.value;
                                setloginState({ ...loginState, ...{ email } })
                            }
                        } />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-2 col-form-label">password</label>
                <div className="col-10">
                    <input id="password" type="password" placeholder="password" className="form-control"
                        onChange={
                            (e) => {
                                const password = e.target.value;
                                setloginState({ ...loginState, ...{ password } })
                            }
                        } />
                </div>
            </div>

            <button className="btn btn-info btn-block" onClick={addClickHandeler}>Submit</button>


        </div>
    )
}


