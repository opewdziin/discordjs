const { connect } = require("mongoose");
const config = require('../../config.json')

module.exports = {
    start() {
        try {
            connect(config.database.mongourl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log(`💻 » \x1b[[DATABASE CONECTADA]\x1b[0m`, `Bot conectado no banco de dados com sucesso.`);
        } catch (err) {
            if (err) return console.log(`🚨 » [DATABASE ERROR]:`, err);
        }
    },
};