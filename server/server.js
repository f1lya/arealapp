const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const db = require('./app/models');
db.sequelize.sync();

const corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Hello user"});
}) ;

require("./app/routes/users.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})