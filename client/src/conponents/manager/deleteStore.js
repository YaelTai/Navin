import React, {  useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import "../../index.css";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import ManagerMenu from "../menues/managerMenu";
import { useAxios1 } from "../../hooks/useAxios";
import card from '../../images/card.png'

const header = (
  <img
    alt="Card"
    src={card}

    style={{ width: "98%", height: "50px" }}
  />
);
const footer = (
  <div style={{ position: 'relative', height: '350px' }}>


<ManagerMenu/>
</div>
);
const DeleteStore = () => {
  const { deleteData } = useAxios1();
  const toast = useRef(null);
  const showError = (msg) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: msg,
      life: 3000,
    });
  };
  const showSuccess = (msg) => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: msg,
      life: 3000,
    });
  };

  const [storeName, setstoreName] = useState(null);
  const [ownerName, setownerName] = useState(null);


  return (
    <>
    <Card
      title="Delete Store "
      footer={footer}
      header={header}
      className="md:w-25rem"
      style={{
        margin: "2%",
        width: "95%",
        height: "95%",
        position: "fixed",
        overflowY: "auto",
      }}
    >
      <p className="m-0">
      <Toast ref={toast} />
      <span className="p-float-label">
          <InputText
            value={storeName}
            onChange={(e) => setstoreName(e.target.value)}
          /><label htmlFor="drh">Store name</label></span>
          <br />
          
          
          <span className="p-float-label">
          <InputText
            value={ownerName}
          onChange={(e) => setownerName(e.target.value)}
          /><label htmlFor="drh">Owner name</label></span>
          <br />
          <br />
      
        
          
          
          <Button
            label="Submit"
            icon="pi pi-check"
            onClick={async () => {
              if (!storeName || !ownerName) {
                
                 showError("all fields required");
              } else {
                
                let res = await deleteData("manager/store", {
                  "Name": storeName,
                  "OwnerName": ownerName,
                });
                if(res.status==201){
                    showSuccess(res.data.message)
                    
                  }
                      else showError(res.response.data.message);
                console.log(res)
              }
            }}
          />
        </p>
      </Card>
    </>
  );
};
export default DeleteStore;
