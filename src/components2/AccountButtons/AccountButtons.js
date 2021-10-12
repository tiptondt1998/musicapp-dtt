import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Buttonsss } from '../Button';

function AccountButtons() {
    return (
        <Router>
        <div>
        <div className="nav-buttons-container">
        <Link to="/signup">
          <Buttonsss buttonName="Sign Up" className="sign_up">
            Sign Up
          </Buttonsss>
        </Link>

        <br></br>
        <Link to="/login">
          <Buttonsss buttonName="Log In" className="log_in">
            {" "}
            Log In
          </Buttonsss>
        </Link>
      </div>
        </div>
        </Router>
    )
}

export default AccountButtons
