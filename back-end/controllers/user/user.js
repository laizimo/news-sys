require('../db/connect');

const User = require('../../models/User');

const user = new User({
    username: 'zimo',
    password: '123456'
});

// user.save((err, doc) => {
//     if(err) console.log(err);
//     console.log(doc);
// });

// User.find_by_name('zimo', (err, doc) => {
//     if(err) console.log(err);
//     console.log(doc);
// });

user.is_exist((err, doc) => {
    if(err) console.log('find error: ' + err);
    console.log(doc);
});

