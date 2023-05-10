import React, {useRef} from 'react'; 
import { MegaMenu } from 'primereact/megamenu';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
export default function VisitorMenu() {
    const navigate = useNavigate();
    const menu = useRef(null);


    const items = [
        {
        label: 'Place re-recognition',
        icon: 'pi pi-fw pi-camera',
        command:()=>{navigate("/visitor")}
    },
        {label: 'Edit route',
        icon: 'pi pi-fw pi-replay' ,
        command:()=>{navigate("/visitor/chooseStores")}
        
 },
 {label: 'Watch shopping List',
 icon: 'pi pi-fw pi-eye' ,
 command:()=>{navigate("/visitor/destList")}
 
}
       
    ];

    return (
        <div className="card ">
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <Button style={{"backgroundColor":"rgb(173,222,78)"}} label="Menu" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} />
        </div>
    )
}
    