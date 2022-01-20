module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        first_name: {
            type: Sequelize.STRING
        },
    })
    return Users
}

