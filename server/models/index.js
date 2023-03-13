
const dbConfig = require('../db_config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
)


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.categories = require('./categories')(sequelize, DataTypes)
db.stores = require('./stores.js')(sequelize, DataTypes)
db.owners = require('./owners')(sequelize, DataTypes)
db.advertisments = require('./advertisments')(sequelize, DataTypes)
db.categories_for_ads = require('./categoriesForAds')(sequelize, DataTypes)
db.price_lists = require('./price_lists')(sequelize, DataTypes)
db.categories_for_stores = require('./categoriesForStores')(sequelize, DataTypes)
//links
db.categories_for_stores.belongsTo(db.categories,{foreignKey:'CategoryId',as: "Name"})
db.categories_for_stores.belongsTo(db.stores,{foreignKey:'StoreId'})


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })
module.exports = db
