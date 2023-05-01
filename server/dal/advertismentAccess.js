const { log } = require('console')
const db=require('../models/index.js')
const Advertisment=db.advertisments
const AdCategories=db.categories_for_ads


const getAdsByCategory =async  (catId) => {
console.log("@@@@@",catId);
   return await  AdCategories.findAll({
      include:[{model:Advertisment}],
      raw:true,
      where:{CatId:catId}
     })
     
   // console.log("******************",adsid[0].dataValues.CatId);
   // return await adsid.map(async (a)=>{
      
   //    let ad= await Advertisment.findOne({where:{Id:a.dataValues.AdId}})
   //    console.log("ddddddddddddddddd",ad); 
   //    return ad;
   // })
  
}
const getAllWaitingAds =async  () => {
    return await  Advertisment.findAll({where: {ApprovmentCode:null}})
 }
 const getAllAds =async  () => {
   return await  Advertisment.findAll()
}  

 const UpdateApprovmentCode = async  (id,code) => {
   return  await  Advertisment.update( {"ApprovmentCode":code},{
      where:{Id:id}
   })

} 
const UpdatePaid = async  (id) => {
   return  await  Advertisment.update( {"Paid":true},{
      where:{Id:id}
   })

} 
const deleteAd=async (id)=>{
   return await Advertisment.destroy({ where:{Id:id}})

}

const createNewAd = async (adToInsert) => {
   
   return await Advertisment.create(adToInsert)

}
const addCategoryToAd=async (AdId,categoryId)=>{
   return await AdCategories.create({"AdId":AdId,"CatId":categoryId})
}
const getAllAdsByOwner=async (id)=>{
  
   return await Advertisment.findAll({ where:{AdOwner:id}});
 
 }
 module.exports={
    getAllWaitingAds,
    UpdateApprovmentCode,
    deleteAd,
    createNewAd,
    addCategoryToAd,
    UpdatePaid,
    getAllAdsByOwner,
    getAllAds, 
    getAdsByCategory
   
}