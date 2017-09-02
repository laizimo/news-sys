require('../db/connect');

const Source = require('../models/source');

function getSource(type){
    return new Promise((resolve, reject) => {
        Source.getType(type, (err, doc) => {
            if(err) reject(err);
            resolve(doc);
        });
    });
}

function getSearch(search){
    return new Promise((resolve, reject) => {
        Source.getSearch(search, (err, doc) => {
            if(err) reject(err);
            resolve(doc);
        })
    })
}

module.exports = {
    getSource,
    getSearch
};