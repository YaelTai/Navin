
const express = require("express");
const OwnerController= require("../controllers/ownerController");



const OwnerRouter = express.Router();

OwnerRouter.put("/password",OwnerController.updatePassword)
OwnerRouter.get("/fee",OwnerController.getFee)
OwnerRouter.post("/categoriesByStore",OwnerController.getAllCategoriesForStore)
OwnerRouter.get("/categories",OwnerController.getAllCategories)
OwnerRouter.get("/priceList",OwnerController.getPriceList)
OwnerRouter.get("/store",OwnerController.getStoreDetails)
OwnerRouter.post("/owner",OwnerController.getPersonalDetails)
OwnerRouter.post("/allStores",OwnerController.getAllYourStores)
OwnerRouter.get("/ads",OwnerController.getAllyourAds)
OwnerRouter.put("/owner",OwnerController.updatePersonalDetails)
OwnerRouter.put("/store",OwnerController.updateStoreDetails)
OwnerRouter.put("/advertisment",OwnerController.payForAd)
OwnerRouter.post("/ad",OwnerController.uploadAd)
OwnerRouter.post("/logIn",OwnerController.logIn)


module.exports =OwnerRouter;
