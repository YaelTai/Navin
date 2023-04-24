import React, {useState, useRef} from 'react'
import { useNavigate } from "react-router-dom";

import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';    
import { useAxios1 } from "../hooks/useAxios";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
const UpdatePersonalsDetails = () => {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();
  const accept =async () => {
    let res1 = await updateData('owner/owner', {"Id":data.Id,"Password": password? password:data.Password,"Phone":phone? phone: data.Phone,"Name":data.Email})

        console.log("res:",res1);


        res1.request.status==200?
      toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Your details have been successfully updated', life: 3000 }):
      toast.current.show({ severity: 'warn', summary: 'Rejected', detail:res1.response.data.message, life: 3000 });
      setTimeout(() => {
        navigate("/owner/")
      }, 3000);
      
      }

  const reject = () => {}
      
  
  const tmpuserid=181;
  const {Post,updateData } = useAxios1();
  
  let { data, loading, error, refetch } = Post(`owner/owner`,{"Id":181});
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  }

    const header = (
  
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
      
        </div>
      );

    return <>
    <Card title="Update Your Personals Details" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0">
        <lable  style={{"marginRight":'1%'}}> password : </lable><br></br>
        <Password p-password-strong value={password} onChange={(e) => setPassword(e.target.value)} toggleMask /><br/>
      
        <br></br>
        <lable  style={{"marginRight":'1%'}}>phone :</lable><br></br>
        <InputNumber value={phone} onValueChange={(e) => setPhone(e.value)} useGrouping={false} /><br></br>
        <label>*current phone: {data.Phone}   </label>
        <br></br><br/>
        <lable style={{"marginRight":'1%'}}> email:</lable><br></br>
        <InputText value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
        <label>*current email: {data.Email}   </label>
        <br></br><br/>
        
      <Toast ref={toast} />
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message={`Please make sure the details you entered are correct: 
              Password:${password? password:data.Password}  
              Phone: ${phone? phone: data.Phone? data.Phone :"none"}  
              email: ${email? email: data.Email}  
              `}
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Submit" />
            </div>
        </p>

        </Card>
    </>
}
export default UpdatePersonalsDetails