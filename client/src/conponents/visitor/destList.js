import React, { useState, useEffect ,useRef} from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
 import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { OverlayPanel } from 'primereact/overlaypanel';


import 'primeflex/primeflex.css';
import map1 from '../../images/floor1.png'
import map2 from '../../images/floor2.png'
import map3 from '../../images/floor3.png'

import card from '../../images/card.png'
import { useAxios1 } from "../../hooks/useAxios"

import VisitorMenu from "../menues/visitorMenu"

const DestList = () => {
  const op1 = useRef(null);
  const op2 = useRef(null);
  const op3 = useRef(null);
    const header = (
      <>
        <img alt="Card" src={card} style={{ "width": "100%", "height": "50px" }} />
        <VisitorMenu/>
        </>
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
    
        </div>
      );
  
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [floor1, setfloor1] = useState([]);
  const [floor2, setfloor2] = useState([]);
  const [floor3, setfloor3] = useState([]);
  useEffect(() => {
 setStores(JSON.parse(localStorage.getItem("chosenStores") || "[]"))
  }, []);
 

const itemTemplate = (product) => {
  console.log("data");
    return (
        <div className="col-12">
            <div >
            <br/>
            <img   src={`data:image/jpeg;base64,${product.Logo}`}  style={{"height":"50%","width":"30%"}}/>
            <Button className="w-2rem h-2rem"icon="pi pi-times" rounded severity="warning" aria-label="Notification" style={{ marginLeft: "10px", marginBottom:"25px",}}
                
                onClick={(e) => {
                if(product.Floor==1){
                    let index =floor1.indexOf(product)
                     setfloor1((s) => [
                    ...s.slice(0, index),
                    ...s.slice(index + 1, s.length),
                  ]);

                }
                if(product.Floor==2){
                  let index =floor2.indexOf(product)
                  setfloor2((s) => [
                 ...s.slice(0, index),
                 ...s.slice(index + 1, s.length),
               ]);
                }
                if(product.Floor==3){
                  let index =floor3.indexOf(product)
                  setfloor3((s) => [
                 ...s.slice(0, index),
                 ...s.slice(index + 1, s.length),
               ]);
                }
                 
                }} />
     
       
            </div>
        </div>
    );
};
const { Post } = useAxios1();

let { data, loading, error, refetch } = Post(`visitor/storeLogo`,{stores:JSON.parse(localStorage.getItem("chosenStores") || "[]")});
console.log(data)

useEffect(() => {
  if(data){
  setfloor1(data.floor1)
  setfloor2(data.floor2)
  setfloor3(data.floor3)
}
   }, [data]);

 useEffect(() => {
  if(floor1.length!=0 || floor2.length!=0 || floor3.length!=0){
    console.log("1111111111111",floor1.concat(floor2).concat(floor3));
     localStorage.setItem("chosenStores",JSON.stringify(floor1.concat(floor2).concat(floor3).map((s)=>{return {"Name":s.Name}})));
    }

     }, [floor1,floor2,floor3]);


if (loading) {
  return <p>Loading...</p>;
}
if (error) {
  return <p>Error!</p>;
}




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
   <Button type="button" icon="pi pi-map-marker" label="floor's map" onClick={(e) => op1.current.toggle(e)} />
            <OverlayPanel ref={op1}>
            <Image src={map1}alt="1" width="250" preview />
                {/* <img src={map1} alt="1"width="250" ></img> */}
            </OverlayPanel>
  <DataView value={floor1} itemTemplate={itemTemplate} />
  <h2>second floor:</h2> 
  <Button type="button" icon="pi pi-map-marker" label="floor's map" onClick={(e) => op2.current.toggle(e)} />
            <OverlayPanel ref={op2}>
            <Image src={map2}alt="2" width="250" preview />
            </OverlayPanel>
  <DataView value={floor2} itemTemplate={itemTemplate} />
  <h2>third floor:</h2> 
  <Button type="button" icon="pi pi-map-marker" label="floor's map" onClick={(e) => op3.current.toggle(e)} />
            <OverlayPanel ref={op3}>
            <Image src={map3}alt="3" width="250" preview />
            </OverlayPanel>
  <DataView value={floor3} itemTemplate={itemTemplate} />
      </Card>
    

      
    </>
  );
};
export default DestList;
