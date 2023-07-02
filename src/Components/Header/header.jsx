import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { useState } from "react"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from "date-fns"

const Header  = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    // const [options, setOptions] = useState({
    //     adult:1,
    //     children: 0,
    //     room: 1
    // });
    const [adultNo, setAdultNo] = useState(1);
    const [childNo, setChildNo] = useState(0);
    const [roomNo, setRoomNo] = useState(1);
    return ( 
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon= {faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon= {faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon= {faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon= {faTaxi}/>
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list1" && <>
                <h1 className="headerTitle">A lifetime of discounts, it's a genius</h1>
                <p className="headerDesc">Get rewarded for your travels unlock instant savings of 10% or more with a free Lamabooking account</p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon= {faBed} className="headerIcon"/>
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon= {faCalendarDays} className="headerIcon"/>
                        <span className="headerSearchText" onClick = {() =>  setOpenDate(!openDate) }>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange 
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection = {false}
                            ranges={date}
                            className="date"
                        />}
                    </div>  
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon= {faPerson} className="headerIcon"/>
                        <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{`${adultNo} adult - ${childNo} children - ${roomNo} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCountBtn" disabled = {adultNo<2} onClick={() => setAdultNo(adultNo-1)}>-</button>
                                    <span className="optionCountNumber">{adultNo}</span>
                                    <button className="optionCountBtn" onClick={() => setAdultNo(adultNo+1)}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCountBtn" disabled = {childNo<1} onClick={() => setChildNo(childNo-1)}>-</button>
                                    <span classNme="optionCountNumber">{childNo}</span>
                                    <button className="optionCountBtn" onClick={() => setChildNo(childNo+1)}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button className="optionCountBtn" dis25abled = {roomNo<2} onClick={() => setRoomNo(roomNo-1)}>-</button>
                                    <span className="optionCountNumber">{roomNo}</span>
                                    <button className="optionCountBtn" onClick={() => setRoomNo(roomNo+1)}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" style={{marginBottom : "0"}}>Search</button>
                    </div>
                </div></> }
            </div>
        </div>
    );
}
 
export default Header;