import React from 'react'
import { Button } from 'primereact/button';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
// import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css';  
const btn = {
  height: '10%',
  margin: '2%',
  width: '70%',


}
const ManagerHome=()=>{
 
          return (
        <div  >
            <h1>welcome manager!</h1>
            <Button label="Update Map" style={btn} /><br/><br/>
            <Button label="update categories " style={btn}/><br/><br/>
            <Button label="Add new Store" style={btn}/><br/><br/>
            <Button label="Remove Store" style={btn}/><br/>
            <Button label="Add Store Owner" style={btn}/><br/>
            <Button label="Remove Store Owner" style={btn}/><br/>
            <Button label="Approve Ads" style={btn}/><br/>
        

        </div>
        )  
}
export default ManagerHome



