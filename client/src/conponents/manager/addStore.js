import React, { useEffect, useState ,useRef} from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import "primeflex/primeflex.css";
import Axios from "axios";
import "../../index.css";
import { Card } from "primereact/card";
import { useAxios1 } from "../../hooks/useAxios";
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';

import ManagerMenu from ".././menues/managerMenu";
import card from '../../images/card.png'

const header = (
  <img
    alt="Card"
    src={card}

    style={{ width: "100%", height: "50px" }}
  />
);
const footer = (
  <div style={{ position: 'relative', height: '350px' }}>


<ManagerMenu/>
</div>
);

const AddStore = () => {
  const toast = useRef(null);
  const showError = (msg) => {
    toast.current.show({severity:'error', summary: 'Error', detail:msg, life: 3000});
  }
  const showSuccess = (msg) => {
    toast.current.show({severity:'success', summary: 'Success', detail:msg, life: 3000});
  }
  const { postData } = useAxios1();
  const [storeName, setstoreName] = useState(null);
  const [ownerId, setownerName] = useState(null);
  const [floor, setFloor] = useState(null);

  return (
    <>
      <Card
        title="Add Store "
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
          /> <label htmlFor="drh">Store name</label></span>
          <label>*as it appears on the sign</label>
          <br />
          <br />

          <span className="p-float-label">

          <InputNumber inputId="minmax-buttons" value={floor} 
          onValueChange={(e) => setFloor(e.value)} mode="decimal" showButtons min={0} max={2} />
          <label htmlFor="drh">Floor number</label></span>
          <br/><br/>
          <span className="p-float-label">
          <InputText 
            value={ownerId}
         
            onChange={(e) => setownerName(e.target.value)}
          /><label htmlFor="drh">Owner id</label></span>
          <br />
          <br />

          <Button
            label="Submit"
            icon="pi pi-check"
            onClick={async () => {
              if (!storeName || !ownerId || !floor) {
                alert("all fields required");
              } else {
                const obj = { Name: storeName, OwnerId: ownerId ,Floor:floor};
                const res = await postData("manager/store", obj);
            if(res.status==201){
              showSuccess(res.data.message)
              
            }
                else showError(res.response.data.message);
              
              }
            }}
          />
        </p>
      </Card>
    </>
  );
};
export default AddStore;
