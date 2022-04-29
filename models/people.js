const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = Schema({
    name: String,
    image: String,
    title: String,
}, {timestamps: true});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;