import React, { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import OwnerMenu from "../menues/ownerMenu";
import { Card } from "primereact/card";
import { useAxios1 } from "../../hooks/useAxios";
import card from "../../images/card.png";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { Dialog } from 'primereact/dialog';

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
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
);
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
    console.log("............",selectedCategories);
    //     _catego.......ries4Store.data.forEach(c => {
    //         setselectedCategories(c)
    //     });
  };

  const header = (
    <img alt="Card" src={card} style={{ width: "100%", height: "50px" }} />
  );
  const footer = <OwnerMenu />;
  // const toast = useRef(null);
  const onUpload = (  ) => {};
  
    let base64data;

  const customBase64Uploader = async (event) => {
console.log("sdfghjk");
    // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
        base64data = reader.result;

    }
};
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
            onBlur={() => {
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
              <label>Update categories which the store provides</label>
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

              <lable>Load logo:</lable>
              
              <FileUpload
                mode="basic"
                name="demo[]"
                url="/api/upload"
                accept="image/*"
                maxFileSize={1000000}
                onUpload={onUpload}
                customUpload 
                uploadHandler={customBase64Uploader}
                auto
                chooseLabel="Upload"
              /> <br/>
              <Button label="Submit" icon="pi pi-check"  onClick={() => setVisible(true)}/>
              <Dialog header="Please make sure the details you entered are correct"  visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <p className="m-0">
                {/* Category Fee: {CategoryFee? CategoryFee:data.CategoryFee} */}
                </p>
            </Dialog>
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
