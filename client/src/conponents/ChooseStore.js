import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { BiWalk } from "react-icons/bi";
import { useAxios1 } from "../hooks/useAxios";
import { MultiSelect } from "primereact/multiselect";
import Ads from "./ads";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const footer = <div className="flex flex-wrap justify-content-end gap-2"></div>;

export default function ChooseStores() {
  const [selectedStore, setSelectedStore] = useState(null);
  //const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredStores, setfilteredStores] = useState(null);
  const [filteredCategories, setfilteredCategories] = useState(null);
  const [selectedstoresForCat, setselectedstoresForCat] = useState([]);
  const [storesForCat, setStoresForCat] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const header = selectedCategory? <Ads Cat={{"Id":selectedCategory.Id}} setselectedstoresForCat={setselectedstoresForCat} setSelectedStore={setSelectedStore} selectedstoresForCat={selectedstoresForCat}/>:<h1>ads will be here</h1>;
  const { Get, postData } = useAxios1();

  let stores_ = Get(`visitor/stores`);
  let categories_ = Get(`visitor/categories`);
  let stores = stores_.data;
  let categories = categories_.data;
  console.log(categories);
  console.log(stores);

  // if (loadingStores) {
  //   return <p>Loading...</p>;
  // }
  // if (errorStores) {
  //   return <p>Error!</p>;
  // }
  // const stores = stores_;

  // let { data: categories_, loading:loadingCategories, error:errorCategories, refetch :refetchCategories } = Get(`visitor/categories`);
  // if (loadingCategories) {
  //   return <p>Loading...</p>;
  // }
  // if (errorCategories) {
  //   return <p>Error!</p>;
  // }

  const ImportStoresForCategory = async () => {
    console.log("ImportStoresForCategory");
    let stores4cat = await postData(`visitor/storesForCategory`, {CatId: selectedCategory.Id,
    });
    console.log("stores4catttttttttttttttttttttttt",stores4cat.data);  
    setStoresForCat([...stores4cat.data]);
    //console.log("llllllllllllllll",storesForCat);
    
  };
  // useEffect(() => {
  //   if (selectedCategory != null) {
  //     myData()
  //
  //     console.log("33333333333" + c1);

  //   }
  // }, [selectedCategory])

  const searchStores = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
    let query = event.query;
    let _filteredStores = [];

    for (let i = 0; i < stores.length; i++) {
      const store = stores[i];
      if (store.Name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        _filteredStores.push(store);
      }
    }

    setfilteredStores(_filteredStores);
  };
  const searchCategories = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
    let query = event.query;
    let _filteredCategories = [];

    for (let i = 0; i < stores.length; i++) {
      const cat = categories[i];
      if (cat.Name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        _filteredCategories.push(cat);
      }
    }

    setfilteredCategories(_filteredCategories);
  };

  const storeforCatTemplate = (option) => {
    return (
      
      <div className="flex align-items-center">
        <div>{option.Name}</div>
      </div>
    );
  };

  const panelFooterTemplate = () => {
    const length = selectedstoresForCat ? selectedstoresForCat.length : 0;

    return (
      <div className="py-2 px-3">
        <b>{length}</b> item{length > 1 ? "s" : ""} selected.
      </div>
    );
  };

  return (
    <Card
      title="Let's create the best route for you!"
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
        <lable>select by store name</lable>
        <br />
        <AutoComplete
          value={selectedStore}
          suggestions={filteredStores}
          completeMethod={searchStores}
          virtualScrollerOptions={{ itemSize: 38 }}
          field="Name"
          dropdown
          onChange={(e) => {
            console.log("e.val",e.value);
            setSelectedStore(e.value)
            if(!selectedstoresForCat.find((s)=>s.Name===e.value.Name))
              setselectedstoresForCat([...selectedstoresForCat,e.value]);
            
            
            }
           }
       
        />
        <br />
        <br />
        <lable>select by category</lable>
        <br/>
        <AutoComplete
          value={selectedCategory}
          suggestions={filteredCategories}
          completeMethod={searchCategories}
          virtualScrollerOptions={{ itemSize: 38 }}
          field="Name"
          dropdown
          onChange={(e) => {
            console.log(e.value);
            {setSelectedCategory(e.value);}
          }}
          onBlur={async () => {
            await ImportStoresForCategory();
            console.log("imported");
          }}
           
        />
        <br />
        <br />
        <br />
        {selectedCategory ? (
          <>
            <lable>Stores that sell {selectedCategory.Name}:</lable>
            <br />
            <MultiSelect
              value={selectedstoresForCat}
              options={storesForCat}
              optionLabel="Name"
              onChange={(e) => { console.log("e.value*********",storesForCat);
              console.log(selectedstoresForCat,"selectedstoresForCat");
                setselectedstoresForCat(e.value);
              }}

              placeholder="Select  store"
              itemTemplate={storeforCatTemplate}
              panelFooterTemplate={panelFooterTemplate}
              className="w-full md:w-20rem"
            />
          </>
        ) : (
          <></>
        )}
        <>
          <Button
            label="Let's Go"
            icon={BiWalk}
            style={{ color: "greenyellow", marginLeft: "65%" }}
          />
        </>
        <h4>selected stores</h4>
        <ul style={{ "list-style": "none", marginRight: "10%" }}>
          {selectedstoresForCat.map((store, index) => (
            <li>
              <i
                className="pi pi-times"
                style={{ color: "green", size: "20px" }}
                onClick={(e) => {
                  setselectedstoresForCat((s) => [
                    ...s.slice(0, index),
                    ...s.slice(index + 1, s.length),
                  ]);
                }}
              ></i>
              {store.Name}
            </li>
          ))}
        </ul>
      </p>
    </Card>
  );
}
