
import React, { useEffect, useState,useRef } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import 'primeflex/primeflex.css';
import Axios from 'axios'
import '../index.css'
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { useGetAxiosApi } from '../hooks/useGetAxiosApi';
import ManagerMenu from "./menues/managerMenu";

const header = (
  
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
  
    </div>
  );
const DeleteSrore = () => {

    const toast = useRef(null);
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'All fileds required', life: 3000});
    }
    const [loading, setLoading] = useState(false);
    const {data,loading:loadingPrice,error,refetch}=useGetAxiosApi('manager/priceList');

    useEffect(()=>{console.log('data',data);},[data])

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
   
    const [storeName, setstoreName] = useState("");

    const [ownerName, setownerName] = useState("");
    const valid = () => {
       if(storeName==""||ownerName==""){
       
         showError()
         return false
       }
       return true
    };
    return <>
    
    <Card title="Delete Store" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',"textAlign":"center",overflowY:"auto"}}>
            <p className="m-0">

                        <label htmlFor="ownerName" className="w-6rem">
                            Owner Name
                        </label> <br/>
                      
                        <InputText id="ownerName" type="text" onInput={(e) => setownerName(e.value)} /><br/><br/>
                    
                        <label htmlFor="storeName" className="w-6rem">
                        Store Name
                        </label> <br/>
                      
                        <InputText id="storeName" type="text" onInput={(e) => setstoreName(e.value)} /><br/><br/>
                    
                        <Toast ref={toast} />
                    <Button label="Submit" icon="pi pi-check" loading={loading} onClick={()=>{
                        console.log(ownerName,"ownerName",storeName,"storeName");
                        let flag=valid()
                        if(flag){load()}
                    }}
                   />
                 
         <ManagerMenu/>   
                    
         

            </p>
        </Card>
    </>
}
export default DeleteSrore