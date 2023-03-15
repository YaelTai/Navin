import React from 'react'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';  
const btn = {
  height: '10%',
  margin: '2%',
  width: '70%',


}
const OwnerHome=()=>{
 
          return (
        <div  >
            <h1>ברוך הבא משה</h1>
            <Button label="העלאת פרסומת" style={btn} /><br/><br/>
            <Button label="תשלום עבור פרסומת שאושרה" style={btn}/><br/><br/>
            <Button label="עדכון פרטים אישיים" style={btn}/><br/><br/>
            <Button label=" עדכון פרטי חנות" style={btn}/><br/>
        </div>
        )  
}
export default OwnerHome



