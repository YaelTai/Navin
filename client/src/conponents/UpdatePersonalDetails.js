import React, {useState} from 'react'
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';    

const UpdatePersonalsDetails = () => {
    const header = (
  
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
      
        </div>
      );
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    return <>
    <Card title="Update Your Personals Details" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0">
        <lable  style={{"marginRight":'1%'}}>your new password here</lable><br></br>
        <Password p-password-strong value={password} onChange={(e) => setPassword(e.target.value)} toggleMask /><br></br><br></br>
        <lable  style={{"marginRight":'1%'}}>your new phone here</lable><br></br>
        <InputNumber value={phone} onValueChange={(e) => setPhone(e.value)} useGrouping={false} /><br></br><br></br>
        <lable style={{"marginRight":'1%'}}>your new email</lable><br></br>
        <InputText value={email} onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
        <Button label="Submit" icon="pi pi-check" />
        </p>
        </Card>
    </>
}
export default UpdatePersonalsDetails