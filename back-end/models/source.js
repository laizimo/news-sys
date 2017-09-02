const mongoose = require('mongoose');

const SourceSchema = new mongoose.Schema({
    id: {
        type: String,
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

SourceSchema.statics.getType = function(type, cb){
    if(type == 0){
        return this.find({}, cb);
    }else{
        return this.find({type: type}, cb);
    }
};

SourceSchema.statics.getSearch = function(search, cb){
    return this.find({name: { "$in": [search] } }, cb);
}


const SourceModel = mongoose.model('Source', SourceSchema);

module.exports = SourceModel;