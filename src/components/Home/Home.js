import React from "react";
import "./Home.css";
import { BrowserRouter as Link } from "react-router-dom";
import Slogan from "../../components2/Slogan/Slogan";
import Fee from "../../components2/Fee/Fee";
import No from "../../components2/No/No";
import HomeButtonsDisplay from "../../components2/HomeButtonsDisplay/HomeButtonsDisplay";
import HomeButtonsDisplay2 from "../../components2/HomeButtonsDisplay/HomeButtonsDisplay2";

// constructor(props) {
    
//   super(props);
 
//   this.state = {studentslist : []}
//   }


function Home() {
  return (
    <div>
      {" "}
      <br></br>
      <Slogan />
      <div className="Flexbox_Fee">
        <Fee />
        <br></br>
      </div>
      <No />
      <div className="home_button_div">
      <HomeButtonsDisplay />
      <HomeButtonsDisplay2 />
      </div>
      <br></br>
      <br></br>
      <div className="ledgerDiv">
        <Link to="/ledger">
        
        </Link>
      </div>
    </div>
  );
  
  // async function handleOnClick() {
  // try{
  // } catch(alert) {
  //    alert("Something went wrong");
  // }
  // }
}



export default Home;
