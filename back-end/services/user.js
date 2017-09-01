require('../db/connect');

const User = require('../models/user');
const userCode = require('../config/user');

function create(options) {
    return new User(options);
}

function findByUsername(options){
    return new Promise((resolve, reject) => {
        User.findUsername(options.username, (err, doc) => {
            if(err) reject(err);
            if(doc){
                resolve(doc);
            }
        });
    });
}

function isExistOne(options){
    return new Promise((resolve, reject) => {
        User.isExistOne(options.username, options.email, (err, doc) => {
            if(err) reject(err);
            if(doc) resolve(doc);
        });
    });
}

function save(options){
    return new Promise((resolve, reject) => {
        let model = create(options);
        model.save((err, doc) => {
            if(err) reject(err);
            if(doc){
                resolve(doc);
            }
        });
    });
}


function validatorSignUp(userInfo){   //validator user info
    let result = {
        success: false,
        message: ''
    };

    if (!/[a-z0-9-_]{4,12}/.test(userInfo.username)){
        result.message = userCode.ERROR_USER_NAME;
        return result;
    }
    if (!/^[0-9a-zA-Z_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(userInfo.email)){
        result.message = userCode.ERROR_EMAIL;
        return result;
    }
    if (!/[\w+]{6,16}/.test(userInfo.password)){
        result.message = userCode.ERROR_PASSWORD;
        return result;
    }
    if(userInfo.password !== userInfo.confirm){
        result.message = userCode.ERROR_PASSWORD_CONFIRM;
        return result;
    }

    result.success = true;

    return result;
}


const user = {
    findByUsername,
    isExistOne,
    save,
    validatorSignUp
};

module.exports = user;