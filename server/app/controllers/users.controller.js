const db = require("../models");
const Users = db.users;

//Создание нового пользователя
exports.create = (req, res) => {
    // Проверка запроса на наличие данных
    if (!req.body) {
        res.status(400).send({
            message: "Нельзя добавить пустые поля"
        });
        return;
    }

    const users = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        ip_address: req.body.ip_address,
    };

    // Добавление пользователя в базу данных
    Users.create(users)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "При добавлении пользователя произошла ошибка"
            });
        });
};

//Получение всех пользователей
exports.findAll = (req, res) => {
    Users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "При получении списка пользователей произошла ошибка"
            });
        });
};

//Обновление данных пользователей
exports.update = (req, res) => {
    const id = req.params.id;

    Users.update(req.body, {
        where: {id: id}
    })
        .then(isFound => {
            if (isFound) {
                res.send({
                    message: `Пользователь с id = ${id} успешно обнавлён`
                });
            } else {
                res.send({
                    message: `Пользователь с id = ${id} не найден`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Не удалось обновить пользователя с id = ${id}`
            });
        });
};

//Удаление пользователя
exports.delete = (req, res) => {
    const id = req.params.id;

    Users.destroy({
        where: {id: id}
    })
        .then(isFound => {
            if (isFound) {
                res.send({
                    message: `Пользователь с id = ${id} успешно удалён`
                });
            } else {
                res.send({
                    message: `Пользователь с id = ${id} не найден`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Не удалось удалить пользователя с id = ${id}`
            });
        });
};