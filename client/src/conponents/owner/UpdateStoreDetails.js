import React, { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
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
  let base64data=""

const UpdateStoreDetails = () => {

  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCategories, setselectedCategories] = useState(null);
  const [visible, setVisible] = useState(false); 
  const [cats4Store, setCats4Store] = useState([]); 
  const [selectedcats4Store, setselectedsetCats4Store] = useState([]); 
  const [unsellescats, setunsellescats] = useState([]); 

  
   const toast = useRef(null);
   const accept=async()=>{

 console.log("444444444444",base64data);
    let res1 = await updateData('owner/store', {
      "Name":selectedStore.Name,
      "OwnerId":localStorage.getItem("user"),
       "Categories":selectedCategories || selectedcats4Store ? selectedCategories.concat(selectedcats4Store):[],
       "Logo":base64data?base64data:null
    })
res1.request.status==200?
toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Your details have been successfully updated', life: 3000 }):
toast.current.show({ severity: 'warn', summary: 'Rejected', detail:res1.response.data.message, life: 3000 });
   }
  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={async() => {
           accept()
           setVisible(false)
         
          }} autoFocus />


    </div>
);
  const { Get, postData, Post,updateData } = useAxios1();
  let myJSON=[]
  let _stores = Post(`owner/allStores`, { Id: localStorage.getItem("user") });
  let _allCats = Get(`owner/categories`);

  if (_stores.loading) {
    return <p>Loading...</p>;
  }
  if (_stores.error) {
    return <p>Error!</p>;
  }
  const stores = _stores.data;
  const ImportCats4Store = async (x) => {
    let _categories4Store = await postData(`owner/categoriesByStore`, {
      Id: x["Id"],
    });
// setselectedCategories()
   // setselectedCategories(_categories4Store.data);
   console.log("------------.",_allCats); 
    
   setCats4Store(_categories4Store.data);
let a=[];
   for (let i = 0; i < _allCats.data.length; i++) {
   if(! _categories4Store.data.filter(e=>e.Name==_allCats.data[i].Name).length!=0)
    a.push(_allCats.data[i])
   }   
    
   
setunsellescats(a)
  
    console.log("............",unsellescats); 
    
    // myJSON = JSON.parse(_categories4Store.data);
    // myJSON= JSON.stringify(_categories4Store.data)
    myJSON=_categories4Store.data.map(a => a.Name);
    //     _catego.......ries4Store.data.forEach(c => {
    //         setselectedCategories(c)
    //     });
  };

  const header = (
    <img alt="Card" src={card} style={{ width: "100%", height: "50px" }} />
  );
  const footer = <OwnerMenu />;
  // const toast = useRef(null);
  const onUpload = (  ) => {


  };
  
  

  const customBase64Uploader = async (event) => {

    // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
     
        base64data = reader.result;
       console.log();
    }
};
  return (
    <div style={{ marginTop: "5%" }}> 
    <Toast ref={toast} />

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
              ImportCats4Store(e.value);
            }}
            // onBlur={() => {
            //   ImportCats4Store();
            // }}
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
              <label>Update categories which the store provides:</label><br/><br/>
              <lable>add categories:</lable><br/>
              <MultiSelect
                value={selectedCategories}
                defaultValue={unsellescats}
                options={unsellescats}
                onChange={(e) => {
                  setselectedCategories(e.value)


                  }}
                optionLabel="Name"
                placeholder="Select Categories"
                filter
                className="multiselect-custom"
                itemTemplate={categoriesTemplate}
                selectedItemTemplate={selectedCategoriesTemplate}
              />

<br/> <br/><lable>remove categories:</lable><br/>
             <MultiSelect
                value={selectedcats4Store}
                defaultValue={null}
                options={cats4Store}
                onChange={(e) => {
                  setselectedsetCats4Store(e.value)
                  }}
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
              <Button label="Submit" icon="pi pi-check"  onClick={() =>
                {
                setVisible(true)}}/>
              <Dialog header="Please make sure the details you entered are correct"  visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
              <p className="m-0">changes for: {selectedStore.Name} </p>
                <p className="m-0">
                   
                    categories to add:{selectedCategories?selectedCategories.map((c)=><li>{c.Name}</li>):<lable>none</lable> }
                </p>
                <p className="m-0">
                   
                   categories to remove:{selectedcats4Store?selectedcats4Store.map((c)=><li>{c.Name}</li>):<lable>none</lable> } 
                  
               </p>
               <p className="m-0">
                   
                   {base64data?<lable>logo added</lable>:<lable></lable>  }
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
