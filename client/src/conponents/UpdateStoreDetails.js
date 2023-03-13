import React, {useState}from 'react'
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';  
import { Checkbox } from "primereact/checkbox";

const UpdateStoreDetails=()=>{
 
    const [selectedStore, setSelectedStore] = useState(null);
    const stores = [
        { name: 'New York'},
        { name: 'Rome' },
        { name: 'London'},
        { name: 'Istanbul' },
        { name: 'Paris'}
    ];
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };
    return (
        
        
        <div className="card flex justify-content-center" style={{"textAlign":"center","marginTop":'5%'}}>
            <h1 >עדכון פרטי חנות</h1>
            <Dropdown value={selectedStore} onChange={(e) => setSelectedStore(e.value)} options={stores} optionLabel="name" 
                placeholder="בחר חנות שברצונך לעדכן" className="w-full md:w-14rem" />
            <h2 >:עדכון הקטגוריות הנמכרות בחנות</h2>
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
         
}



    

 
export default UpdateStoreDetails