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
import { useNavigate } from "react-router-dom";

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
  const [selectedCategories, setselectedCategories] = useState([]);//to add
  const [visible, setVisible] = useState(false); 
  const [cats4Store, setCats4Store] = useState([]); //current
  const [selectedcats4Store, setselectedsetCats4Store] = useState([]); //to remove
  const [unsellescats, setunsellescats] = useState([]); 

  const navigate = useNavigate();

   const toast = useRef(null);
const accept=async()=>{
let categoriesToUpdate=[];
if(selectedCategories.length==0 && selectedcats4Store.length==0) categoriesToUpdate=cats4Store//no changes
if(selectedCategories.length!=0&&selectedcats4Store.length==0) //only adding
{categoriesToUpdate=selectedCategories.concat(cats4Store)

}
if(selectedCategories.length==0 && selectedcats4Store.length!=0)//only removing 
{
  //if category not exists in selectedcats4Store
    // for (let i = 0; i < cats4Store.length; i++) {
    // if(selectedcats4Store.filter(e=>e.Name!=cats4Store[i].Name).length!=0)
    //   categoriesToUpdate.push(selectedcats4Store[i])
    // }  
     categoriesToUpdate = cats4Store.filter(cat => !selectedcats4Store.includes(cat));
    // console.log("only removing",categoriesToUpdate); 
  }
//remove and add
if(selectedCategories.length!=0&&selectedcats4Store.length!=0)
{console.log("22222222222222222");
//   categoriesToUpdate = cats4Store.filter(cat => !selectedcats4Store.includes(cat));
//  console.log("remove",categoriesToUpdate);
//   categoriesToUpdate.concat(selectedCategories)  
categoriesToUpdate= cats4Store.concat(selectedcats4Store, selectedCategories).filter(cat => !selectedcats4Store.includes(cat));
    console.log("remove and add",categoriesToUpdate);
}
categoriesToUpdate=categoriesToUpdate.map((c)=>{return c.Name})
console.log(categoriesToUpdate);
    let res1 = await updateData('owner/store', {
      "Name":selectedStore.Name,
      "OwnerId":localStorage.getItem("user"),
       "Categories": categoriesToUpdate,
       "Logo":base64data?base64data:null
    })
if(res1.request.status==200){
toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Your details have been successfully updated', life: 3000 })
setTimeout(() => {
  navigate("/owner/")
}, 3000);
}
else
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
  let unselled=[];
   for (let i = 0; i < _allCats.data.length; i++) {
   if(! _categories4Store.data.filter(e=>e.Name==_allCats.data[i].Name).length!=0)
   unselled.push(_allCats.data[i])
   }   
    
   
setunsellescats(unselled)
  
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
              <label>add categories:</label><br/>
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

<br/> <br/><label>remove categories:</label><br/>
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

              <label>Load logo:</label>
              
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
                   
                    categories to add:{selectedCategories?selectedCategories.map((c)=><li>{c.Name}</li>):<label>none</label> }
                </p>
                <p className="m-0">
                   
                   categories to remove:{selectedcats4Store?selectedcats4Store.map((c)=><li>{c.Name}</li>):<label>none</label> } 
                  
               </p>
               <p className="m-0">
                   
                   {base64data?<label>logo added</label>:<label></label>  }
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

export default UpdateStoreDetails
