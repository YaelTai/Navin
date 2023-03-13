const express = require("express");
const VisitorController= require("../../controllers/visitorController");



const VisitorRouter = express.Router();

VisitorRouter.get("/categories",VisitorController.getAllCategories)
VisitorRouter.get("/storesForCategory",VisitorController.getStoresByCategory)
VisitorRouter.get("/stores",VisitorController.getAllStores)
VisitorRouter.get("/storeForAd",VisitorController.getStoreByAd)


module.exports =VisitorRouter;