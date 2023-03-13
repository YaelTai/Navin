import React, {useState}from 'react'
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';  

const UpdateStoreDetails=()=>{
 
    const [selectedStore, setSelectedStore] = useState(null);
    const stores = [
        { name: 'New York'},
        { name: 'Rome' },
        { name: 'London'},
        { name: 'Istanbul' },
        { name: 'Paris'}
    ];

    return (
        <div className="card flex justify-content-center" style={{"textAlign":"center","marginTop":'5%'}}>
            <Dropdown value={selectedStore} onChange={(e) => setSelectedStore(e.value)} options={stores} optionLabel="name" 
                placeholder="בחר חנות שברצונך לעדכן" className="w-full md:w-14rem" />
        </div>
    )
         
}
export default UpdateStoreDetails