
import React, { useState, useRef} from "react";
import { Camera } from "react-camera-pro";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import card from '../images/card.png'
import { useAxios1 } from "../hooks/useAxios";
import { AutoComplete } from "primereact/autocomplete";

import 'primeicons/primeicons.css';
const UserHome = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [filteredStores, setfilteredStores] = useState(null);
  const { Get } = useAxios1();
  let stores_ = Get(`visitor/stores`);

  let stores = stores_.data;
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


  const header = (
    <img alt="Card"         src={card}
    style={{ "width": "98%", "height": "50px" }} />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">

    </div>
  );
  const navigate = useNavigate();

  return (
    <Card title="Welcome!" footer={footer} header={header} className="md:w-25rem" style={{overflowY:"auto", "margin": "2%", "width": "95%", "height": "95%" }}>
      <p className="m-0">
        <h4>Please take a picture of the store sign to your right:</h4>
       
       

        {!image || !selectedStore  ? <><Camera ref={camera} aspectRatio={8 / 5} />
          <br /><Button label="take a picture" icon="pi-camera" onClick={() => {

            setImage(camera.current.takePhoto())

          }} /><br/><br/> <lable>Having no camera? choose store from the list:  </lable>
          <AutoComplete
          value={selectedStore}
          suggestions={filteredStores}
          completeMethod={searchStores}
          virtualScrollerOptions={{ itemSize: 38 }}
          field="Name"
          dropdown
          onChange={(e) => {setSelectedStore(e.value);navigate("/visitor/presentLocation")}}

        />
        </> : <>
          
          <img src={image} alt='Taken photo' style={{ "width": "70%" }} />

          <h4>you are near:  XXXX </h4>

          <span className="p-buttonset">

            <Button label="Yes!" icon="pi pi-check" onClick={() => navigate("/visitor/presentLocation")} 
/>
            <br /><br />

            <Button label="Canceling and reshooting" icon="pi pi-times" onClick={() => {

              setImage("")

            }} />
          </span></>
        }


      </p>
    </Card>

  );
}

export default UserHome;

