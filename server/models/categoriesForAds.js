const {advertisments, categories}=require(".")
module.exports = (sequelize, DataTypes) => {
    const CategoryForAd = sequelize.define('categories_for_ads', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        AdId:{type: DataTypes.INTEGER,allowNull: false,
            references: advertisments, 
            referenceskey: 'Id'
        
        },
        CatId:{type: DataTypes.INTEGER,allowNull: false,
            
            references: categories, 
            referenceskey: 'Id'        
        }
         
    },

        {
            timestamps: false
        }
      
    );

    return CategoryForAd;
}