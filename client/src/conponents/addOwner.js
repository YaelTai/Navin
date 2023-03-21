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

const AddOwner = () => {
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Id, setId] = useState("");
  
  return <>
    

   <Card title="Add Store Owner" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
        <p className="m-0">
          
    <InputText value={Name} placeholder="Full name" onChange={(e) => setName(e.target.value)} /><br/><br/>
    <InputText value={Id} placeholder="Identity number" onChange={(e) => setId(e.target.value)} /><br/><br/>
    <InputText value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
    <InputText value={Phone} placeholder="Phone, optional" onChange={(e) => setPhone(e.target.value)} /><br/><br/>
    <Button label="Submit" icon="pi pi-check" />

        </p>
    </Card>
  </>;
};
export default AddOwner;
