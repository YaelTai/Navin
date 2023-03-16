
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


        <div className="flex flex-column md:flex-row">
            <div class="login-box">
                <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">

                    <h1>Add new store</h1>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">

                        <label htmlFor="ownerName" className="w-6rem">
                            Owner Name
                        </label>
                        <br /><br />
                        <InputText id="email" type="text" onValueChange={(e) => setownerName(e.value)} />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">
                            Password
                        </label>
                        <br /><br />
                        <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />

                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">

                        <label htmlFor="email" className="w-6rem">
                            Owner Email
                        </label>
                        <br /><br />
                        <InputText id="email" type="text" onValueChange={(e) => setEmail(e.value)} />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">

                        <label htmlFor="email" className="w-6rem">
                            Store Location
                        </label>
                        <br /><br />
                        <InputText id="Location" type="text" onValueChange={(e) => setLocatione(e.value)} />
                    </div>
                    <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
                </div>


            </div> </div>
    </>
}
export default AddStore