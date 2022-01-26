module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('Users', {
        first_name: {
            type: Sequelize.TEXT
        },
        last_name: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        ip_address: {
            type: Sequelize.STRING
        }
    })
    return Users
}

