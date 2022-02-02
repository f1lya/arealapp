'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            first_name: 'Vadim',
            last_name: 'Perfilev',
            email: 'ifff1lya@gmail.com',
            gender: 'male',
            ip_address: '127.0.0.1',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
