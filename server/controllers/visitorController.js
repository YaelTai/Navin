const CategoryDB=require("../dal/categoryAccess")
const StoreDB=require("../dal/storesAccess")
const AdvertismentDB= require("../dal/advertismentAccess")
const fs = require('fs');
const { log } = require("console");
class VisitorController {

    

    getStoresByCategory=async (req, res) => {
       
       let stores=await  CategoryDB.getStoreNamesByCategory(req.body.CatId)
       if(!stores)return res.status(400).json({ message: 'error occured when get stores to categories'})
      stores=stores.map((s)=>{return{"Name":s["store.Name"]}})
      console.log("stores=",stores);
       res.status(200).json(stores)  
    }
    getStoresLogo=async(req, res) => {
              let stores=await StoreDB.getAllStores()
            
              
              stores=stores.map((s)=>{
            
                return {
                 Name:s.dataValues.Name,
                    Floor:s.dataValues.Floor,
                    
                    Logo:s.dataValues.Logo!=null? fs.readFileSync(`${process.env.FOLDER}\\${s.Logo}`, {encoding: 'base64'}):"",
                }   
              })
             
              
              let storesName=[];
              req.body.stores.forEach(s => {
                storesName.push(s.Name)  
              });


            let floor1=[];
            let floor2=[];
            let floor3=[];
            stores.forEach((s)=>{
                
                if(storesName.includes(s.Name)){
                if(s.Floor==1)
                floor1.push(s)
              else if(s.Floor==2)
                floor2.push(s)
              else
                floor3.push(s)
           } })
            
         
        res.status(200).json({"floor1":floor1,"floor2":floor2,"floor3":floor3});     

        } 
        


    
    getStoreDetails=async(req, res) => {
        const details=await StoreDB.getStoreDetails(req.body.Name)
        
        if(!details)
            res.status(400).json({ message: 'error occured while getting store details'})
        let categories=await StoreDB.getCategoriesNamesByStore(details.Id)
        if(!categories)
            res.status(400).json({ message: 'error occured while getting store details'})
       
        res.status(200).json({storeName:details.Name,
         Logo: fs.readFileSync(details.Logo, {encoding: 'base64'}),
            categories:categories.map(c=>c["Name.Name"])})
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
                Img:fs.readFileSync(`${process.env.FOLDER}\\${ads[i]['advertisment.Img']}`, {encoding: 'base64'}),
                StoreName:store.Name    
                    
                
            }
            ads_.push(element)
            
        }
        console.log("***********",ads_);
        res.status(200).json(ads_)   
    }
    getAllStores=async(req, res) => {
        let stores=await StoreDB.getAllStores()
        if(!stores)return res.status(400).json({ message: 'error occured when get stores'})
    
        res.status(200).json(stores.map((s)=>{return{"Name":s.Name}})) 
    }

    getFloorByStoreName=async(req,res)=>{
        let store=await StoreDB.getStoreByName(req.body.storeName)
        if (!store) return res.status(400).json({ message: 'error occured when get stores'})
        res.status(200).json(store.Floor) 
    
}

    
    

    getStoreByAd=async(req, res) => {
        const store =await StoreDB.getStoreById(req.body.StoreId)
        if(!store)return res.status(400).json({ message: 'error occured when get store'})
        res.status(200).json(store) 
    }

}

const visitorController = new VisitorController();

module.exports = visitorController;