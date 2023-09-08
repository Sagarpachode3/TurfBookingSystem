import React, { useEffect, useState } from 'react';
import NavBar from './NavbarManager';

import { useSelector } from 'react-redux';
import NavbarAdmin from './NavbarAdmin';
import NavbarUser from './NavbarUser';
import CardHomePage from '../Frontpages/HomePages/CardHomePage';

function ProfileUser(props) {

   const {userSignIn} = useSelector(state => state.loginState)
    const data=localStorage.getItem("user") ? localStorage.getItem("user") : null


    return (
        <div>
            
        {userSignIn?(
        <React.Fragment>       
        <NavbarUser/>
        <h1 class="display-6 text-left text-white mt-2 ml-5">Welcome...</h1>
        <div>
            <CardHomePage/>
        </div>
        
        </React.Fragment>):(
            <React.Fragment>
                {props.history.push("/login")}
            </React.Fragment>
            
        )}

        </div>
       
    )
}

export default ProfileUser
