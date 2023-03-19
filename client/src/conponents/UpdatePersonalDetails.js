import React, {useState} from 'react'
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


const UpdatePersonalsDetails = () => {

    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    return <>
    <h1>Update Your Personal Details</h1>
        <lable  style={{"marginRight":'1%'}}>your new password here</lable>
        <Password p-password-strong value={password} onChange={(e) => setPassword(e.target.value)} toggleMask /><br></br><br></br>
        <lable  style={{"marginRight":'1%'}}>your new phone here</lable>
        <InputNumber value={phone} onValueChange={(e) => setPhone(e.value)} useGrouping={false} /><br></br><br></br>
        <lable style={{"marginRight":'1%'}}>your new email</lable>
        <InputText value={email} onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
        <Button label="Submit" icon="pi pi-check" />
        
    </>
}
export default UpdatePersonalsDetails