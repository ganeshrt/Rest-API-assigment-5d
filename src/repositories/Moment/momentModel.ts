import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    title: { type: String, required: true, dropDups: false },
    tags: { type: Array, required: true },
    imgFile: { type: String, required: true },
});
schema.plugin(uniqueValidator);
const momentSchema = mongoose.model('moment', schema);
export default momentSchema;