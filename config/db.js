const mongoose = require('mongoose');
let db = 'mongodb://localhost:27017/test';

let con = mongoose.createConnection(db, (error) => {
    if (!error) {
        console.log('Connected to: ' + db);
    } else {
        console.log(error);
    }
})

module.exports = con;