import React, {useState}from 'react'
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import OwnerMenu from './menues/ownerMenu';                                                               
import { Card } from 'primereact/card'; 
import { useAxios1 } from "../hooks/useAxios";
import card from '../images/card.png'

// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
// import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primeflex/primeflex.css';
// import '..//index.css';
// import ReactDOM from 'react-dom';
// import  { Component } from 'react';

let categoriesTemplate = (option) => {
  return (
    <div className="country-item">
      <div>{option.Name}</div>
    </div>
  );
};
let selectedCategoriesTemplate = (option) => {
  if (option) {
    return (
      <div className="country-item country-item-value">
        <div>{option.Name}</div>
      </div>
    );
  }

  return "Select Categories";
};

const UpdateStoreDetails = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCategories, setselectedCategories] = useState(null);
  const [ownerId, setownerId] = useState(null);

  const { Get, postData, Post } = useAxios1();

  let _stores = Post(`owner/allStores`, { Id: localStorage.getItem("user") });
  let _allCats = Get(`owner/categories`);

  if (_stores.loading) {
    return <p>Loading...</p>;
  }
  if (_stores.error) {
    return <p>Error!</p>;
  }
  const stores = _stores.data;
  const ImportCats4Store = async () => {
    let _categories4Store = await postData(`owner/categoriesByStore`, {
      Id: selectedStore["Id"],
    });

    setselectedCategories([..._categories4Store.data]);
    //     _categories4Store.data.forEach(c => {
    //         setselectedCategories(c)
    //     });
  };

  const header = (
    <img alt="Card"         src={card}
    style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
    <OwnerMenu/>
    //<Button  radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
);

  return (
    <div style={{ marginTop: "5%" }}>
      <Card
        title="Update Your Store Details"
        footer={footer}
        header={header}
        className="md:w-25rem"
        style={{
          margin: "2%",
          width: "95%",
          height: "98%",
          position: "fixed",
          overflowY: "auto",
        }}
      >
        <p className="m-0">
          <label style={{ marginRight: "1%", width: "30%" }}>
            Choose the store which you want to update
          </label>
          <br />
          <br />
          <Dropdown
            value={selectedStore}
            onChange={(e) => {
              setSelectedStore(e.value);
            }}
            onBlur={async () => {
              ImportCats4Store();
            }}
            options={stores}
            optionLabel="Name"
            placeholder="your stores"
            className="w-full md:w-14rem"
            style={{ width: "15%" }}
          />
          {selectedStore ? (
            <>
              <br />
              <br />
              <br />
              <label style={{ marginRight: "1%" }}>
                update your store's categories
              </label>
              <MultiSelect
                value={selectedCategories}
                options={_allCats.data}
                onChange={(e) => setselectedCategories(e.value)}
                optionLabel="Name"
                placeholder="Select Categories"
                filter
                className="multiselect-custom"
                itemTemplate={categoriesTemplate}
                selectedItemTemplate={selectedCategoriesTemplate}
              />

              <br />
              <br />
              <br />
              <label style={{ marginRight: "1%" }}>update owner id</label>
              <InputNumber
                id="withoutgrouping"
                placeholder="214121865"
                onValueChange={(e) => setownerId(e.value)}
                mode="decimal"
                useGrouping={false}
              />
              <Button label="Submit" icon="pi pi-check" />
            </>
          ) : (
            <>
              <br />
              <br />
              <br />
            </>
          )}
        </p>
      </Card>
    </div>
  );
};

export default UpdateStoreDetails;
