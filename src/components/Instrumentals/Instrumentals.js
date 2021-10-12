import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import BrowseSlogan from "../../components2/Slogan/BrowseSlogan";
import './Instrumentals.css'
import InstrumentalsDisplay from './InstrumentalsDisplay'
import InstrumentalsListingss  from './InstrumentalsListings'



const instrumentalsPerPage = 9;
var arrayForInstrumentals = [];


 const Instrumentals = () => {
     const [instrumentalsToShow, setInstrumentalsToShow] = useState([]);
     const [next, setNext] = useState(9);
  

     const loopWithSlice = (start, end) => {
         const slicedInstrumentals =  InstrumentalsListingss.slice(start, end);
         arrayForInstrumentals = [...arrayForInstrumentals, ...slicedInstrumentals];
         setInstrumentalsToShow(arrayForInstrumentals);
     };


     useEffect(() => {
         loopWithSlice(0, instrumentalsPerPage);
     }, []);

     const handlShowMoreInstrumentals = () => {
         loopWithSlice(next, next + instrumentalsPerPage);
         setNext(next + instrumentalsPerPage);
     };


    return (
        <div>
          <BrowseSlogan />
            <SearchBar className="SearchBar" />
            <InstrumentalsDisplay InstrumentalsToRender={instrumentalsToShow} />
           <div className="load_more_container"> <button className="load_more" onClick={handlShowMoreInstrumentals}>Load More</button></div>
        </div>
    )
}

export default Instrumentals
