import React, { useEffect, useState, useRef } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
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

const AddOwner = () => {
  const { postData } = useAxios1();
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
  const [value, setValue] = useState('');
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Id, setId] = useState("");

  return (
    <>
      <Card
        title="Add Store Owner"
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

          {/* <span className="p-float-label">
            <InputText
              id="username"
              value={Name}
              onChange={(e) =>setName(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </span>
          
          <span className="p-float-label">
            <InputText
              id="username"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="drh">gday</label>
          </span> */}
          <span className="p-float-label">
          <InputText
            value={Name}
            
            onChange={(e) => setName(e.target.value)}
          /> <label htmlFor="drh">Full Name</label></span>
          <br />
          <br />
          <span className="p-float-label">
          <InputText
            value={Id}
          
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="drh">Identity number</label>
          </span>
          <br />
          <br />
          <span className="p-float-label">
          <InputText
            value={Email}
        
            onChange={(e) => setEmail(e.target.value)}
          />
            <label htmlFor="drh">Email</label>
          </span>
          <br />
          <br />
          <span className="p-float-label">
          <InputText
            value={Phone}
           
            onChange={(e) => setPhone(e.target.value)}
          />      <label htmlFor="drh">Phone, optional</label>
          </span>
          <br />
          <br />
          <Button
            label="Submit"
            icon="pi pi-check"
            onClick={async () => {
              if (!Name || !Id || !Email ) {
                showError("all fields required");
              } else {
                const obj = { Name: Name, Id: Id, Email: Email, Phone: Phone };
                const res = await postData("manager/owner", obj);
                console.log(res);
                if (res.status == 200) {
                  showSuccess(res.data);
                } else showError(res.response.data.message);
              }
            }}
          />
        </p>
      </Card>
    </>
  );
};
export default AddOwner;
