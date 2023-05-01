const CategoryDB=require("../dal/categoryAccess")
const StoreDB=require("../dal/storesAccess")
const AdvertismentDB= require("../dal/advertismentAccess")
const fs = require('fs');
const { log } = require("console");
class VisitorController {

    
    //addDestination=async(req, res) => {}
    //IdentifyLocation=async(req, res) => {}
    //removeDestination=async(req, res) => {}
    //takePicture=async(req, res) => {}
    //presentLocation=async(req, res) => {}
    //assembleRoute=async(req, res) => {}
    getStoresByCategory=async (req, res) => {
        //get CatId
       
       let stores=await  CategoryDB.getStoreNamesByCategory(req.body.CatId)
       if(!stores)return res.status(400).json({ message: 'error occured when get stores to categories'})
      stores=stores.map((s)=>{return{"Name":s["store.Name"]}})
      console.log("stores=",stores);
       res.status(200).json(stores)  
    }
    getAllCategories=async(req, res) => {
        const Categories=await CategoryDB.getAllCategories()
        if(!Categories)return res.status(400).json({ message: 'error occured when get categories'})
       res.status(200).json(Categories)  
    }
    getAllAdsByCategory=async(req, res) => {
       
        const ads=await AdvertismentDB.getAdsByCategory(req.body.CatId)

        if(!ads) return res.status(400).json({ message: 'error occured when get ads to categories'});

        let ads_=[]
        for (let i = 0; i < ads.length; i++) {
            let store= await  StoreDB.getStoreById(ads[i]["advertisment.StoreId"])
            const element ={
                Id:ads[i].Id,
                Img:fs.readFileSync(ads[i]['advertisment.Img'], {encoding: 'base64'}),
                StoreName:store.Name    
                    
                
            }
            ads_.push(element)
            
        }
        res.status(200).json(ads_)   
    }
    getAllStores=async(req, res) => {
        let stores=await StoreDB.getAllStores()
        if(!stores)return res.status(400).json({ message: 'error occured when get stores'})
        res.status(200).json(stores.map((s)=>{return{"Name":s.Name}})) 
    }

    getStoreByAd=async(req, res) => {
        const store =await StoreDB.getStoreById(req.body.StoreId)
        if(!store)return res.status(400).json({ message: 'error occured when get store'})
        res.status(200).json(store) 
    }

}

const visitorController = new VisitorController();

module.exports = visitorController;