const PricesDB= require("../dal/priceListAccess")
const OwnerDB= require("../dal/ownersAccess")
const StoreDB= require("../dal/storesAccess")
const CategoryDB= require("../dal/categoryAccess")
const AdvertismentDB= require("../dal/advertismentAccess")
const Mailer = require('../services/mail')
const base64toFile = require('node-base64-to-file');
const path = require("path")
const {v4:uuid} = require("uuid")
const fs = require('fs');
class OwnerController {

    logIn=async(req, res) => {
        if (!req.body.Name|| !req.body.Password)  return res.status(400).json({ message: 'All fields are required'}) 
        const OwnerToCheck =await OwnerDB.getOwnerByEmail(req.body.Name)
        if(!OwnerToCheck)
            return res.status(400).json({ message: 'wrong user name'}) 
             
        if(!(req.body.Password===OwnerToCheck.Password))    
            return res.status(400).json({ message: 'password does not match to user name'})
        
        else  res.status(201).json(OwnerToCheck)
    }
    updatePassword=async(req, res) => {
        if(!await OwnerDB.updatePassword(req.body.Id,req.body.Password))
           return res.status(400).json({ message: 'error occured while updating password'})
        res.status(200).json({ message: 'updated sucessfully'})
    }
    getFee=async(req, res) => {
       
    const start = new Date(req.body.StartDate);   
    const end = new Date(req.body.EndDate); 
    const diff = end.getTime() - start.getTime();   
    
    const daydiff = diff / (1000 * 60 * 60 * 24);
    const priceList=await PricesDB.getPriceList()
    if(!priceList) return res.status(400).json({ message: 'error occured while getting fee'})
    console.log("pricw",priceList.dataValues);
    res.status(201).json(priceList.dataValues.DayFee*daydiff+priceList.dataValues.CategoryFee*req.body.numOfCategories)
    }
    getPriceList=async(req, res) => {
        const priceList=await PricesDB.getPriceList()
        if(!priceList)

            res.status(400).json({ message: 'error occured while getting price list'})
        res.status(200).json(priceList)
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
    getPersonalDetails=async(req, res) => {
        
        const details=await OwnerDB.getOwnerDetails(req.body.Id)
        if(!details) return  res.status(400).json({ message: 'error occured while getting owner details'})
        else res.status(200).json(details)
    }
    updateStoreDetails=async(req, res) => {
        //get:
        // {
        //     "Name":"mely",
        //  

        //  "OwnerId":214121865,
        //      "Categories": [
        //          "shoes",
        //          "clothing",
        //          "coats"
        //      ]}
        //  "Logo":9j9k
        //update name & owner
        let imagePath=""
        const folder = process.env.FOLDER
        const filename = `${uuid()}`
        const fileUrl  =`${folder}\\${filename}`
       
        // const base64String ='data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEBLAEsAAD/4RbbRXhpZgAASUkqAAgAAAANAAABAwABAAAAGgQAAAEBAwABAAAAWgYAAAIBAwABAAAAAQAAAAMBAwABAAAAAQAAAAYBAwABAAAAAAAAABIBAwABAAAAAQAAABUBAwABAAAAAQAAABoBBQABAAAAqgAAABsBBQABAAAAsgAAACgBAwABAAAAAgAAADEBAgAcAAAAugAAADIBAgAUAAAA1gAAAGmHBAABAAAA7AAAABgBAADAxi0AECcAAMDGLQAQJwAAQWRvYmUgUGhvdG9zaG9wIENTMiBXaW5kb3dzADIwMDc6MDI6MDkgMTE6MjA6MTcAAAADAAGgAwABAAAA//8AAAKgBAABAAAAGgQAAAOgBAABAAAAWgYAAAAAAAAAAAYAAwEDAAEAAAAGAAAAGgEFAAEAAABmAQAAGwEFAAEAAABuAQAAKAEDAAEAAAACAAAAAQIEAAEAAAB2AQAAAgIEAAEAAABdFQAAAAAAAEgAAAABAAAASAAAAAEAAAD/2P/gABBKRklGAAECAABIAEgAAP/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAoABnAwEiAAIRAQMRAf/dAAQAB//EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTde';
        const base64String=req.body.Logo
       
        
       try {
       // imagePath = await base64toFile(base64String, { filePath: "./img", fileName: "/ad_"+1+"_"+req.body.AdOwner, types: ['jpeg'], fileMaxSize: 3145728 });
        imagePath = await base64toFile(base64String, { filePath:folder, fileName:filename, types: ['jpeg'], fileMaxSize: 3145728 });
        //console.log("path"+fileUrl);
        } catch (error) {
           
         return res.status(400).json({ message: 'error occured while loading image'})
        }


        if(! await StoreDB.updateStore(req.body.Name,req.body.OwnerId,req.body.Logo))
            return res.status(400).json({ message: 'error occured while update store details'})
        let storeId=await StoreDB.getStoreByName(req.body.Name)
        if(!storeId) return res.status(400).json({ message: 'error occured while update store details when trying get storeId'})
        storeId=storeId.Id
        
        //update categories:
        let oldCategories=await StoreDB.getCategoriesNamesByStore(storeId)
        oldCategories=oldCategories.map(c=>c["Name.Name"])
        if(! oldCategories) return res.status(400).json({ message: 'error occured while update store details  when trying get oldCategories'})
        let newCategories=req.body.Categories
        //delete categories
        
        oldCategories.forEach(async(element) => {
            if(!(newCategories.includes(element))){
            const categoryId=await CategoryDB.getCategoryIdByName(element)
            if(!categoryId)return res.status(400).json({ message: 'error occured while update store details'})
            
            if(!await StoreDB.deleteCategoryFromStore(storeId,categoryId))return res.status(400).json({ message: 'error occured when trying get categoryId'})
        }
        });
        //add categories
        newCategories.forEach(async(element) => {
            if(!(oldCategories.includes(element))){
            const categoryId=await CategoryDB.getCategoryIdByName(element)
            if(! categoryId) return res.status(400).json({ message: 'error occured when trying get categoryId'})
           
            if(!await StoreDB.addCategoryToStore(storeId,categoryId)) return res.status(400).json({ message: 'error occured while update category for store'})

        }
        });
        res.status(200).json({ message: 'updated sucssfully'}) 
    }
    
    updatePersonalDetails=async(req, res) => {
        
        if(!await OwnerDB.updatePersonalDetails(req.body)) res.status(401).json({ message: 'error occured while updating owner details'})
        else res.status(200).json({ message: 'updated sucssfully'})

    }

    uploadAd=async(req, res) => {
    //     {
    //         "Img":"ghj",
    //          "StartDate":"2023-02-01",
    //          "EndDate":"2023-02-07",
    //          "AdOwner" :181,
    //          "Storeories": [
    //              "sId": 19,             
    //          "Categhoes"
                
    //          ]
    //  }
        //loadFile
        let imagePath=""
        const folder = process.env.FOLDER
        //path.join(__dirname, "..", "public", "images")
        const filename = `${uuid()}`
        const fileUrl  =`${folder}\\${filename}`
        console.log("URL",fileUrl);
        // const base64String ='data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEBLAEsAAD/4RbbRXhpZgAASUkqAAgAAAANAAABAwABAAAAGgQAAAEBAwABAAAAWgYAAAIBAwABAAAAAQAAAAMBAwABAAAAAQAAAAYBAwABAAAAAAAAABIBAwABAAAAAQAAABUBAwABAAAAAQAAABoBBQABAAAAqgAAABsBBQABAAAAsgAAACgBAwABAAAAAgAAADEBAgAcAAAAugAAADIBAgAUAAAA1gAAAGmHBAABAAAA7AAAABgBAADAxi0AECcAAMDGLQAQJwAAQWRvYmUgUGhvdG9zaG9wIENTMiBXaW5kb3dzADIwMDc6MDI6MDkgMTE6MjA6MTcAAAADAAGgAwABAAAA//8AAAKgBAABAAAAGgQAAAOgBAABAAAAWgYAAAAAAAAAAAYAAwEDAAEAAAAGAAAAGgEFAAEAAABmAQAAGwEFAAEAAABuAQAAKAEDAAEAAAACAAAAAQIEAAEAAAB2AQAAAgIEAAEAAABdFQAAAAAAAEgAAAABAAAASAAAAAEAAAD/2P/gABBKRklGAAECAABIAEgAAP/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAoABnAwEiAAIRAQMRAf/dAAQAB//EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTde';
        const base64String=req.body.Img

        
       try {
       // imagePath = await base64toFile(base64String, { filePath: "./img", fileName: "/ad_"+1+"_"+req.body.AdOwner, types: ['jpeg'], fileMaxSize: 3145728 });
        imagePath = await base64toFile(base64String, { filePath:folder, fileName:filename, types: ['jpeg'], fileMaxSize: 3145728 });
       console.log("path1"+imagePath);
        } catch (error) {
           
         return res.status(400).json({ message: 'error occured while loading image'})
        }
       

        const newAd= await AdvertismentDB.createNewAd({"Img":fileUrl+".jpeg", "StartDate": req.body.StartDate,
                                                       "EndDate":req.body.EndDate,"AdOwner":req.body.AdOwner,"StoreId":req.body.StoreId})


        if(!newAd) return res.status(400).json({ message: 'error occured when trying to add ad'})
        
        req.body.Categories.forEach(async(element) => {
            
            const categoryId=await CategoryDB.getCategoryIdByName(element)
            if(!categoryId)return res.status(400).json({ message: 'error occured while update ad categories'})
            
            if(!await AdvertismentDB.addCategoryToAd(newAd.Id,categoryId))return res.status(400).json({ message: 'error occured when trying get categoryId'})
        
        });
        //email reminder to manager
    const manager=await OwnerDB.getManager();
    if(!manager)return res.status(400).json({ message: 'error occured when trying upload ad'})
        const to = manager.Email;
        console.log("***********");

        const subject = 'hello '+manager.Name+' a new ad waits to your approvment';
        const body = "click here to app";
    
        Mailer.sendEmail(to, subject, body)
            .then(info => {
                console.log('Email sent: ', info.response);
                res.send('Registration successful');
            })
            .catch(error => {
                console.log('Error sending email: ', error);
                res.status(500).send('Failed to send email');
            });

         res.status(200).json({ message: 'uploaded sucssfully'}) 

    }
    getAdByPassword=async(req, res) => {
        //GET:
        //code
        //adId

        let ad= await AdvertismentDB.getAdById(req.body.adId)
        if(!ad) return res.status(400).json({ message: 'wrong ad code'})
        if(ad.ApprovmentCode!=req.body.code) return res.status(400).json({ message: 'wrong password'})
        const start = new Date(ad.StartDate);   
        const end = new Date(ad.EndDate); 
        const diff = end.getTime() - start.getTime();   
        const daydiff = diff / (1000 * 60 * 60 * 24);
        const priceList=await PricesDB.getPriceList()
        let catsForAd= await AdvertismentDB.getCatsForAd(req.body.adId)
        if(!priceList) return res.status(400).json({ message: 'error occured while getting fee'})
        
        res.status(200).json(priceList.dataValues.DayFee*daydiff+priceList.dataValues.CategoryFee*catsForAd.length)

    }

    payForAd=async(req, res) => {
        //GET:
        //Id

        
        //update to paid
        if(! await AdvertismentDB.UpdatePaid(req.body.Id))
        return res.status(400).json({ message: 'error occured when update paid'})
       
        //validate credit card
        res.status(200).json({ message: 'paid sucssfully'}) 
    }

    getAllYourStores=async(req, res) => {
        console.log("//////////////////////",req.body.Id);
        const stores=await StoreDB.getAllStoresByOwner(req.body.Id)
        if(!stores) return res.status(400).json({ message: 'error occured when trying to get stores'})
        else res.status(200).json(stores) 
    }
    getAllyourAds=async(req, res) => {
        const ads=await AdvertismentDB.getAllAdsByOwner(req.body.Id)
        if(!ads) return res.status(400).json({ message: 'error occured when trying to get ads'})
        console.log(ads);
       res.status(200).json(ads) 
    }
    getAllCategoriesForStore=async(req, res) => {
        //get Id
        let Categories=await StoreDB.getCategoriesNamesByStore(req.body.Id)
        if(!Categories)return res.status(400).json({ message: 'error occured when get categories'})
        Categories=Categories.map(c=>{return {"Name":c["Name.Name"]}})
        res.status(200).json(Categories) 
    }
    getAllCategories=async(req, res) => {
        let Categories=await CategoryDB.getAllCategories()
        if(!Categories)return res.status(400).json({ message: 'error occured when get categories'})
       res.status(200).json(Categories)  
    }
    
    


}

const ownerController = new OwnerController();

module.exports = ownerController;