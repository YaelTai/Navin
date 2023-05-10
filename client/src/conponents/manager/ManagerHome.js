import React from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";    
import card from '../../images/card.png'

// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
// import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css';  
const btn = {
  height: '10%',
  margin: '3%',
  width: '70%',


}
const header = (
  
  <img alt="Card"         src={card}
  style={{ "width": "100%", "height": "50px"}} />
);
const footer = (
  <div className="flex flex-wrap justify-content-end gap-2">

  </div>
);
const ManagerHome=()=>{
  const navigate = useNavigate();
          return (
      <>
          
    <Card title="Welcome Manager!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0 text-overflow-clip">
            <h1>welcome manager!</h1>
            <Button label="Add categories" style={btn} onClick={()=>navigate("/manager/updateCategories")}/><br/>
            <Button label="Add Store Owner" style={btn} onClick={()=>navigate("/manager/AddOwner")}/><br/>
            <Button label="Add new Store" style={btn} onClick={()=>navigate("/manager/addStore")}/><br/>
            <Button label="Remove Store" style={btn} onClick={()=>navigate("/manager/removeStore")}/><br/>
            <Button label="Approve Ads" style={btn} onClick={()=>navigate("/manager/approveAds")}/><br/>
            <Button label="Update PriceList" style={btn} onClick={()=>navigate("/manager/UpdatePriceList")}/><br/>
            </p>
        </Card>
        </>
        )  
}
export default ManagerHome



