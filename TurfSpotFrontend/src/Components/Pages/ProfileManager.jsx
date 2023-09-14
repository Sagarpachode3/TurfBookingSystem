import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import NavbarManager from './NavbarManager';
import ControlledCarousel from '../Frontpages/HomePages/Coursel';

function ProfileManager(props) {

   const {userSignIn} = useSelector(state => state.loginState)

    return (
        <div>
            {userSignIn?(
                <React.Fragment>       
                <NavbarManager/>
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

export default ProfileManager
