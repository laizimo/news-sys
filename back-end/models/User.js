const mongoose = require('mongoose');

//定义userSchema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    create_time: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    }
});

UserSchema.statics.findUsername = function(username, cb){
    return this.findOne({
        username: username
    }, cb);
}

UserSchema.statics.isExistOne = function(username, email, cb){
    return this.find({"$or": [{username: username}, {email: email}]}, cb);
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;