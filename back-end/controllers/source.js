const source = require('../services/source');
const index = require('./index');

module.exports = {
    getSource: async (ctx) => {
        index.getUsers(ctx);
        let data = await source.getSource(0);
        ctx.body = data;
    },

    getType: async (ctx) => {
        // index.getUsers(ctx);
        let url = ctx.url;
        let result = {
            success: false,
            message: null
        }
        const type = parseInt(url.match(/[0-9]+/)[0]);
        let data = await source.getSource(type);
        if(data){
            result.success = true;
            result.message = data;
        }
        ctx.body = result;
    },
    getSearchData: async (ctx) => {
        // index.getUsers(ctx);
        let search = ctx.query.search;
        if(!search){
            search = '';
        }
        let result = {
            success: false,
            data: null
        };
        let data = await source.getSearch(search);

        if(data){
            result.success = true;
            result.data = data;
        }
        ctx.body = result;
    }
};