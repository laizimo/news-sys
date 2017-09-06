const mongoose = require('mongoose');

const pageSize = 10;

const SourceSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    }
});

SourceSchema.statics.getType = function(type, page, cb){
    let query;
    if(type == 0){
        query = this.find({});
    }else{
        query = this.find({type: type});
    }
    query.skip((page - 1)*pageSize);
    query.limit(pageSize);
    query.exec(cb);
};

SourceSchema.statics.getPage = function(type, cb){
    let query;
    if(type == 0){
        query = this.count({});
    }else{
        query = this.count({type: type});
    }
    query.exec(cb);
}

SourceSchema.statics.getSearch = function(search, cb){
    return this.find({name: { "$in": [search] } }, cb);
}


const SourceModel = mongoose.model('Source', SourceSchema);

module.exports = SourceModel;