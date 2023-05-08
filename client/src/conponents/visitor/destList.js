import React, { useState, useEffect ,useRef} from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
// import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { OverlayPanel } from 'primereact/overlaypanel';

import 'primeflex/primeflex.css';

import card from '../../images/card.png'
import { useAxios1 } from "../../hooks/useAxios"
 
const DestList = () => {
  const op = useRef(null);

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
            <div >
            <br/><img   src={`data:image/jpeg;base64,${product.Logo}`}  style={{"height":"50%","width":"30%"}}/>
            <Button
                  //no
                  icon="pi pi-times"
                  rounded
                  text
                  raised
                  severity="danger"
                  aria-label="Cancel"
                  style={{ marginLeft: "10px", marginBottom:"25px"}}
                 />
       
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
let floor1=[];
let floor2=[];
let floor3=[];
data.forEach(s => {
  if(s.Floor==1)
    floor1.push(s)
  else if(s.Floor==2)
    floor2.push(s)
  else
    floor3.push(s)

});
console.log("1111",floor1);
console.log("2222",floor2);


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
   <Button type="button" icon="pi pi-map-marker" label="floor's map" onClick={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
            </OverlayPanel>
  <DataView value={floor1} itemTemplate={itemTemplate} />
  <h2>second floor:</h2> <Button type="button" icon="pi pi-map-marker" label="floor's map" onClick={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
            </OverlayPanel>
  <DataView value={floor2} itemTemplate={itemTemplate} />
  <h2>third floor:</h2> 
  <Button type="button" icon="pi pi-map-marker" label="floor's map" onClick={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
            </OverlayPanel>
  <DataView value={floor3} itemTemplate={itemTemplate} />
      </Card>
    

      
    </>
  );
};
export default DestList;
