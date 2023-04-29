import React, { useState,useRef } from "react";
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useAxios1 } from "../hooks/useAxios";
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from "react-router-dom";

const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">

    </div>
);


const UpdatePriceList = () => {
    const navigate = useNavigate();
    const accept =async () => {

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

    const [DayFee, setDayFee] = useState("");
    const [CategoryFee, setCategoryFee] = useState("");
    const { Get, updateData } = useAxios1();
    const [visible, setVisible] = useState(false);
    let { data, loading, error, refetch } = Get(`owner/priceList`);
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
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message={`Please make sure the details you entered are correct: 
              Day Fee:${DayFee? DayFee:data.DayFee}  
              Category Fee:${CategoryFee? CategoryFee:data.CategoryFee}  
            
              `}
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Submit" />
            </div>
                

            </p>
        </Card>
    </>;
};
export default UpdatePriceList;
