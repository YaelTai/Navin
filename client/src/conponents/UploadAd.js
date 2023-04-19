import { FileUpload } from 'primereact/fileupload';
import React, { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { Accordion, AccordionTab } from 'primereact/accordion';
import PriceList from './priceList'
const stores = [
    { name: 'New York'},
    { name: 'Rome' },
    { name: 'London'},
    { name: 'Istanbul' },
    { name: 'Paris'}
];
const categories = [
    { name: 'shoes', code: '' },
    { name: 'cloting', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }]
const header = (

    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">

    </div>
);
let categoryTemplate = (option) => {
    return (
        <div className="country-item">
            {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
            <div>{option.name}</div>
        </div>
    );
}
let selectedCategoriesTemplate = (option) => {
    if (option) {
        return (
            <div className="country-item country-item-value">
                {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
                <div>{option.name}</div>
            </div>
        );
    }

    return "Select categories";
}
const UploadAd = () => {
    const [selectedStore, setSelectedStore] = useState(null);
    const [selectedCategories, setselectedCategories] = useState(null);
    const [from, setfrom] = useState('');
    const [to, setto] = useState(null);

    const navigate = useNavigate();

    return <>
        <Card title="Upload an Ad" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%", "position": 'fixed', overflowY: "auto" }}>
            <p className="m-0">
                {/* <Button label="watch Price List" icon="pi pi-eye" onClick={() => navigate("/owner/priceList")} /><br /><br /> */}
                <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Watch Price List">
                    
                        <PriceList/>
                    
                </AccordionTab>
               
            </Accordion>
        </div>
                <lable>1. Load file</lable><br /><br />
                <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} /><br></br>
                <label style={{"marginRight":'1%'}} >2. choose store for the ad </label><br/><br/>
              <Dropdown  value={selectedStore} onChange={(e) => setSelectedStore( e.value)} options={stores} optionLabel="name" 
                placeholder="your stores" className="w-full md:w-14rem" style={{"width":"15%"}}/><br/><br/>
                <lable>3. Choose in which categories the ad will be displayed</lable><br></br><br></br>
                <MultiSelect value={selectedCategories} options={categories} onChange={(e) => setselectedCategories(e.value)} optionLabel="name" placeholder="Select Categories" filter className="multiselect-custom"
                    itemTemplate={categoryTemplate} selectedItemTemplate={selectedCategoriesTemplate} /><br></br><br></br>
                <lable>4. Start and end date for your ad:</lable><br></br><br></br>
                {/* <Calendar value={date} onChange={(e) => setDate(e.value)} /> */}
                <lable style={{ "marginRight": "10px" }}>from:</lable><Calendar value={from} onChange={(e) => { setfrom(new Date(e.target.value)) }} /><br></br><br></br>
                <lable style={{ "marginRight": "10px" }}>to:</lable><Calendar value={to} onChange={(e) => setto(new Date(e.target.value))} /> <br></br><br></br>
                <lable>5. Estimated cost</lable>
                <h1>$$$$</h1>
                <Button label="Send Request To Manager" icon="pi pi-check" />

            </p>
        </Card>
    </>
}
export default UploadAd