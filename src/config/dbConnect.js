const mongoose = require("mongoose")

const stringConnection = "mongodb+srv://guilhermejsilva04:123@project.gjckyqu.mongodb.net/"
mongoose.connect(stringConnection)

let db = mongoose.connection;

module.exports = db; 