import React, { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
       
    </div>
);

const UpdatePriceList = () => {
    const [DayFee, setDayFee] = useState("");
    const [CategoryFee, setCategoryFee] = useState("");

  
  return <>
    

   <Card title="Update PriceList" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
        <p className="m-0">
          
    <InputText value={DayFee} placeholder="old DayFee" onChange={(e) => setDayFee(e.target.value)} /><br/><br/>
    <InputText value={CategoryFee} placeholder="old Category Fee" onChange={(e) => setCategoryFee(e.target.value)} /><br/><br/>
    <Button label="Submit" icon="pi pi-check" />

        </p>
    </Card>
  </>;
};
export default UpdatePriceList;
