require('../db/connect');

const Source = require('../models/source');

const pageSize = 10;

function getSource(type, page){
    return new Promise((resolve, reject) => {
        Source.getType(type, page, (err, doc) => {
            if(err) reject(err);
            if(doc){
                resolve(doc);
            }
        });
    });
}

function getPage(type){
    return new Promise((resolve, reject) => {
        Source.getPage(type, (err, doc) => {
            if(err) reject(err);
            if(doc){
                let count = doc / pageSize;
                count = Math.ceil(count);
                resolve(count);
            }
        });
    });
}

function getSearch(search){
    return new Promise((resolve, reject) => {
        Source.getSearch(search, (err, doc) => {
            if(err) reject(err);
            resolve(doc);
        });
    });
}

function insertSource(source){
    const model = new Source(source);
    return new Promise((resolve, reject) => {
        model.save((err, doc) => {
            if(err) reject(err);
            resolve(doc);
        });
    });
}

module.exports = {
    getSource,
    getSearch,
    getPage,
    insertSource
};