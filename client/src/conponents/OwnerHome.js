import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';    
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';  
import { useAxios1 } from "../hooks/useAxios";
import card from '../images/card.png'



const btn = {
  height: '10%',
  margin: '2%',
  width: '70%',
}
const header = (
  
  <img alt="Card"         src={card}
  style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">

  </div>
);

const OwnerHome=()=>{
  const { Get, postData,Post } = useAxios1();
  const navigate = useNavigate();
  let { data, loading, error, refetch } = Post(`owner/owner`,{"Id":181});
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  }

  //console.log("``````````````````````````````````````",data);
  
          return (
        <>
        <Card title="" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0">
            <h1>welcome {data.Name}!</h1>
            <Button label="Load Advertisment" style={btn} onClick={()=>navigate("/owner/uploadAd")} /><br/><br/>
            <Button label="Pay For Approved Ad" style={btn} onClick={()=>navigate("/payment")}/><br/><br/>
            <Button label="Update Personal details" style={btn} onClick={()=>navigate("/owner/updatePersonalsDetail")}/><br/><br/>
            <Button label="Update Store Details" style={btn} onClick={()=>navigate("/owner/updateStoreDetails")}/><br/>
            </p>
        </Card>
        </>
        )  
}
export default OwnerHome



