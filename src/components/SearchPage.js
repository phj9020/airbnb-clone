import React from 'react';
import "components/SearchPage.css"
import { Button } from '@material-ui/core';

const SearchPage = () =>{
    return(
        <div className="searhPage">
            <div className="searchPage__info">
                <p>62 stays · 26 August to 30 August · 2 Guests </p>
                <h1>Stay Nearby</h1>
                <Button variant="outlined">Cacellation Flexibility</Button>
                <Button variant="outlined">Type of Place </Button>
                <Button variant="outlined">Price </Button>
                <Button variant="outlined">More Filters </Button>
            </div> 
        </div>
    )
}

export default SearchPage;