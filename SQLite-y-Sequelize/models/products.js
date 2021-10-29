module.exports = (sequelize, type) => {

    return sequelize.define('product', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: type.STRING,
        price: type.STRING,
        thumbnail: type.STRING
    })


}