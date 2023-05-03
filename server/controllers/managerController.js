
const CategoryDB=require("../dal/categoryAccess")
const StoreDB=require("../dal/storesAccess")
const OwnerDB= require("../dal/ownersAccess")
const AdvertismentDB= require("../dal/advertismentAccess")
const PriceListDB= require("../dal/priceListAccess")
const Mailer = require('../services/mail')
const { log } = require("console")
const fs = require('fs');

class ManagerController {
    insertToMap= async(req, res) => {}
    
    updateMap=async(req, res) => {}

    addCategories=async(req, res) => {
        const allCategories=  await CategoryDB.getAllCategories();
        req.body.forEach( async element => {
            if (!element.Name)  return res.status(400).json({ message: 'All fields are required'}) 
            let existing=false;
            allCategories.forEach( c => {

                if(c.Name===element.Name) existing= true;});
            if(!existing){
                const newCategory= await CategoryDB.createNewCategory(element);
            if (!newCategory) res.status(400).json({ message: 'error created category' })}
     } );  
    return  res.status(201).json({ message: 'created categories' })
    }

    addStore=async(req, res) => {
        
        const stores=await StoreDB.getAllStores()
        if(!stores) return res.status(400).json({ message: 'error while check uq store name'}) 
        const storesNames=stores.map(e=>e.Name)
        if(storesNames.includes(req.body.Name)) return res.status(400).json({ message: 'store name alredy exists'})
        // const storesLocs=stores.map(e=>e.LocationCode)
        // if(storesLocs.includes(req.body.LocationCode)) return res.status(400).json({ message: 'store location alredy exists'})  
        //if (!req.body.Name|| !req.body.LocationCode ||! req.body.OwnerId)  return res.status(400).json({ message: 'All fields are required'}) 
        if( await StoreDB.getStoreByName(req.body.Name))
         return res.status(400).json({ message: 'store name alredy exist'})
         const owner=await OwnerDB.getOwnerById(req.body.OwnerId)
         if (!owner)return res.status(400).json({ message: 'no such owner'})
        // if( await StoreDB.getStoreByLocation(req.body.LocationCode) )
        // return res.status(400).json({ message: 'store location alredy exist'})

         const newStore=await StoreDB.createNewStore(req.body)
        
        if (!newStore) res.status(400).json({ message: 'error created store' })
        else  res.status(201).json({ message: 'created store' })
    }
    deleteStore=async(req, res) => {

           console.log("srvvvvvvvvvvv "+req.body);
        if (!req.body.Name|| !req.body.OwnerName)  return res.status(400).json({ message: 'All fields are required'}) 
            
            const store=await StoreDB.getStoreByName(req.body.Name)
            const owner=await OwnerDB.getOwnerByName(req.body.OwnerName);
            if(! owner ) return res.status(400).json({ message: 'wrong owner name'}) 
            if(! store) return res.status(400).json({ message: 'wrong store name'})
            if(!owner.Id==store.OwnerId) return res.status(400).json({ message: 'store name does not match owner name'})
            if(await StoreDB.deleteStore(req.body.Name))
                return  res.status(201).json({ message: 'deleted store' })
            else
            return res.status(400).json({ message: 'error while delete store'})
       

    }
    addOwner=async(req, res) => {
        //if (!req.body.Name|| !req.body.Email)  return res.status(400).json({ message: 'All fields are required'}) 
        //validate email
        
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!req.body.Email.match(mailformat))
        return res.status(400).json({ message: 'invalid mail'}) 
        const owners=await OwnerDB.getAllOwners();
        if(!owners) return res.status(400).json({ message: 'error while check uq owner email'}) 
        const ownersMails=owners.map(e=>e.Email)
        if(ownersMails.includes(req.body.Email)) return res.status(400).json({ message: 'email alredy exists'}) 
        const ownersIds=owners.map(e=>e.Id)
        if(ownersIds.includes(req.body.Id)) return res.status(400).json({ message: 'id alredy exists'})      
        //genetrate password
       
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 8;
        var password = "";
    
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
            
        
        const ownerToInsert={
        Id:req.body.Id,
           Name: req.body.Name,
           Phone: req.body.Phone? req.body.Phone : null,
           Email: req.body.Email,
           Password: password
 
        }
        const newOwner=await OwnerDB.createNewOwner(ownerToInsert)
         

        if (!newOwner) res.status(400).json({ message: 'error created owner' })
        else {
            //email password to owner 
            const to = req.body.Email;
            const subject = 'hello '+req.body.Name+' and Welcome to our mall your password inside';
            const body = "your password is: "+password+"/n";
        
            Mailer.sendEmail(to, subject, body)
                .then(info => {
                    console.log('Email sent: ', info.response);
                    res.send('Registration successful');
                })
                .catch(error => {
                    console.log('Error sending email: ', error);
                    res.status(500).send('Failed to send email');
                });
        }
        
        // res.status(201).json({ message: 'created owner' })
        

    }
    deleteOwner=async(req, res) => {
        if (!req.body.Name|| !req.body.Email)  return res.status(400).json({ message: 'All fields are required'}) 
        const OwnerToDelete =await OwnerDB.getOwnerByEmail(req.body.Email)
        if(!OwnerToDelete)
            return res.status(400).json({ message: 'wrong email'}) 
             
        if(!(req.body.Name===OwnerToDelete.Name))    
            return res.status(400).json({ message: 'email does not match to owner'})
        if(!OwnerDB.deleteOwnerByEmail(req.body.Email))
            return res.status(400).json({ message: 'error occured while trying to delete owner'})
        else  res.status(201).json({ message: 'deleted  owner succesfully' })

    }
    getOpenDocumentByURL = (req, res, next) => {
//   let index=req.body.URL.lastIndexOf("\\");
// console.log("**************************",req.body.URL.substring(index+1,req.body.URL.length));
// console.log("**************************",req.body.URL.substring(0,index+1));
//         const options = { 
//           root: req.body.URL.substring(0,index+1)
//       }; 
      
//         const fileName =  req.body.URL.substring(index+1,req.body.URL.length);
        // res.sendFile(fileName, options, function (err) {
        //     if (err) {
        //       console.log(err);
        //         next(err);
        //     } else { 
        //         console.log('Sent:', fileName); 
        //     }
        // });
        const contents = fs.readFileSync(req.body.URL, {encoding: 'base64'});
        res.send(contents)
      }
    getAllPendingAds=async(req, res) => {
      
       let ads=await AdvertismentDB.getAllWaitingAds()
       var r = ads.map((item)=>{
       var ttt= {Id:item.Id,
            Img:fs.readFileSync(item.Img, {encoding: 'base64'}),
             
            StartDate:item.StartDate,
            EndDate:item.EndDate

        }
       return ttt;
       })

      
       if(!ads) res.status(400).json({ message: 'error getting pending ads' })
     
       return res.status(201).json(r)
    }
    approveAd=async(req, res) => {
        console.log("AFGAUIG");
        //update
        var chars = "0123456789";
        var passwordLength = 4;
        var password = "";
        
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        
        if(await AdvertismentDB.UpdateApprovmentCode(req.body.Id, password)!=0){
            res.status(201).json('approved successfully')
       //mail
        
    //    let owner = await OwnerDB.getOwnerById(req.body.AdOwner)
    //    if(!owner) res.status(400).json({ message: 'error getting owner email' })
    //    let to=owner.Email
       
    //    const subject = 'hi '+owner.Name+' your ad aprrroved!! password inside';
    //    const body = "your approvment code is: "+password+"/n"+"for payment click here->";
   
    //    Mailer.sendEmail(to, subject, body)
    //        .then(info => {
    //            console.log('Email sent: ', info.response);
    //            res.status(201).json('approved successfully')
    //        })
    //        .catch(error => {
    //            console.log('Error sending email: ', error);
    //            res.status(500).send('Failed to send email');
    //        });


    //     }
    //     else res.status(400).json({ message: 'error approved  ads' })
        }
         
    }
    refuseAd=async(req, res) => {
     console.log("hiiii    refuseAd   ",req.body.Id);
        if(!AdvertismentDB.deleteAd(req.body.Id))
        return res.status(400).json({ message: 'error occured while trying to refuse ad'})

        res.status(201).json('approved successfully')


        // //email refusment
        // let owner = await OwnerDB.getOwnerById(req.body.AdOwner)
        // if(!owner) res.status(400).json({ message: 'error getting owner email' })
        // let to=owner.Email
        // console.log(to)
        // const subject = 'hi '+owner.Name;
        // const body = "Your ad has been rejected for system reasons";
    
        // Mailer.sendEmail(to, subject, body)
        //     .then(info => {
        //         console.log('Email sent: ', info.response);
        //         res.status(201).json('approved successfully')
        //     })
        //     .catch(error => {
        //         console.log('Error sending email: ', error);
        //         res.status(500).send('Failed to send email');
        //     });
 
 
    // }
    }
    logIn=async(req, res) => {
        
        if (!req.body.Name|| !req.body.Password)  return res.status(400).json({ message: 'All fields are required'}) 
        const OwnerToCheck =await OwnerDB.getOwnerByEmail(req.body.Name)
        if(!OwnerToCheck)
            return res.status(400).json({ message: 'wrong user name'}) 
             
        if(!(req.body.Password===OwnerToCheck.Password))    
            return res.status(400).json({ message: 'password does not match to user name'})
        if(!(OwnerToCheck.IsManager))    
            return res.status(400).json({ message: 'access denied'})
       
       res.status(200).json(OwnerToCheck)

        
    }
    getMap=async(req, res) => {}
    
    updatePriceList=async(req, res) => {
        
       if(!PriceListDB.updatePriceList(req.body)) return res.status(400).json({ message: 'error while updating price list'})
       res.status(201).json({ message: 'updated price list ' })
    }
    getPriceList=async(req, res) => {
        const priceList=await PriceListDB.getPriceList()
        if(!priceList)
            res.status(400).json({ message: 'error occured while getting price list'})
        res.status(200).json(priceList)
    }
}


const manegerController = new ManagerController();

module.exports = manegerController;

