
import React, {useState}from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import 'primeflex/primeflex.css';  
import Axios from 'axios'


const LogIn=()=>{
    Axios.get('localhost:3001/api/manager/priceList').then(res=>{
alert(res.data)
})
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    return <>
    
      <div className="flex flex-column md:flex-row">
    <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">    
        
    <h1>Log In</h1>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            
            <label htmlFor="username" className="w-6rem">
                Email
            </label>
            <br/><br/>
            <InputText id="username" type="text" onValueChange={(e) => setUserName(e.value)} />
        </div>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="password" className="w-6rem">
                Password
            </label>
          <br/><br/>
    <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
    
        </div>
        <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
    </div>
 
   
</div>  
    </>
}
export default LogIn