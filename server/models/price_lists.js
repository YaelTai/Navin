module.exports = (sequelize, DataTypes) => {
    const PriceList = sequelize.define('price_lists', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        DayFee :{type: DataTypes.INTEGER ,allowNull: false},
        CategoryFee :{type: DataTypes.INTEGER ,allowNull: false}
         
    },

        {
            timestamps: false
        }
      
    );

    return PriceList;
}