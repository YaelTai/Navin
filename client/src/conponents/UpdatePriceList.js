import React, { useState,useRef } from "react";
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useAxios1 } from "../hooks/useAxios";
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from "react-router-dom";
import ManagerMenu from "./menues/managerMenu";
import card from '../images/card.png'

const header = (
    <img alt="Card"         src={card}
    style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
    <div style={{ position: 'relative', height: '350px' }}>
 

  <ManagerMenu/>
</div>
  );


const UpdatePriceList = () => {
  
  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() =>{
  reject()
         setVisible(false)}
        } className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() =>{ 
        accept()
          setVisible(false)}} autoFocus />
    </div>
);
    const navigate = useNavigate();
    const accept =async () => {
debugger
        const res=await updateData("manager/priceList",{ "DayFee": DayFee, "CategoryFee": CategoryFee } )
                    
                    if(res.status==201){
                        showSuccess(res.data.message)
                        
                      }
                      else showError(res.response.data.message);

       
          setTimeout(() => {
            navigate("/owner/")
          }, 3000);
          
          }
    
      const reject = () => {}
    const toast = useRef(null);
    const showError = (msg) => {
      toast.current.show({severity:'error', summary: 'Error', detail:msg, life: 3000});
    }
    const showSuccess = (msg) => {
      toast.current.show({severity:'success', summary: 'Success', detail:msg, life: 3000});
    }

   
    const { Get, updateData } = useAxios1();
    const [visible, setVisible] = useState(false);
    let { data, loading, error, refetch } = Get(`owner/priceList`);
    const [DayFee, setDayFee] = useState(data.DayFee);
    const [CategoryFee, setCategoryFee] = useState(data.CategoryFee);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error!</p>;
    }
  
    return <>
        <Toast ref={toast} />


        <Card title="Update PriceList" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%", "position": "fixed", overflowY: "auto" }}>
            <p className="m-0">

                <InputText value={DayFee} placeholder="Day Fee" onChange={(e) => setDayFee(e.target.value)} /><br />
                <lable>*current fee: {data.DayFee} </lable><br /><br />
                <InputText value={CategoryFee} placeholder="Category Fee" onChange={(e) => setCategoryFee(e.target.value)} /><br />
                <lable>*current fee: {data.CategoryFee} </lable><br /><br />
                <Toast ref={toast} />
                <Dialog header="Please make sure the details you entered are correct" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
             
              <p className="m-0">
              Day Fee: {DayFee? DayFee:data.DayFee}    </p>
              <p className="m-0"> Category Fee: {CategoryFee? CategoryFee:data.CategoryFee} </p>
              
               
            </Dialog>

            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Submit" />
            </div>
                

            </p>
        </Card>
    </>;
};
export default UpdatePriceList;
