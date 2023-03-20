import { FileUpload } from 'primereact/fileupload';
import React, { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

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

    const [selectedCategories, setselectedCategories] = useState(null);
    const [from, setfrom] = useState('');
    const [to, setto] = useState(null);
   

    return <>
    
        <Button label="watch price list"  />
        <h1>Upload Ad</h1>
        <lable>1. Load file</lable>
        <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} /><br></br>
        <lable>2. Choose in which categories the ad will be displayed</lable><br></br><br></br>
        <MultiSelect value={selectedCategories} options={categories} onChange={(e) => setselectedCategories(e.value)} optionLabel="name" placeholder="Select Categories" filter className="multiselect-custom"
            itemTemplate={categoryTemplate} selectedItemTemplate={selectedCategoriesTemplate} /><br></br><br></br>
             <lable>3. Start and end date for your ad:</lable><br></br><br></br>
             {/* <Calendar value={date} onChange={(e) => setDate(e.value)} /> */}
            <lable>from:</lable><Calendar value={from} onChange={(e) =>{ setfrom( new Date(e.target.value))}}  /><br></br><br></br>
            <lable>to:</lable><Calendar value={to} onChange={(e) => setto(new Date(e.target.value))} /> <br></br><br></br>
            <lable>4. Estimated cost</lable>  
            <h1>$$$$</h1>  
            <Button label="Send Request To Manager" icon="pi pi-check" />


    </>
}
export default UploadAd