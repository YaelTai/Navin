import React, {useState}from 'react'
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import '../MultiSelectDemo.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
// import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';  
// import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primeflex/primeflex.css';
// import '..//index.css';
import ReactDOM from 'react-dom';
import  { Component } from 'react';

let categoriesTemplate=(option)=> {
    return (
        <div className="country-item">
            {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
            <div>{option.name}</div>
        </div>
    );
}
let selectedCategoriesTemplate=(option)=> {
    if (option) {
        return (
            <div className="country-item country-item-value">
                {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
                <div>{option.name}</div>
            </div>
        );
    }

    return "Select Categories";
}

const UpdateStoreDetails=()=>{
 
    const [selectedStore, setSelectedStore] = useState(null);
    const [selectedCategories, setselectedCategories] = useState(null);
    const [ownerId, setownerId] = useState(null);

    const stores = [
        { name: 'New York'},
        { name: 'Rome' },
        { name: 'London'},
        { name: 'Istanbul' },
        { name: 'Paris'}
    ];


   const categories = [
        {name: 'shoes', code: ''},
        {name: 'cloting', code: 'BR'},
        {name: 'China', code: 'CN'},
        {name: 'Egypt', code: 'EG'},
        {name: 'France', code: 'FR'},
        {name: 'Germany', code: 'DE'},
        {name: 'India', code: 'IN'},
        {name: 'Japan', code: 'JP'},
        {name: 'Spain', code: 'ES'},
        {name: 'United States', code: 'US'}
    ];
    // countryTemplate = countryTemplate.bind(this);
    //    selectedCountriesTemplate = selectedCountriesTemplate.bind(this);

    return (
        
        
        <div style={{"marginTop":'5%'}} >
            <h1 >Update store details </h1>
            <label style={{"marginRight":'1%'}} >Choose the store which you want to update</label><br/><br/>
            <Dropdown  value={selectedStore} onChange={(e) => setSelectedStore( e.value)} options={stores} optionLabel="name" 
                placeholder="your stores" className="w-full md:w-14rem" style={{"width":"20%"}}/><br/>
            <br/><br/>
         <label style={{"marginRight":'1%'}} >update your store's categories</label>
      
            <MultiSelect value={selectedCategories} options={categories}  onChange={ (e) => setselectedCategories( e.value )} optionLabel="name" placeholder="Select Categories" filter className="multiselect-custom"
                        itemTemplate={categoriesTemplate} selectedItemTemplate={selectedCategoriesTemplate} />
        <br/><br/><br/>
        <label style={{"marginRight":'1%'}}>update owner id</label> 
        <InputNumber id="withoutgrouping" placeholder='214121865' onValueChange={(e) => setownerId(e.value)} mode="decimal" useGrouping={false} /> <br/><br/><br/>
        <Button label="Submit" icon="pi pi-check" />
        </div>
        
    )
         
}

 
export default UpdateStoreDetails