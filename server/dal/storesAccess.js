
const { log } = require('console')
const db=require('../models/index.js')
const Store=db.stores
const StoreCategories=db.categories_for_stores


 const createNewStore = async  (storeToInsert) => {

    return await Store.create(storeToInsert)
 } 

const getAllStores= async ()=>{
      
    return await Store.findAll();
} 


const getStoreByName=async (name)=>{
    return await Store.findOne({ where: { Name: name } });
}
const getStoreById=async (id)=>{
    
    return await Store.findOne({ where: { Id: id} });
}
const getStoreByLocation=async (loc)=>{
    return await Store.findOne({ where: { LocationCode: loc } });
}
const getAllStoresLocations= async ()=>{
      
    
}
const deleteStore=async (id)=>{
    await StoreCategories.destroy({ where:{"StoreId":id}})
   return await Store.destroy({ where:{"Id":id}})

}

const getStoreDetails=async (name)=>{
    return await Store.findOne({where :{Name:name}})
 
}
const getCategoriesNamesByStore=async (id)=>{
    return await StoreCategories.findAll({
        include:[
                 {model:db.stores,attributes:[], where:{Id:id}},
                 {model:db.categories,attributes:['Name'],as: "Name"}
        ],
        raw:true,
        attributes:[]
    }
    ); 
} 
const updateStore = async  (storeName,OwnerId,Logo) => {
  
    return  await  Store.update( {"Name":storeName,"OwnerId":OwnerId,"Logo":Logo},{
        where:{Name: storeName}
   })

}
const deleteCategoryFromStore=async (storeId,categoryId)=>{
    return await StoreCategories.destroy({ where:{StoreId:storeId,CategoryId:categoryId}})
}
const addCategoryToStore=async (storeId,categoryId)=>{
    return await StoreCategories.create({"StoreId":storeId,"CategoryId":categoryId})
}
const getAllStoresByOwner=async (id)=>{
  
    return await Store.findAll({ where:{OwnerId:id}});
 
}
 module.exports={
createNewStore,
getAllStores,
deleteStore,
getAllStoresLocations,
getStoreByLocation,
getStoreByName,
getStoreDetails,
getCategoriesNamesByStore,
updateStore,
deleteCategoryFromStore,
addCategoryToStore,
getAllStoresByOwner,
getStoreById
}