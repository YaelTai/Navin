module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('categories', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: { type: DataTypes.STRING, unique: true ,allowNull: false}    
    },

        {
            timestamps: false
        }
       
    );

    return Category;
}

