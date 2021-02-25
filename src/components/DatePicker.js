import React, {useState} from 'react';
import 'components/DatePicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
// import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from "react-router-dom";

const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numPeople, setNumPeople] = useState(2);
    
    const history = useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges)=> {
        // console.log(ranges.selection)
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const onChange = (event)=> {
        const {target : {value}}= event;
        setNumPeople(value);
    }   
    const onSubmit = (event) => {
        event.preventDefault();
        history.push({
            pathname: "/search",
            numOfPeople: numPeople
        });
    }

    return(
        <div className="search">
            <form onSubmit={onSubmit}>
                <h2>Number of guests <PeopleIcon className="search__PeopleIcon" /></h2>
                <input type="number" min={0} value={numPeople}  onChange={onChange}/>
                <input type="submit" value="Search" />
            </form>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
        </div>
    )
}

export default DatePicker;