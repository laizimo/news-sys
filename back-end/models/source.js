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


const SourceModel = new SourceSchema();

module.exports = SourceModel;