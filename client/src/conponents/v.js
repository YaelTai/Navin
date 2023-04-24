import React, { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { useAxios1 } from "../hooks/useAxios";
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
const Approve = (props) => {
    
    const toast = useRef(null);
    const confirm1 = () => {
        confirmDialog({
          message: 'Are you sure you want to approve the ad?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept,
          reject
        });
      };
      const { Get, updateData } = useAxios1();
   
    const accept = async() => {
      const res = await updateData("manager/approveAd", { "Id": props.Ad.Id, "AdOwner": props.Ad.AdOwner })
      console.log(res);
      if (res.request.status == 201){toast.current.show({ severity: 'info', summary: 'Confirmed', detail:res.data , life: 3000 });
      props.refetch()
    }
    
      else toast.current.show({ severity: 'warn', summary: 'Rejected', detail: res.response.data.message, life: 3000 });
      
    
    }
  
   
  
  const reject = () => {
    return
  }

  return (
    <>
     {/* <Toast ref={toast} /> */}
     {/* <ConfirmDialog /> */}
     {/* <span className="card flex flex-wrap gap-2 justify-content-center"></span> */}
                <Button
                 
                  
                  icon="pi pi-check"
                  rounded
                  text
                  raised
                  aria-label="Filter"
                  style={{ marginLeft: "10px" }}
                  onClick={confirm1}
                  //onClick={confirm1}
                //onClick={()=>approveMsg(ad)}
                />     
    </>
  );
};
export default Approve;
