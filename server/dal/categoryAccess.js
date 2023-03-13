
const db=require('../models');

const Category=db.categories
const StoreCategories=db.categories_for_stores

const createNewCategory = async (categoryToInsert) => {
   
    return await Category.create(categoryToInsert)

} 

const getAllCategories= async ()=>{

    return await  Category.findAll()
 
        
} 

const getCategoryById= async (id)=>{
    return await Category.findByPk(id);
   
} 
const getCategoryIdByName= async (name)=>{
      const data=await Category.findOne({ where: { Name: name } });
  if(data)
      return  data.Id;
    else return null;
}

const getStoreNamesByCategory=async (Catid)=>{
    return await StoreCategories.findAll({
        include:[
                 {model:db.stores,attributes:['Name'] },
        ],
        where:{CategoryId:Catid},
        raw:true,
        attributes:[]
    }
    ); 
}  


module.exports={
    createNewCategory,
    getAllCategories,
    getCategoryById,
    getCategoryIdByName,
    getStoreNamesByCategory
    
}