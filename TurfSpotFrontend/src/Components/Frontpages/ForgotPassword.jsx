import React, { useState } from 'react';

import axios from 'axios';

import { useHistory } from 'react-router';

function Firstpage(props) {
    
    const history=useHistory();
    const [email, setemail] = useState("");
    const [answer, setanswer] = useState("");
    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");


    const onSubmitHandler= async(e)=>{
        e.preventDefault();
        if(password===conpassword){
            console.log("here");
            console.log({email,password});
            const res = await axios.put(`http://localhost:8080/users/resetpassword?email=${email}&password=${password}`)
            alert("password changed successfully!")
            props.history.push("/loginuser");
            console.log(res)
        }else {
            alert("password should match!")
        }
    }

 
    return (

        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-12 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
  
                    <h1 class="display-6 text-center text-white mb-4 mt-4">Reset Password</h1>
                        <form>

                            <div class="text-left ">
                                <h5 class="text-white"> What is your Favorite Sports? </h5>					
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="email" name="email" placeholder="email" required 
                                onChange={e => setemail(e.target.value)}
                                />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="answer" placeholder="Answer" required 
                                onChange={e => setanswer(e.target.value)}
                                />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="password" placeholder="Password" required 
                                onChange={e => setpassword(e.target.value)}
                                />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="conpassword" placeholder=" Confirm Password" required 
                                onChange={e => setconpassword(e.target.value)}
                                />
                            </div>

                            <div class="mb-5">
                                <button type="submit" class="btn btn-block" onClick={onSubmitHandler}>
                                   Reset Password
							    </button>
                            </div>

                        </form>
                    </div>
                </div>

               
            </div>
        </div>


    )
}

export default Firstpage;