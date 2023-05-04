import { FileUpload } from 'primereact/fileupload';
import React, { useEffect, useState, useRef } from 'react'
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useAxios1 } from "../../hooks/useAxios";
import { Toast } from 'primereact/toast';
import PriceList from './priceList'
import { set } from 'react-hook-form';
import { Dialog } from 'primereact/dialog';
import OwnerMenu from '../menues/ownerMenu';
import card from '../../images/card.png'



const header = (

    <img alt="Card"         src={card}
    style={{ "width": "100%", "height": "50px" }} />
);
const footer = (
    <></>

);
let categoryTemplate = (option) => {

    return (
        <div className="country-item">
            {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
            <div>{option.Name}</div>
        </div>
    );
}
let selectedCategoriesTemplate = (option) => {
    if (option) {
        return (
            <div className="country-item country-item-value">
                {/* <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
                <div>{option.Name}</div>
            </div>
        );
    }

    return "Select categories";
}




const UploadAd = () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const load = () => {


        setTimeout(() => {

        }, 2000);
    };
    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }
    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'All fields are required', life: 3000 });
    }

    const [categories, setCategories] = useState([]);
    const [selectedStore, setSelectedStore] = useState(null);
    const [selectedCategories, setselectedCategories] = useState([]);
    const [from, setfrom] = useState(new Date().toISOString().slice(0, 10))
    const [to, setto] = useState(new Date().toISOString().slice(0, 10));
    const [fee, setFee] = useState(0)
    const { Get, postData, Post } = useAxios1();
    // const [name, setName] = useState("")
    // const [file, setFile] = useState("")
    let base64data = "";

    const ImportFee = async () => {
        let fee = await postData(`owner/fee`, { "StartDate": from, "EndDate": to, "numOfCategories": selectedCategories.length });
        setFee(fee.data)
    }
    const ImportCats4Store = async () => {

        // console.log("ImportCats4Store",selectedStore);
        let cats4store = await postData(`owner/categoriesByStore`, { "Id": selectedStore.Id });
        setCategories(cats4store.data)
        // console.log(selectedStore,
        //  categories);
    }
    useEffect(() => {

        ImportCats4Store()
    }, [selectedStore])
    useEffect(() => {

        ImportFee()
    }, [to, from, selectedCategories])
    let _stores = Post(`owner/allStores`, { "Id": 214121865 });
    if (_stores.loading) {
        return <p>Loading...</p>;
    }
    if (_stores.error) {
        return <p>Error!</p>;
    }
    const stores = _stores.data
    console.log(stores);
    const customBase64Uploader = async (event) => {

        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            base64data = reader.result;


        }
    };

    // const navigate = useNavigate();

    return <>
        <Toast ref={toast} />
        <> <Card title="Upload an Ad" footer={footer} header={header} className="md:w-25rem" style={{ "margin": "2%", "width": "95%", "height": "98%", "position": 'fixed', overflowY: "auto" }}>
            <p className="m-0">
                {/* <Button label="watch Price List" icon="pi pi-eye" onClick={() => navigate("/owner/priceList")} /><br /><br /> */}
                <div className="card">
                    <Accordion >

                        <AccordionTab header="Watch Price List">
                            <p className="m-0">
                                <PriceList />
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>

                <lable>1. Load file</lable><br /><br />
                <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" customUpload uploadHandler={customBase64Uploader} maxFileSize={'10000000000000'} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} /><br></br>
                <label style={{ "marginRight": '1%' }} >2. choose store for the ad </label><br /><br />
                <Dropdown value={selectedStore} onChange={(e) => {

                    setSelectedStore(e.value)
                    // ImportCats4Store();
                }
                } options={stores} optionLabel="Name"
                    placeholder="your stores" className="w-full md:w-14rem" style={{ "width": "15%" }} /><br /><br />
                <lable>3. Choose in which categories the ad will be displayed</lable><br></br><br></br>
                <MultiSelect value={selectedCategories} options={categories} onChange={(e) => setselectedCategories(e.value)} optionLabel="Name" placeholder="Select Categories" filter className="multiselect-custom"
                    itemTemplate={categoryTemplate} selectedItemTemplate={selectedCategoriesTemplate} /><br></br><br></br>
                <lable>4. Start and end date for your ad:</lable><br></br><br></br>
                {/* <Calendar value={date} onChange={(e) => setDate(e.value)} /> */}
                <lable style={{ "marginRight": "10px" }}>from:</lable><Calendar value={from} onChange={(e) => { setfrom(new Date(e.target.value)) }} /><br></br><br></br>
                <lable style={{ "marginRight": "10px" }}>to:</lable><Calendar value={to} onChange={(e) => setto(new Date(e.target.value))} /> <br></br><br></br>
                <lable>5. Estimated cost</lable>
                <h1>{fee} nis</h1>
                <Button className="mt-50rem" label="Send Request To Manager" icon="pi pi-check" loading={loading} onClick={async () => {
                    if (!base64data || !selectedCategories | !selectedStore) {
                        if (!base64data) {
                            setVisible2(false)
                            setVisible(true)
                        }
                        else
                            showError()
                    }
                    else {
                        setLoading(true);
                        load()
                        const res1 = await postData("owner/ad",

                            {
                                "Img": base64data,
                                "StartDate": from,
                                "EndDate": to,
                                "AdOwner" :localStorage.getItem("user"),
                                "Categories": selectedCategories.map((c) => c.Name),
                                "StoreId": selectedStore.Id
                            });
                        setLoading(false);
                        setCategories('')
                        setSelectedStore('')
                        setselectedCategories('')
                        setfrom('')
                        setto('')
                        if (res1.request.status == 200) {
                            setVisible(false);
                            setVisible2(true)
                        }
                        else {toast.current.show({ severity: 'warn', summary: 'Rejected', detail: res1.response.data.message, life: 3000 });
                    }
                        // res1.request.status == 200 ?
                        //     toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Your advertisment have been successfully uploaded', life: 3000 }) :
                        //     toast.current.show({ severity: 'warn', summary: 'Rejected', detail: res1.response.data.message, life: 3000 });



                    }
                }} />
                <div className="mx-10"><OwnerMenu /></div>




                <Dialog header="Ooops!" visible={visible} modal={false} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <p className="m-0">
                        You forget to press on "Upload!"
                    </p>
                </Dialog>
                <Dialog header="'Your advertisment have been successfully uploaded !" visible={visible2} modal={false} style={{ width: '50vw' }} onHide={() => setVisible2(false)}>
                    <p className="m-0">
                        A confirmation code and ad ID will be sent to your email,
                        with which you can pay.
                        Ads will be displayed after payment.
                    </p>
                </Dialog>
            </p>

        </Card>
        </>
    </>
}
export default UploadAd