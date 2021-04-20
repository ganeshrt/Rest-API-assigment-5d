import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, dropDups: false },
    password: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true }
});
schema.plugin(uniqueValidator);
const userSchema = mongoose.model('users', schema);
export default userSchema;