
import React, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import 'primeflex/primeflex.css';
import Axios from 'axios'
import '../index.css'
import { Card } from 'primereact/card';
import './LogIn.css'
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
    const [Location, setLocatione] = useState(null);
    const [storeName, setstoreName] = useState(null);
    const [email, setEmail] = useState(null);
    const [ownerName, setownerName] = useState(null);
    const [password, setPassword] = useState(null);
    return <>
    
    <Card title="Add New Store" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',"textAlign":"center"}}>
            <p className="m-0">

                        <label htmlFor="ownerName" className="w-6rem">
                            Owner Name
                        </label> <br/>
                      
                        <InputText id="email" type="text" onValueChange={(e) => setownerName(e.value)} /><br/><br/>
                    
                   
                        <label htmlFor="password" className="w-6rem">
                            Password
                        </label>
                        <br/>
                        <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask /><br/><br/>

                    
                    

                        <label htmlFor="email" className="w-6rem">
                            Owner Email
                        </label>
                        <br/>
                        <InputText id="email" type="text" onValueChange={(e) => setEmail(e.value)} /><br/><br/>
                  
                    

                        <label htmlFor="email" className="w-6rem">
                            Store Location
                        </label>
                        <br />
                        <InputText id="Location" type="text" onValueChange={(e) => setLocatione(e.value)} /><br/><br/><br/>
                  
                    <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
         

         
            </p>
        </Card>
    </>
}
export default AddStore