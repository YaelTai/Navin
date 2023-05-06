const {owners}=require(".")
module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define('stores', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
       
        Name: { type: DataTypes.STRING, unique: true ,allowNull: false},
        Floor :{
            
            type: DataTypes.INTEGER
            ,allowNull: false
        },
        // Lat :{
            
        //     type: DataTypes.DOUBLE
        //     ,allowNull: false
        // },
        // Lng :{
            
        //     type: DataTypes.DOUBLE
        //     ,allowNull: false
        // },
        
            
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