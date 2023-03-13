import React from 'react'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css';  
const OwnerHome=()=>{
 
          return (
        <div className="card flex justify-content-center">
            
            <Button label="העלאת פרסומת" />
            <Button label="תשלום עבור פרסוןמת שאושרה" />
            <Button label="עדכון פרטים אישיים" />
            <Button label=" עדכון פרטי חנות" />
        </div>
        )  
}
export default OwnerHome



