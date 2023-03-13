const db=require('../models/index.js')
const PriceList=db.price_lists


 const getPriceList =async  () => {
    return await PriceList.findOne({where:{Id:1}})
 } 
 const updatePriceList =async  (details) => {
   return  await  PriceList.update( {"DayFee":details.DayFee,"CategoryFee":details.CategoryFee},{
      where:{Id: 1}
 })
} 
 module.exports={
    getPriceList,
    updatePriceList
   
}