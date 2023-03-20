import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import './DockDemo.css';

export default function ToolBar() {
    
      
    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

   

    return (
        
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position='bottom' />
            </div>
     
    )
}