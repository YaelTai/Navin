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

const Payment = () => {
    const [Number, setNumber] = useState("");
    const [cvc, setcvc] = useState("");
    const [Date, setDate] = useState("");
    const [Name, setName] = useState("");
    const [Poassword, setPoassword] = useState("");
  
  return <>
    

   <Card title="Pay for ad" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
        <p className="m-0">
          
    <InputText value={Poassword} placeholder=" Approvement code" onChange={(e) => setPoassword(e.target.value)} /><br/><br/>
    <h3>Price to pay $$$$</h3>
    <InputText value={Number} placeholder=" card Number" onChange={(e) => setNumber(e.target.value)} /><br/><br/>
    <InputText value={Date} placeholder="expirty" onChange={(e) => setDate(e.target.value)} /><br/><br/>
    <InputText value={cvc} placeholder="cvc" onChange={(e) => setcvc(e.target.value)} /><br/><br/>
    <InputText value={Name} placeholder="Card holder" onChange={(e) => setName(e.target.value)} /><br/><br/>
    <Button label="Submit" icon="pi pi-check" />

        </p>
    </Card>
  </>;
};
export default Payment;
