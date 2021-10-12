import react, {useState} from 'react';
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

export default function cancel(){
const [subID, setSubID] = useState('');
stripe.subscriptions.del(subID);

     return(
         <div>
             Enter your subscription ID:
             <input type="text" id="subID" onChange={(event)=>{setSubID(event.target.value); }}/>
             <button type="submit">cancel subscription</button>
         </div>
     )
 }