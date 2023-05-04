import React, { useEffect, useState, useRef } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import ManagerMenu from "../menues/managerMenu";
import { useAxios1 } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
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

const AddOwner = () => {
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(false);

  const load = () => {
      

      setTimeout(() => {
          
      }, 2000);
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
          <Button label="Submit" icon="pi pi-check" loading={loading} onClick={async ()=>{
            
            
            
            
            if (!Name || !Id || !Email ) {
              showError("all fields required");
            } else {
            setLoading(true);
            load()
              const obj = { Name: Name, Id: Id, Email: Email, Phone: Phone };
              //debugger;
           
              const res = await postData("manager/owner", obj);
              setLoading(false);
              console.log(res);
              if (res.status == 200) {
                showSuccess(res.data);
                setTimeout(() => {
                  navigate(`/manager/`)
                }, 3000);
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
