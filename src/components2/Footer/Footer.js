import React from 'react'
import Logo from '../Logo/Logo';
import './Footer.css'



function Footer() {
    return (
       
        <footer className="footer">
        <div className="footer_content">
          <h4>Terms</h4>
          <p className="footer_par"> You (the User) are responsible for and own 100% of all your <br className="p_break"></br>
          content uploaded to PatchTheProducer.com [point-blank-<br className="p_break">
     </br>period]. PatchTheProducer.com will only collect $1.00 from <br className="p_break"></br>
           every successful sale you make on PatchTheProducer.com.</p>
          <h4>Contact Us</h4>
          <a  className="email" href = "mailto: management@patchtheproducer.com">management@patchtheproducer.com</a>
         </div>
        
            <Logo /><br></br>

        </footer>
        
    )
}

export default Footer
