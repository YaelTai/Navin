const {owners,stores}=require(".")
module.exports = (sequelize, DataTypes) => {
    const Advertisment = sequelize.define('advertisments', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Img:{ type: DataTypes.STRING,
            allowNull: false},
        
        StartDate:{type: DataTypes.DATE ,allowNull: false},
        EndDate:{type: DataTypes.DATE,allowNull: false },
        ApprovmentCode:{type:DataTypes.INTEGER,allowNull: true},
        Paid:{type:DataTypes.BOOLEAN,allowNull: false,defaultValue: '0'},
        AdOwner:{type: DataTypes.INTEGER,allowNull: false,
            references: owners, 
            referenceskey: 'Id'},
        StoreId:{type: DataTypes.INTEGER,allowNull: false,
            references: stores, 
            referenceskey: 'Id'},
     
    },

        {
            timestamps: false
        }
      
    );

    return Advertisment;
}