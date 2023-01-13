const mongoose = require('mongoose')

const Users = mongoose.model ('User',{

    name : {type: String, requires: true},
    lastname: {type: String, requires: true},

})


module.exports = Users