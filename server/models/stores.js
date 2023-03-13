const {owners}=require(".")
module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define('stores', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
       
        Name: { type: DataTypes.STRING, unique: true ,allowNull: false},
        LocationCode :{
            
            type: DataTypes.STRING
            ,allowNull: false
        },
        
            
    OwnerId :{   
        type: DataTypes.INTEGER,
        allowNull: false,
        references: owners, 
        referenceskey: 'Id'
             
    }}
    ,
        {
            timestamps: false
        }
        // ,
        // {
        //     freezeTableName: true
        // }
    );

    return Store;
}