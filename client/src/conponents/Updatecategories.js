import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';    
const UpdateCategories = () => {
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState('');
    const header = (
  
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
      
        </div>
      );
    return <>
        <Card title="Update Catetegories for the mall!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed'}}>
            <p className="m-0">

      
           
           
            {/* <div className="flex flex-column gap-2">
                
                <InputText  onBlur={(e) => { setCategories(a => [...a , e.target.value]);  }}/>
                <p>{categories}**********</p>
            </div> */}
            <ul style={{ "list-style": "none","marginRight":"10%"}}>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} onBlur={(e)=>{setCategories(a => [...a , e.target.value]); setValue("")}} />
     
            {categories.map(e=><li > <Button label="x" onClick={e=>e.target.parentNode.removeChild(e.targrt)} style={{"height":"0.3%","width":"0.3%","backgroundColor":"red"}}/>{e} </li>) } 
 
         </ul>
         <Button label="Submit" icon="pi pi-check" />

         </p>
        </Card>
    </>
    
}
export default UpdateCategories