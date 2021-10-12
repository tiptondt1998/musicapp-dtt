import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from '../Firebase/config';
import './SignUp.css'
import { Buttonsss } from "../Button";
import '../stripe.js';

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword( email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to="/login" />;
  }
  return (
    <div>
     <h2>Sign Up</h2>
      <div className="form_div">
    
      <form onSubmit={handleSubmit}>
      <i for="userName" className="user icon"></i><br></br>
     <input type="text" name="email" placeholder="User Name" />
     <i for="email" class="envelope icon"></i><br></br>
     <input type="email" naem="email" placeholder="email"></input>
     <i for="password" class="exclamation circle icon"></i><br></br>
     <input type="password" name="password" placeholder="Password" />
     <div className="form_button">
     <Buttonsss type="submit" Redirect to = '../stripe'>Submit</Buttonsss>
     </div>
   </form>
      </div>
      </div>
   
  );
};

export default SignUp;