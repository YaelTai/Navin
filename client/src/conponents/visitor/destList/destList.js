import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
 import { ProductService } from './ProductService';
// import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import 'primeflex/primeflex.css';
import handm from '../../../images/handm.png'
import card from '../../../images/card.png'
import { useAxios1 } from "../../../hooks/useAxios";
 
const DestList = () => {

    const header = (
        <img alt="Card" src={card} style={{ "width": "100%", "height": "50px" }} />
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
    
        </div>
      );
  
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);

  useEffect(() => {
 setStores(JSON.parse(localStorage.getItem("chosenStores") || "[]"))
  }, []);
 

const itemTemplate = (product) => {
  console.log("data");
    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img   src={`data:image/jpeg;base64,${product.Logo}`}  style={{"height":"200px","width":"30%"}}/>
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    {/* <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"> */}
                    
                        <Button icon="pi pi-times" className="p-button-rounded" 
                        
                        
                        
                        ></Button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};
const { Post } = useAxios1();
let { data, loading, error, refetch } = Post(`visitor/storeLogo`,{stores:JSON.parse(localStorage.getItem("chosenStores") || "[]")});
console.log(data)
if (loading) {
  return <p>Loading...</p>;
}
if (error) {
  return <p>Error!</p>;
}
console.log("dataaa",data);

  return (
    <>
      <Card
        title="The chosen stores:"
        footer={footer}
        header={header}
        className="md:w-25rem"
        style={{
          margin: "2%",
          width: "95%",
          height: "98%",
         // position: "fixed",
          overflowY: "auto",
        }}
      >
  <h2>first floor:</h2>
  <DataView value={data} itemTemplate={itemTemplate} />
  <h2>second floor:</h2>  
      </Card>
    </>
  );
};
export default DestList;
