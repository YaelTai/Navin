const { log } = require('console')
const db=require('../models/index.js')
const Advertisment=db.advertisments
const AdCategories=db.categories_for_ads


const getAdsByCategory =async  (catId) => {
console.log("@@@@@",catId);
   ads= await  AdCategories.findAll({
      include:[{model:Advertisment}],
      raw:true,
      where:{CatId:catId}
     })
     console.log("***********ads",ads);
 ads=ads.filter((ad=>
   //console.log(ad["advertisment.Paid"],new Date(ad["advertisment.StartDate"])<=new Date(),  new Date(ad["advertisment.EndDate"])>=new Date(),new Date());
   ad["advertisment.Paid"]&&
   new Date(ad["advertisment.StartDate"])<=new Date()&&
   new Date(ad["advertisment.EndDate"])>=new Date()



))
   // ads= ads.filter((ad)=>{
      
   //    console.log("*hiiiii we are in the mao");
   //        if(ad["advertisment.Paid"]&&ad["advertisment.StartDate"]>=new Date()&&
   //     ad["advertisment.EndDate"]>=new Date())

   //   {     console.log("ad with map",ad);
   //    return ad}
       
   //    })
   console.log("that what we are gonna return",ads);
   return ads
  
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
   console.log("deleteAd",id);
   await Advertisment.destroy({ where:{Id:id}})
   await AdCategories.destroy({ where:{AdId:id}})
   return
    

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