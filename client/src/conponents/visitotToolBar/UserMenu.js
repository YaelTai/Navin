import { useState } from "react";
import { Dock } from "primereact/dock";
import { FcRotateCamera } from "react-icons/fc";
import "./DockDemo.css";
import { Button } from "primereact/button";
import { FcWorkflow } from "react-icons/fc";


export default function UserMenu() {
  const items = [
    {
      label: "Finder",
      icon: () => (
        <>
        <lable>
          <FcRotateCamera className="zoom"  />
        </lable>
        <lable>Where am I?</lable>
        </>
      ),
    },
   

    {
      label: "App Store",
      icon: () => (
      <>
        <lable>
          <FcWorkflow className="zoom" />
        </lable>
        <small>Rebuild   route</small>
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
