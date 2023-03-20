import React from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';    
// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
// import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css';  
const btn = {
  height: '10%',
  margin: '3%',
  width: '70%',


}
const header = (
  
  <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px"}} />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">

  </div>
);
const ManagerHome=()=>{
 
          return (
      <>
          
    <Card title="Welcome Manager!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0">
            <h1>welcome manager!</h1>
            <Button label="Update Map" style={btn} /><br/>
            <Button label="update categories " style={btn}/><br/>
            <Button label="Add new Store" style={btn}/><br/>
            <Button label="Remove Store" style={btn}/><br/>
            <Button label="Add Store Owner" style={btn}/><br/>
            <Button label="Remove Store Owner" style={btn}/><br/>
            <Button label="Approve Ads" style={btn}/><br/>
        
            </p>
        </Card>
        </>
        )  
}
export default ManagerHome



