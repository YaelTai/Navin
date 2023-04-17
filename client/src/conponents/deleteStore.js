import React, { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import "../index.css";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import ManagerMenu from "./menues/managerMenu";
import { useAxios1 } from "../hooks/useAxios";
const header = (
  <img
    alt="Card"
    src="https://primefaces.org/cdn/primereact/images/usercard.png"
    style={{ width: "98%", height: "50px" }}
  />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">
    <ManagerMenu />
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
        title="Delete Store"
        footer={footer}
        header={header}
        className="md:w-25rem"
        style={{
          margin: "2%",
          width: "95%",
          height: "98%",
          position: "fixed",
          textAlign: "center",
          overflowY: "auto",
        }}
      >
        <p className="m-0">
        <Toast ref={toast} />
          <InputText
            value={storeName}
            placeholder="Store name"
            onChange={(e) => setstoreName(e.target.value)}
          />
          <br />
          
          <br />
          <br />
          <InputText
            value={ownerName}
            placeholder="Owner name"
            onChange={(e) => setownerName(e.target.value)}
          />
          <br />
          <br />
      
        
          
          
          <Button
            label="Submit"
            icon="pi pi-check"
            onClick={async () => {
              if (!storeName || !ownerName) {
                console.log("***************")//+storeName +"|| !"+ownerName);
                // showError("all fields required");
              } else {
                console.log(ownerName);
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
