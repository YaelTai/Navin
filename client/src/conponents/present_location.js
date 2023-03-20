import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';

const PresentLocation = () => {


    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
           
        </div>
    );


    return (
        
           
<Card title="You are here!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed"}}>
    <p className="m-0">
       <img src="../images/you_are_here.png"   />
    

    </p>
</Card>

    );
}
export default PresentLocation