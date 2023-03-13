const db=require('../models/index.js')
const Owner=db.owners


  const getAllOwners = async  () => {
    return await Owner.findAll()
  }
  const getOwnerByName=async (name)=>{
    return await Owner.findOne({ where: { Name: name } });
} 
const getOwnerById=async (id)=>{
  return await Owner.findOne({ where: { Id: id } });
} 
const deleteOwnerByEmail=async (email)=>{
    return await Owner.destroy({ where:{Email:email}})
}

const createNewOwner = async  (ownerToInsert) => {
    return await Owner.create(ownerToInsert)
}
const getOwnerByEmail=async (email)=>{
    return await Owner.findOne({ where: { Email: email } });
} 
const updatePassword = async  (id,password) => {
  
return  await  Owner.update( {"Password":password},{
     where:{Id:id}
})

}
const getOwnerDetails=async (id)=>{
  return await Owner.findOne({where :{Id:id}})

} 
const getManager=async ()=>{
  return await Owner.findOne({where :{IsManager:true}})

} 
const updatePersonalDetails = async  (details) => {
  
  return  await  Owner.update( {"Phone":details.Phone,"Name":details.Name,"Email":details.Email,"Password":details.Password},{
       where:{Id: details.Id}
  })

  
  }

// const getOwnerByPassword=async (password)=>{
//     return await Owner.findOne({ where: { Password: password } });
// } 
    

 module.exports={
getAllOwners,
getOwnerByName,
createNewOwner,
deleteOwnerByEmail,
getOwnerByEmail,
updatePassword,
getOwnerDetails,
updatePersonalDetails,
getOwnerById,
getManager
//getOwnerByPassword

}