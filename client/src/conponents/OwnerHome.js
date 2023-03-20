import React from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';    
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';  
const btn = {
  height: '10%',
  margin: '2%',
  width: '70%',
}
const header = (
  
  <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">

  </div>
);
const OwnerHome=()=>{
 
          return (
        <>
        <Card title="Welcome *owner*!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0">
            <h1>welcome owner!</h1>
            <Button label="Load Advertisment" style={btn} /><br/><br/>
            <Button label="Pay For Approved Ad" style={btn}/><br/><br/>
            <Button label="Update Personal details" style={btn}/><br/><br/>
            <Button label="Update Store Details" style={btn}/><br/>
            </p>
        </Card>
        </>
        )  
}
export default OwnerHome



