const user = require('../services/user.js');
const userCode = require('../config/user');

const userControllers = {
    signIn: async (ctx) => {
        let formData = ctx.request.body;

        let result = {
            success: false,
            message: ''
        };

        let userResult = await user.findByUsername(formData);

        if(userResult) {
            if(formData.password === userResult.password){
                result.success = true;
                result.message = userCode.USER_LOGIN_SUCCESS;
            }else{
                result.success = false;
                result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR;
            }
        }else{
            result.success = false;
            result.message = userCode.NOT_EXIST_USER_NAME;
        }

        if(result.success === true){
            let session = ctx.session;
            console.log('success');

            session.isLogin = true;
            session.username = formData.username;
            session.userId = userResult._id;
        }

        ctx.body = result;
    },

    //register
    signUp: async (ctx) => {
        const userInfo = ctx.request.body;

        const { email, username, password, confirm } = userInfo;

        let result = {
            success: false,
            message: ''
        };

        const validatorResult = user.validatorSignUp(userInfo);

        if(!validatorResult.success){
            result = validatorResult;
            ctx.body = result;
            return;
        }

        let existOne = await user.isExistOne(userInfo);

        if(existOne){
            if(existOne.username === userInfo.username){
                result.message = userCode.FAIL_USER_NAME_IS_EXIST;
                ctx.body = result;
                return;
            }
            if(existOne.email === userInfo.email){
                result.message = userCode.FAIL_EAMIL_IS_EXIST;
                ctx.body = result;
                return;
            }
        }

        let insertResult = await user.save({
            username: userInfo.username,
            password: userInfo.password,
            email: userInfo.email,
            create_time: new Date().getTime(),
            level: 3
        });

        if(insertResult){
            if(insertResult._id){
                result.message = userCode.USER_SINGUP_SUCCESS;
                result.success = true;
            }else{
                result.message = userCode.SYS_ERROR;
            }
        }else{
            result.message = userCode.SYS_ERROR;
        }

        ctx.body = result;
    }
}

module.exports = userControllers;


