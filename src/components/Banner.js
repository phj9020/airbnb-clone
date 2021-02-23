import React from 'react';
import 'components/Banner.css';
import { Button } from '@material-ui/core';

const Banner = ()=>{
    return(
        <div className="banner">
            <div className="banner__search">
                <Button className="banner__searchBtn" variant="outlined">Search Dates</Button>
            </div>
            <div className="banner__info">
                <h2>Go</h2>
                <h2>Near</h2>
                <Button className="banner__infoBtn" variant="outlined">Explore Nearby Stays</Button>
            </div>
        </div>
    )
}

export default Banner;