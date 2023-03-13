module.exports = (sequelize, DataTypes) => {
    const StoreOwner = sequelize.define('owners', {
        Id: {type: DataTypes.INTEGER,primaryKey: true},
        Name: { type: DataTypes.STRING,allowNull: false },
        Phone: {type: DataTypes.STRING },
        Email:{type: DataTypes.STRING , unique: true,allowNull: false},
        Password:{type: DataTypes.STRING ,allowNull: false},
        IsManager:{type: DataTypes.BOOLEAN ,allowNull: false ,defaultValue: '0'}
    
         
    },

        {
            timestamps: false
        }
      
    );

    return StoreOwner;
}