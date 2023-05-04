import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import VisitorMenu from '../menues/visitorMenu'
import { useNavigate } from "react-router-dom";
import card from '../../images/card.png'
import Map from '../map/Map'
import { useAxios1 } from "../../hooks/useAxios";


const PresentLocation = () => {
  const { Get, postData } = useAxios1();


    const [location, setLocation] = useState();
  

  
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    async function showPosition(position) {
     let location_= await postData('visitor/location',{storeName:localStorage.getItem("store")})
     console.log(location_);
      setLocation(location_.data);
    }
  
    const header = (
        <>
         
        <img alt="Card"         src={card}
        style={{ "width": "98%", "height": "50px" }} /></>
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
          
        </div>
    );
    useEffect(()=>{getLocation()},[])
    const navigate = useNavigate();

    return (
        
           
<Card title="You are here!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "95%" ,"position":"fixed",overflowY:"auto"}}>
    <p className="m-0">  
          <Map location={location} width={'400px'} height={'400px'}   />    <br/><br/>
       <Button label="Go to choose stores" onClick={() => navigate("/visitor/chooseStores" )} 
/>

    </p>
</Card>

    );
}
export default PresentLocation