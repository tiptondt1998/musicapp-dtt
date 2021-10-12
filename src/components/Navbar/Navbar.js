import React, { Component } from "react";
//import { Item } from "semantic-ui-react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Icon } from "semantic-ui-react";
import Music from'./Music2.png';

//imrc + tab
// import { IconButton } from '@material-ui/core';


class NavBar extends Component {

  state = { clicked: false };
  

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
 
  // registerButton = () =>{
  //   const history = useHistory();
      
  //   changePath = () => {
  //     history.pushState("/register");
  //   }
  
  // }
 

 
  render() {
    
  
    return (
      <nav className="NavbarItems">
      <div className="img_div">
     <a href="/"> <img id="music" src={Music} alt="Music" /></a>
      </div>
        <div className="menu-icon" onClick={this.handleClick}>
         <a href="/accountdetails"> <Icon
            id="burger"
            className= "fas cog icon"
            size="large" >
            </Icon></a>
        </div>
        <ul
          id="ul"
          size="huge"
          className={this.state.clicked ? "nav-menu active" : "nav-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="buttons_container">
        {" "}
        </div>

     
        <Icon  id="notification_bell" className="bell icon" size="large"></Icon>
 
       <a href="/"> <Icon id="home_icon" className="home icon" size="large"></Icon></a>
       <a href = "/dashboard"> <Icon id="smallIcon" className="circle user icon" size="huge"></Icon></a>
      </nav>
    );
  }
}

export default NavBar;

