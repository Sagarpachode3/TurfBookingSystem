import React, { useEffect, useState } from 'react';
import NavBar from './NavbarManager';

import { useSelector } from 'react-redux';
import NavbarAdmin from './NavbarAdmin';
import ControlledCarousel from '../Frontpages/HomePages/Coursel';

function ProfileAdmin(props) {

   const {userSignIn} = useSelector(state => state.loginState)


    return (
        <div>
         {userSignIn?(
         <React.Fragment>       
        <NavbarAdmin/>
        <div style={{marginTop:40}}>
            <ControlledCarousel/>
            </div>
        </React.Fragment>):(
            <React.Fragment>
                {props.history.push("/login")}
            </React.Fragment>
        )}

        </div>
    )
}

export default ProfileAdmin
