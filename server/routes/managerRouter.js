
const express = require("express");
const ManagerController= require("../controllers/managerController");



const ManagerRouter = express.Router();
ManagerRouter.post("/ads",ManagerController.getOpenDocumentByURL)
ManagerRouter.post("/categories",ManagerController.addCategories)
ManagerRouter.post("/store",ManagerController.addStore)
ManagerRouter.post("/owner",ManagerController.addOwner)
ManagerRouter.delete("/store",ManagerController.deleteStore)
ManagerRouter.delete("/owner",ManagerController.deleteOwner)
ManagerRouter.get("/ads",ManagerController.getAllPendingAds)
ManagerRouter.post("/logIn",ManagerController.logIn)
ManagerRouter.get("/priceList",ManagerController.getPriceList)
ManagerRouter.put("/priceList",ManagerController.updatePriceList)
ManagerRouter.put("/approveAd",ManagerController.approveAd)
ManagerRouter.put("/refuseAd",ManagerController.refuseAd)


module.exports =ManagerRouter;
