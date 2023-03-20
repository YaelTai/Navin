import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { PrimeIcons } from 'primereact/api';
const UpdateCategories = () => {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
      style={{ width: "98%", height: "50px" }}
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2"></div>
  );
  return (
    <div style={{ tex: "center" }}>
      <Card
        title="Update Catetegories for the mall!"
        footer={footer}
        header={header}
        className="md:w-25rem"
        style={{ margin: "2%", width: "95%", height: "98%", position: "fixed" }}
      >
        <p className="m-0">
         
          <ul style={{ "list-style": "none", marginRight: "10%" }}>
          <Button icon="pi pi-check" className="p-button-success" onClick ={(e) => {
         if (value)
                {setCategories((a) => [...a, value]);}
                
              }}/>
    <InputText placeholder="Category"  onChange={(e) => setValue(e.target.value)}/>
   
        


            {categories.map((category, index) => (
              <li>
                <i className="pi pi-times" style={{ color: 'red', size:'20px' }}
                 onClick={(e) => {
                    setCategories((c) => [
                      ...c.slice(0, index),
                      ...c.slice(index + 1, c.length),
                    ]);
                  }}></i>
              
                {category}
              </li>
            ))}
          </ul>
          <Button label="Submit" icon="pi pi-check" />
        </p>
      </Card>
    </div>
  );
};
export default UpdateCategories;
