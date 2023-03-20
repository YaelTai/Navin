import React, { useEffect, useState } from 'react'

import { Card } from 'primereact/card';   
const AppoveAds = () => {
    const waitingAds=[
        {id:"123"}
    ]
    const header = (
  
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px"}} />
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            
        </div>
      );



    return (
        <>
           <Card title="Approve ads" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0">  

            <ul>
                <li></li>
                </ul> 
             </p>
        </Card>
       </>

    );
}
export default AppoveAds