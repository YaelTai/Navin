import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom";

export default function VisitorMenu() {
    const navigate = useNavigate();


    const items = [
        {label: 'place re-recognition',
        icon: 'pi pi-fw pi-camera',
        command:()=>{navigate("/visitor")}
    },
        {label: 'Create  route again',
        icon: 'pi pi-fw pi-replay' ,
        command:()=>{navigate("/visitor/chooseStores")}
        
 },
       
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
    