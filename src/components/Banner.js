import React, {useState} from 'react';
import 'components/Banner.css';
import { Button } from '@material-ui/core';
import DatePicker from 'components/DatePicker';


const Banner = ()=>{
    const [showSearch, SetShowSearch] = useState(false); 
    console.log(showSearch)
    const onClick= ()=> {
        SetShowSearch(prev => !prev);
    }

    return(
        <div className="banner">
            <div className="banner__search">
                <Button onClick={onClick} className="banner__searchBtn" variant="outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
                {showSearch && <DatePicker />}
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