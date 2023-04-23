import React, {useState}from 'react'
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import '../MultiSelectDemo.css';
import { Card } from 'primereact/card'; 
import { useAxios1 } from "../hooks/useAxios";

// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
// import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';  
// import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primeflex/primeflex.css';
// import '..//index.css';
// import ReactDOM from 'react-dom';
// import  { Component } from 'react';

let categoriesTemplate=(option)=> {
    return (
        <div className="country-item">
            {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
            <div>{option.Name}</div>
        </div>
    );
}
let selectedCategoriesTemplate=(option)=> {
    if (option) {
        return (
            <div className="country-item country-item-value">
                {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
                <div>{option.Name}</div>
            </div>
        );
    }

    return "Select Categories";
}

const UpdateStoreDetails=()=>{
 
    const [selectedStore, setSelectedStore] = useState(null);
    const [selectedCategories, setselectedCategories] = useState(null);
    const [ownerId, setownerId] = useState(null);
    const [categories, setCategories] = useState([]);

    // const stores = [
    //     { name: 'New York'},
    //     { name: 'Rome' },
    //     { name: 'London'},
    //     { name: 'Istanbul' },
    //     { name: 'Paris'}
    // ];
    const { Get, postData ,Post} = useAxios1();

    let _stores = Post(`owner/allStores`,{"Id":181});
    
    if (_stores.loading) {
        return <p>Loading...</p>;
    }
    if (_stores.error) {
        return <p>Error!</p>;
    }
const stores=_stores.data
const ImportCats4Store = async () => {
    console.log("ImportCats4Store",selectedStore["Id"]);
    let cats4store = await postData(`owner/categoriesByStore`, {"Id": selectedStore.Id});
setCategories(cats4store.data) 
   console.log("stores4catttttttttttttttttttttttt",cats4store.data);  
    // setStoresForCat([...stores4cat.data]);
    console.log("llllllllllllllll",categories);
    
  };



    const header = (
  
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
      );
      const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
      
        </div>
      );

    return (
        <div style={{"marginTop":'5%'}} >
        <Card title="Update Your Store Details" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%" ,"position":'fixed',overflowY:"auto"}}>
            <p className="m-0">
        
           
            <label style={{"marginRight":'1%'}} >Choose the store which you want to update</label><br/><br/>
            <Dropdown  value={selectedStore} onChange={(e) => {setSelectedStore( e.value) ;ImportCats4Store() }}

        
         options={stores} optionLabel="Name" 
                placeholder="your stores" className="w-full md:w-14rem" style={{"width":"15%"}}/><br/>
            <br/><br/>
         <label style={{"marginRight":'1%'}} >update your store's categories</label>
      
            <MultiSelect value={selectedCategories} options={categories}  onChange={ (e) => setselectedCategories( e.value )} optionLabel="Name" placeholder="Select Categories" filter className="multiselect-custom"
                        itemTemplate={categoriesTemplate} selectedItemTemplate={selectedCategoriesTemplate}  display="chip"/>
        <br/><br/><br/>
        <label style={{"marginRight":'1%'}}>update owner id</label> 
        <InputNumber id="withoutgrouping" placeholder='214121865' onValueChange={(e) => setownerId(e.value)} mode="decimal" useGrouping={false} /> <br/><br/><br/>
        <Button label="Submit" icon="pi pi-check" />
        </p>
        </Card>
        </div>

    )       
}

 
export default UpdateStoreDetails