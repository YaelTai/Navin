import React, { useEffect, useState, useRef } from "react";
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import OwnerMenu from "../menues/ownerMenu";
import card from '../../images/card.png'
import { useAxios1 } from "../../hooks/useAxios";
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";

const header = (
    <img alt="Card" src={card}
        style={{ "width": "100%", "height": "50px" }} />
);
const footer = (
    <OwnerMenu />
    //<Button  radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
);

const Payment = () => {
    const { postData, updateData } = useAxios1();

    const [Number, setNumber] = useState("");
    const [cvc, setcvc] = useState("");
    const [Date, setDate] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [adId, setadId] = useState("");
    const [price, setPrice] = useState("");
    const toast = useRef(null);
    const navigate = useNavigate();

    const showError = (msg) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: msg, life: 3000 });
    }
    const showSuccess = (msg) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: msg, life: 3000 });
    }

    const checkCode = async () => {
        if (!adId || !Password) {
            showError("all fields required");
            return;
        }

        let resp = await postData('owner/checkAd', { "code": Password, "adId": adId });
    if (resp.status==200)
            setPrice(resp.data)
            
        if (resp.response.status == 400) {
            showError(resp.response.data.message);
        }
    

    }
    const pay= async()=>{
        if (!Number || !Date||!cvc||!Name) {
            showError("all fields required");
            return;
        }
        await updateData('owner/advertisment',{"Id":adId})

        // credit card validation 

        showSuccess("sucessfully paid")
        setTimeout(() => {
            navigate("/owner/")
          }, 1000);
    }

    return <>
        <Card title="Pay for ad" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%", "position": "fixed", overflowY: "auto" }}>
            <p className="m-0">
                <Toast ref={toast} />

                <br /><br />



                {price ? <>
                    <h2>Price to pay {price}</h2>
                    <lable> card Number</lable><br/>
                    <InputText value={Number} placeholder="" onChange={(e) => setNumber(e.target.value)} /><br /><br />
                    <lable>expirty</lable><br/>
                    <InputText value={Date} placeholder="" onChange={(e) => setDate(e.target.value)} /><br /><br />
                    <lable>cvc</lable><br/>
                    <InputText value={cvc} placeholder="" onChange={(e) => setcvc(e.target.value)} /><br /><br />
                    <lable>Card holder</lable><br/>
                    <InputText value={Name} placeholder="" onChange={(e) => setName(e.target.value)} /><br /><br />
                    <Button label="Submit" icon="pi pi-check" onClick={()=>{pay()}}/>
                </> :
                
                
                <> <lable>Ad code:</lable><br /><br/>
                    <InputText value={adId} placeholder="" onChange={(e) => setadId(e.target.value)} /> <br /><br />
                    <lable>Approvement code:</lable> <br />
                    <InputText value={Password} placeholder="" onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <Button
                        label="validate"
                        onClick={() => checkCode()}
                    /></>}

            </p>
        </Card>
    </>;
};
export default Payment;
