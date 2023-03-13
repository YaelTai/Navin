const {stores, categories}=require(".")

module.exports = (sequelize, DataTypes) => {
    const CategoryForStore = sequelize.define('categories_for_stores', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        StoreId:{type: DataTypes.INTEGER,allowNull: false,
            references: stores, 
            referenceskey: 'Id'
            
        },
        CategoryId:{type: DataTypes.INTEGER,allowNull: false,
            references: categories, 
            referenceskey: 'Id'
            
        
        }
         
    },

        {
            timestamps: false
        }
      
    );

    return CategoryForStore;
}