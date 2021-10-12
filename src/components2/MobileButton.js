import styled from 'styled-components';
import './MobileButton.css'

import React from 'react'

function MobileButton(props) {
    return (
        <div>
             <Button>
             <div className="buttonDiv">
               <button>{props.buttonName}</button>
               </div>
             </Button>  
        </div>
    )
}

export default MobileButton;

const Button = styled.div`
.buttonDiv {
    display: flex;
    justify-content: center;
    height: 600px;
    width: 100%;
    transition: 250ms;
    text-decoration: none;
    
}
button {
   margin-right: 100px;
   margin-left: -50px;
    background: rgb(255, 145, 0);
    border-radius: 5px;
    height: 100%;
    width: 400px;
    border: none;
    color: #ffff;
    font-size: 20px;
    transition: all  ;
    text-decoration: none;
    color: rgb(37, 43, 99)
}
button: hover{
   
    background-color: rgb(55, 71, 90);
    transition: all .5s linear;
    text-decoration: none;
    color: rgb(218, 123, 0);
}

@media screen and (max-width: 768px) {
.buttonDiv {
    display: flex;
    justify-content: flex-end;
    height: 400px;
    width: 100%;
    margin-left: 40%;
   

}
button {
    background: rgb(255, 145, 0);
    border-radius: 5px;
    height: 400px;
    width: 150px;
    border: none;
    color: #ffff;
    font-size: 20px;
    transition: ease;
    text-decoration: none;
    color: rgb(37, 43, 99)

}
button: hover{
    transition: all .5s linear;
    background: rgb (55, 71, 90);
    color: rgb(218, 123, 0);
}

}
  `  

