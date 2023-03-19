import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const UpdateCategories = () => {
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState('');
    return <>
        <h1>Update categories</h1>

      
           
           
            {/* <div className="flex flex-column gap-2">
                
                <InputText  onBlur={(e) => { setCategories(a => [...a , e.target.value]);  }}/>
                <p>{categories}**********</p>
            </div> */}
            <ul style={{ "list-style": "none","marginRight":"10%"}}>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} onBlur={(e)=>{setCategories(a => [...a , e.target.value]); setValue("")}} />
     
            {categories.map(e=><li > <Button label="x" onClick={e=>e.target.parentNode.removeChild(e.targrt)} style={{"height":"0.3%","width":"0.3%","backgroundColor":"red"}}/>{e} </li>) } 
 
         </ul>
         <Button label="Submit" icon="pi pi-check" />


    </>
    
}
export default UpdateCategories