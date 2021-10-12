import React from 'react';
import './Instrumentals.css'
import ReactAudioPlayer from 'react-audio-player';
import Inst from '../Instrumentals/instrumentalsData/9waves.mp3'

const InstrumentalsDisplay = ({ InstrumentalsToRender }) => {
  
    return (
        <div className="instrumentals_display_container">
        <ul className="instrumentals_card">
        {InstrumentalsToRender.map((InstrumentalsListingss, title) => (
          <div className="card">
            <li className="insta_card" key={title}>
              
               <p className="title"><strong>Title:</strong> {InstrumentalsListingss.title}</p>
               <p className="title"><strong>Auther:</strong>  {InstrumentalsListingss.auther}</p>
               <ReactAudioPlayer
  src={Inst}
  
  controls
/>
            
            
            
            </li>
          </div>
        ))}
      </ul>
      </div>
    )

  
};
export default InstrumentalsDisplay;