import React, { useEffect, useState,useRef } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import ManagerMenu from "./menues/managerMenu";
import { useAxios1 } from "../hooks/useAxios";
import { Toast } from 'primereact/toast';

const AppoveAds = () => {
 //const [waitingAds, setwaitingAds] = useState([]);
 const toast = useRef(null);
 const showError = (msg) => {
  toast.current.show({
    severity: "error",
    summary: "Error",
    detail: msg,
    life: 3000,
  });
};
const showSuccess = (msg) => {
  toast.current.show({
    severity: "success",
    summary: "Success",
    detail: msg,
    life: 3000,
  });
};
  const { Get ,updateData} = useAxios1(); 
let { data, loading, error, refetch } = Get(`manager/ads`);
   if (loading) {
     return <p>Loading...</p>;
   }
   if (error) {
     return <p>Error!</p>;
   }
   ///setwaitingAds(data)
// setwaitingAds([...data])

   //[
  //   {
  //     id: "123",
  //     img: "https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg",
  //     storeName: "zara",
  //   },
  //   {
  //     id: "1234",
  //     img: "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
  //     storeName: "h&m",
  //   },
  // ];
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
      style={{ width: "98%", height: "50px" }}
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
    </div>
  );
const approveMsg = async(ad)=>{
 debugger
  const res=await updateData("manager/approveAd",{"Id":ad.Id,"AdOwner":ad.AdOwner})
  console.log(res);
  if(res.request.status==201) {showSuccess(res.data);}
   else showError(res.response.data.message);
   refetch()
}

const rejectedMsg=async(ad)=>{
  await updateData("manager/refuseAd",{"Id":ad.Id,"AdOwner":ad.AdOwner})
  refetch()
}
  return (
    <>  <Toast ref={toast} />
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
        }}
      >
        <p className="m-0">
      
          <h5>Do you want to approve the ad?</h5>
          <ul style={{ listStyle: "none", marginRight: "10%" }}>
            {data.map((ad,index) => (
              <li>
                <Image
                  src={ad.img}
                  alt="Image"
                  width="250"
                  preview
                  p-button-text
                  style={{ marginLeft: "10px" }}
                />
                <br /><br />
                
                <span>From: {ad.StartDate}</span><br/>
                <span>To: {ad.EndDate}</span><br/><br/>

                <Button
                //yes
                  id={index}
                  icon="pi pi-check"
                  rounded
                  text
                  raised
                  aria-label="Filter"
                  style={{ marginLeft: "10px" }}
                  onClick={()=>approveMsg(ad)}
                />
                <Button
                //no
                  icon="pi pi-times"
                  rounded
                  text
                  raised
                  severity="danger"
                  aria-label="Cancel"
                  style={{ marginLeft: "10px" }}
                  onClick={()=>rejectedMsg(ad)}
                />
                <br />
                <br />
              </li>
            ))}
          </ul>
          <ManagerMenu />
       
        </p>
      </Card>
    </>
  );
};
export default AppoveAds;
