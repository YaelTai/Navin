import React, { useEffect, useState, useRef } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import ManagerMenu from "./menues/managerMenu";
import { useAxios1 } from "../hooks/useAxios";
import { Toast } from 'primereact/toast';
import Approve from "./v";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const AppoveAds = () => {
  let Ad;
  const toast = useRef(null);
const confirm2 = () => {
  // debugger;
    confirmDialog({
      message: 'Do you want to reject this ad?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept,
      reject
    });
  };

  const accept = async() => {
    // debugger;
    const res =  await updateData("manager/refuseAd", { "Id": Ad.Id, "AdOwner": Ad.AdOwner })
    console.log(res);
    debugger
    if (res.status == 201){ console.log("yes");   toast.current.show({ severity: 'info', summary: 'Confirmed', detail:res.data , life: 3000 });
    refetch()
  }
  
    else toast.current.show({ severity: 'warn', summary: 'Rejected', detail: res.response.data.message, life: 3000 });
  }
const reject = () => {
 return
}
  const { Get, updateData } = useAxios1();
  let { data, loading, error, refetch } = Get(`manager/ads`);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  }

  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
      style={{ width: "98%", height: "50px" }}
    />
  );
  
  const footer = (
    <div style={{ position: 'relative', height: '350px' }}>
 

  <ManagerMenu/>
</div>
  );

   return (<>
<Card
      title="Approve ads"
      footer={footer}
      header={header}
      className="md:w-25rem"
      style={{
        margin: "2%",
        width: "95%",
        height: "98%",
        position: "fixed",
        overflowY: "auto",
        textAlign:"center"
      }}
    >
      <p className="m-0">
      
        <ConfirmDialog />
       <Toast ref={toast} />
        <h5>Advertisements awaiting approval:</h5>
        <h6>You can choose to approve or reject.</h6>
        <ul style={{ listStyle: "none", marginRight: "10%",textAlign:"center"}}>
          
          {data.map((ad, index) => (
     
            <li> 
              {console.log("ad",ad.Img)} 
              <Image
                src={ad.Img}
                alt="Image"
                width="250"
                preview
                p-button-text
                style={{ marginLeft: "10px" }}
              />
              <br /><br />

              <span>From: {ad.StartDate}</span><br />
              <span>To: {ad.EndDate}</span><br /><br />            
                <span className="card flex flex-wrap gap-2 justify-content-center">
              <Approve refetch={refetch} Ad={ad}/>

              <Button
                //no
                icon="pi pi-times"
                rounded
                text
                raised
                severity="danger"
                aria-label="Cancel"
                style={{ marginLeft: "10px" }}
                onClick={()=>{Ad=ad;confirm2();}}
              /></span>
              <br />
              <br />
            </li>
            
          ))}
        </ul>
   

      </p>
    </Card>
  </>
  );
};
export default AppoveAds;
