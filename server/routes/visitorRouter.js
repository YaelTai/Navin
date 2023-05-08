const express = require("express");
const VisitorController= require("../controllers/visitorController");



const VisitorRouter = express.Router();

VisitorRouter.get("/categories",VisitorController.getAllCategories)
VisitorRouter.post("/storesForCategory",VisitorController.getStoresByCategory)
VisitorRouter.get("/stores",VisitorController.getAllStores)
VisitorRouter.get("/storeForAd",VisitorController.getStoreByAd)
VisitorRouter.post("/ads",VisitorController.getAllAdsByCategory)
VisitorRouter.post("/floor",VisitorController.getFloorByStoreName)
VisitorRouter.post("/store",VisitorController.getStoreDetails)

module.exports =VisitorRouter;