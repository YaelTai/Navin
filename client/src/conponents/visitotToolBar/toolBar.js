import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { FcRotateCamera } from "react-icons/fc";
import './DockDemo.css';
import { Button } from 'primereact/button';
import { FcWorkflow } from "react-icons/fc";
export default function ToolBar() {
    
      
    const items = [
        
        {
            label: 'Finder',
            icon: () =><h1><FcRotateCamera className='zoom'/></h1>
           
           
          
           
        },
       
            
       
           
           
          
           
        
        {
            label: 'App Store',
            icon: () =><h1><FcWorkflow className='zoom'/></h1>
               
        },
       
    ];

   

    return (
        
            <div className="dock-window" >
                <Dock model={items} position='bottom' />
               
            </div>
     
    )
}