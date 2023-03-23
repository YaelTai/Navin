import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import VisitorMenu from './menues/UserMenu';
import { useNavigate } from "react-router-dom";


const PresentLocation = () => {


    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
           <VisitorMenu/>
        </div>
    );

    const navigate = useNavigate();

    return (
        
           
<Card title="You are here!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
    <p className="m-0">
       <img src="../images/you_are_here.png"   /><br/><br/>
    
       <Button label="Go to choose stores" onClick={() => navigate("/visitor/chooseStores" )} 
/>

    </p>
</Card>

    );
}
export default PresentLocation