const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
    _id: { type: String },
    status: { type: String, default: null },
    nome: { type: String, default: null },
    sugestion: {
        list: { type: Map, default: {} },
        channel: { type: String, default: null },
        status: { type: Boolean, default: false }
    },
    autorole: { type: String, default: null }
});

const Client = model('Client', ClientSchema);
module.exports = Client;