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
            <h1>welcome owner!</h1>
            <Button label="Load Advertisment" style={btn} /><br/><br/>
            <Button label="Pay For Approved Ad" style={btn}/><br/><br/>
            <Button label="Update Personal details" style={btn}/><br/><br/>
            <Button label="Update Store Details" style={btn}/><br/>
        </div>
        )  
}
export default OwnerHome



