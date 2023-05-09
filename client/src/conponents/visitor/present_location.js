import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import VisitorMenu from '../menues/visitorMenu'
import { useNavigate } from "react-router-dom";
import card from '../../images/card.png'
import Map from '../map/Map'
import { useAxios1 } from "../../hooks/useAxios";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCPams-OwVhpAAxAr-4WcFbE5w-mcZUFYk");

const PresentLocation = () => {
  const { Get, postData } = useAxios1();


    const [location, setLocation] = useState();
  

  
    function getLocation() {
      if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    

let adress=`${localStorage.getItem("store")} , דרך אגודת ספורט בית"ר 1`
      Geocode.fromAddress(adress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
      setLocation(response.results[0].geometry.location);

        },
        (error) => {
          console.error(error);
        }
      );

 
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
    <Button label="Go to choose stores" onClick={() => navigate("/visitor/chooseStores" )} />

          <Map location={location} width={'400px'} height={'400px'}   />    <br/><br/>


    </p>
</Card>

    );
}
export default PresentLocation