const moongoose = require('mongoose');

function connectDB(url) {
    moongoose.connect(url).then(() => console.log('Database conencted')).catch((err) => console.log(err));
}

module.exports = {
    connectDB
}