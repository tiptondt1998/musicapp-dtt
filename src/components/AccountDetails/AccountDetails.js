import React, { useState } from 'react'
import Firebase from '../firebase'
import 'firebase/storage'
import 'firebase/analytics'

import './index.css'
import { Icon } from "semantic-ui-react";

function AccountDetails(props) {

	if(!Firebase.getCurrentUsername()) {
		alert('please login first')
		props.history.replace('/login')
		return null
	}
	const [exclusive, setExclusive] = useState();
	const [nonExclusive, setnonExclusive] = useState();
	const [instrumentals_file, setInstrumentals_file] = useState();
	
	function compare(exclusive, nonExclusive){
	// 	 if(exclusive === ''){window.alert('no null values')}
	if(exclusive - nonExclusive > 1000){
		window.alert("Difference between exclusive and non-exclusive must be 1000")
	}
	else{
		Firebase.Push(instrumentals_file, exclusive, nonExclusive);
	}
  }

	return (
		<div>
		<div id="user_name_display">	<Icon id="smallestIcon" className="circle user icon" size="large"></Icon><h1 id="user_name_display">{ Firebase.getCurrentUsername() }</h1></div>
		
		<p className="p"> Upload Instrumental</p>
		<form className="instrumentals_upload_form">
		Please select a genre for this track
<select id="genre">
   <option value="hip hop">hip hop</option>
   <option value="pop">pop</option>
   <option value="r&b">R&B/Soul</option>
   <option value="other">Other</option>
</select>
			   <input id="instrumentals_file" type="file" required="required" value={instrumentals_file} onChange={(event)=>{ setInstrumentals_file(event.target.value);}}></input>
			   <label className="label">Exclusive Price</label>
			   <input required="required" value={exclusive} className="price" type="number" min="0.01" step="0.01" max="2500.01" defaultValue="00.00" onChange={(event)=>{ setExclusive(event.target.value);}} />
			   <label className="label_1">Non-Exlusive Price</label>
			   <input required='required' value={nonExclusive} className="price" type="number" min="0.01" step="0.01" max="2500.01" defaultValue="00.00" onChange={(event)=>{ setnonExclusive(event.target.value);}} />
			  <br></br>
			  <button
			  type="submit"
			  fullWidth
			  onClick={compare('label', 'label_1')}
			  variant="contained"
			  id="register_login"
			  to="/signup"
			   >
			  Submit Instrumental
			</button>
			<button
			type="submit"
			fullWidth
			onClick={logout}
			variant="contained"
			id="register_login"
			to="/signup"
			 >
			Log Out
		  </button>
			   </form>

			  
		</div>
	)

	async function logout() {
		await Firebase.logout()
		props.history.push('/')
	}
}
export default AccountDetails
