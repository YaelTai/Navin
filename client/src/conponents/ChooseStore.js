import React, {  useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { Card } from 'primereact/card';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
const header = (

    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" style={{ "width": "98%", "height": "50px" }} />
);
const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">

    </div>
);
export default function ChooseStores() {

    const [selectedStore, setSelectedStore] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredStores, setfilteredStores] = useState(null);
    const [filteredCategories, setfilteredCategories] = useState(null);
    const [selectedstoresForCat, setselectedstoresForCat] = useState(null);
    const [storesTovisit, setStoresTovisit] = useState([]);

    const storesForCat = [
        { id: 1, Name: "zara" },
        { id: 1, Name: "h&m" },
        { id: 1, Name: "h&o" },
    ];


    const stores = [
        { id: 1, Name: "zara" },
        { id: 1, Name: "h&m" },
        { id: 1, Name: "h&o" },
    ]
    const categories = [
        { id: 1, Name: "shoes" },
        { id: 1, Name: "clothing" },
        { id: 1, Name: "food" },
    ]



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
    }
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
    }


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
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };



    return (
        <Card title="Lets create the best route for you!" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%", "position": 'fixed' }}>
            <p className="m-0">


                <lable>select by store name</lable>
                <AutoComplete value={selectedStore} suggestions={filteredStores} completeMethod={searchStores}
                    virtualScrollerOptions={{ itemSize: 38 }} field="Name" dropdown onChange={(e) => setStoresTovisit([...storesTovisit ,e.value])} /><br></br>
                <lable>select by category</lable><br></br>
                <AutoComplete value={selectedCategory} suggestions={filteredCategories} completeMethod={searchCategories}
                    virtualScrollerOptions={{ itemSize: 38 }} field="Name" dropdown onChange={(e) => setSelectedCategory(e.value)} />
                {selectedCategory ? <MultiSelect value={selectedstoresForCat} options={storesForCat} onChange={(e) => setselectedstoresForCat(e.value)} optionLabel="Name"
                    placeholder="Select stores" itemTemplate={storeforCatTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" /> : <></>}
            </p>



        </Card>
    );
}





