import React, { useEffect, useState,useRef } from "react";
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import OwnerMenu from "./menues/ownerMenu";
import card from '../images/card.png'
import { useAxios1 } from "../hooks/useAxios";
import { Toast } from 'primereact/toast';
const header = (
    <img alt="Card"         src={card}
    style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
    <OwnerMenu/>
    //<Button  radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
);

const Payment = () => {
    const { postData } = useAxios1();

    const [Number, setNumber] = useState("");
    const [cvc, setcvc] = useState("");
    const [Date, setDate] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [adId, setadId] = useState("");
    const [price, setPrice] = useState("");
    const toast = useRef(null);
    const showError = (msg) => {
      toast.current.show({severity:'error', summary: 'Error', detail:msg, life: 3000});
    }
    const showSuccess = (msg) => {
      toast.current.show({severity:'success', summary: 'Success', detail:msg, life: 3000});
    }

const checkCode= async ()=>{
    if (!adId|| !Password) {
        showError("all fields required")
       
    }  

    let resp  =await postData('owner/checkAd',{"code" :Password,"adId":adId});

    if(resp.response.status==400){
        showError(resp.response.data.message);}
        
    
    console.log("**************",resp.data);
    setPrice(resp.data)
    console.log("------------",price);
}

  return <>
    

   <Card title="Pay for ad" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
        <p className="m-0">
        <Toast ref={toast} />

            <lable>Ad code:</lable><br/>
        <InputText value={adId} placeholder="" onChange={(e) => setadId(e.target.value)} /> <br/><br/>     
        <lable>Approvement code:</lable> <br/>
    <InputText value={Password} placeholder="" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
     <Button
            label="validate"
            onClick={() => checkCode() }
    /><br/><br/>
            
              
            
    {price?<>  
    <h2>Price to pay {price}</h2>
    <InputText value={Number} placeholder=" card Number" onChange={(e) => setNumber(e.target.value)} /><br/><br/>
    <InputText value={Date} placeholder="expirty" onChange={(e) => setDate(e.target.value)} /><br/><br/>
    <InputText value={cvc} placeholder="cvc" onChange={(e) => setcvc(e.target.value)} /><br/><br/>
    <InputText value={Name} placeholder="Card holder" onChange={(e) => setName(e.target.value)} /><br/><br/>
    <Button label="Submit" icon="pi pi-check" />
</>:<></>  }
    
        </p>
    </Card>
  </>;
};
export default Payment;
