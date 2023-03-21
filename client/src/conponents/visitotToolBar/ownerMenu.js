import { useState } from "react";
import { Dock } from "primereact/dock";
import { FcRotateCamera } from "react-icons/fc";
import "./DockDemo.css";
import { Button } from "primereact/button";
import { FcWorkflow } from "react-icons/fc";
import { AiFillHome } from "react-icons/ai";

export default function OwnerMenu() {
  const items = [
    {
      label: "Finder",
      icon: () => (
        <>
       <lable><AiFillHome className="zoom"/></lable>
        <lable>Home</lable>
        </>
      ),
    },
   

    
  ];

  return (
    <div className="dock-window">
      <Dock model={items} position="bottom" />
    </div>
  );
}
