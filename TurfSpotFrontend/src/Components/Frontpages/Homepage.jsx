import React from 'react';
import CardHomePage from './HomePages/CardHomePage';
import ControlledCarousel from './HomePages/Coursel'; //

function Homepage() {
    return (
        <div> 
            <div style={{marginTop:40}}>
                <ControlledCarousel/>
            </div>
            <div>
                <CardHomePage/>
            </div>
        </div>
    );
}

export default Homepage;