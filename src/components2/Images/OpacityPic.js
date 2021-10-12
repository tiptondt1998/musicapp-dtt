import React from "react";
import OpacityPicture from "./home_studio.jpg";
import "./OpacityPic.css";


function OpacityPic() {
  return (
    <div className="parent">
      <img id="OpacityPic" src={OpacityPicture} alt="OpacityPicture" />
      
      <div className="text">
        <h2> One Stop Shop for buying and Selling beats and artwork."</h2>
        <p>
         
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default OpacityPic;
