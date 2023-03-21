
import React, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import 'primeflex/primeflex.css';
import Axios from 'axios'
import '../index.css'
import { Card } from 'primereact/card';

import { useGetAxiosApi } from '../hooks/useGetAxiosApi';
const header = (
  
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
  
    </div>
  );
const AddStore = () => {


    const [loading, setLoading] = useState(false);
    const {data,loading:loadingPrice,error,refetch}=useGetAxiosApi('manager/priceList');

    useEffect(()=>{console.log('data',data);},[data])

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
   
    const [storeName, setstoreName] = useState(null);
    const [ownerName, setownerName] = useState(null);
    
    return <>
    
    <Card title="Add Store Owner" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
        <p className="m-0">
          
    <InputText value={storeName} placeholder="Store name" onChange={(e) => setstoreName(e.target.value)} /><br/>
    <label>*as it appears on the sign</label>
    <br/><br/>
    <InputText value={ownerName} placeholder="Owner name" onChange={(e) => setownerName(e.target.value)} /><br/><br/>
 
    <Button label="Submit" icon="pi pi-check" />

        </p>
    </Card>
    </>
}
export default AddStore