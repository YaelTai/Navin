import React, { useState,useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useAxios1 } from "../../hooks/useAxios";
import { Toast } from 'primereact/toast';
import { SpeedDial } from 'primereact/speeddial';
import { useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';
import ManagerMenu from "../menues/managerMenu";
import card from '../../images/card.png'

const UpdateCategories = () => {

const { postData } = useAxios1();

  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
 
  const toast = useRef(null);
  const showError = (msg) => {
    toast.current.show({severity:'error', summary: 'Error', detail:msg, life: 3000});
  }
  const showSuccess = (msg) => {
    toast.current.show({severity:'success', summary: 'Success', detail:msg, life: 3000});
  }
 
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
  return (
    <div>
      <Card
        title="Add Catetegories for the mall"
        footer={footer}
        header={header}
      
        className=" md:w-25rem"
        style={{
        
          margin: "2%",
          width: "95%",
          height: "100%",
          position: "fixed",
          overflowY: "auto",
        }}
      >
        <p className="m-0">
        <Toast ref={toast} />
          
          <InputText
            placeholder="Category"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          /><Button
          icon="pi pi-plus"
          className="p-button-success"
          onClick={(e) => {
            if (value) {
              setCategories((a) => [...a, value]);
              setValue("");
            }
          }}
        />
          <br />
          <br />
          <ul style={{ "list-style": "none", marginRight: "10%" }}>
            {categories.map((category, index) => (
              <li>
                <i
                  className="pi pi-times"
                  style={{ color: "green", size: "20px" }}
                  onClick={(e) => {
                    setCategories((c) => [
                      ...c.slice(0, index),
                      ...c.slice(index + 1, c.length),
                    ]);
                  }}
                ></i>

                {category}
              </li>
            ))}
          </ul>
          <Button
            label="Submit"
            icon="pi pi-check"
            onClick={async () => {
            
             let res= await postData("manager/categories",categories.map((e)=>({"Name":e})))
           console.log("+++++++++++++"+res.status);
              if(res.status==201){
              showSuccess(res.data.message)
           
            }
                else showError(res.response);
              
            }}
          />
        </p>
      </Card>
    </div>
  );
};
export default UpdateCategories;
