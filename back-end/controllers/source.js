const source = require('../services/source');
const index = require('./index');


module.exports = {
    getSource: async (ctx) => {
        // index.getUsers(ctx);
        let result = {
            success: false,
            data: null,
            count: 0,
            currentpage: 0
        };
        let page = ctx.query.page;
        let data = await source.getSource(0, page);
        let count = await source.getPage(0);
        if (data && count){
            result.success = true;
            result.data = data;
            result.count = count;
            result.currentpage = parseInt(page);
            ctx.body = result;
        }else{
            ctx.body = result;
        }
    },

    getType: async (ctx) => {
        // index.getUsers(ctx);
        let url = ctx.url;
        let result = {
            success: false,
            data: null,
            count: 0,
            currentpage: 0
        }
        let page = ctx.query.page;
        const type = parseInt(url.match(/[0-9]+/)[0]);
        let data = await source.getSource(type, page);
        let count = await source.getPage(type);
        if(data && count){
            result.success = true;
            result.data = data;
            result.count = count;
            result.currentpage = parseInt(page);
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
    },
    insert: async (ctx) => {
        let param = ctx.request.body;
        let result = {
            success: false,
            data: null
        };

        let data = await source.insertSource(param);

        if(data) {
            result.success = true,
            result.data = 'success'
        };

        ctx.body = result;
    }
};