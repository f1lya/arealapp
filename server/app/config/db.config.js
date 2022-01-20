module.exports = {
    HOST: 'postgres',
    USER: 'admin',
    PASSWORD: 'admin',
    DB: 'areal_app',
    dialect: 'postgres',
    pool: {
        max: 4,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};