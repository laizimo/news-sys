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
    }
});

UserSchema.statics.find_by_name = function(username, cb){
    return this.findOne({
        username: username
    }, cb);
};

UserSchema.methods.is_exist = function(cb){
    const query = {
        username: this.username,
        password: this.password
    };

    return this.model('UserModel').findOne(query, cb);
};

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;