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
    getStoresLogo=async(req, res) => {
              let stores=await StoreDB.getAllStores()
              console.log("we done!!!!!!!!",stores);
              
              stores=stores.map((s)=>{
                console.log("sssss",s.dataValues.Floor);
                return {
                 Name:s.dataValues.Name,
                    Floor:s.dataValues.Floor,
                    Logo:s.dataValues.Logo!=null? fs.readFileSync(s.Logo, {encoding: 'base64'}):"",
                }   
              })
              console.log("we done22222222222!!!!!!!!",stores);
              
              let storesName=[];
              req.body.stores.forEach(s => {
                storesName.push(s.Name)  
              });
              console.log("######",storesName);
            //   for (let index = 0; index < stores.length; index++) {
            //     console.log("stores[index].Name",stores[index].dataValues);
            //      if(storesName.includes(stores[index]))
            //      final_stores.push(stores[index])
                  
            //   }
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
       console.log("hi our cat is:",req.body.CatId);
        const ads=await AdvertismentDB.getAdsByCategory(req.body.CatId)

        if(!ads) return res.status(400).json({ message: 'error occured when get ads to categories'});
        let ads_=[]
        for (let i = 0; i < ads.length; i++) {
            let store= await  StoreDB.getStoreById(ads[i]["advertisment.StoreId"])
            console.log("===================",ads[i]['advertisment.Img']);
            const element ={
                Id:ads[i].Id,
                Img:fs.readFileSync(ads[i]['advertisment.Img'], {encoding: 'base64'}),
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
        console.log(stores);
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