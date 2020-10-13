const mongoose = require("mongoose")
const { MONGODB_URI , MONGODB_PASSWORD } = process.env

mongoose.connect(MONGODB_URI.replace('<password>' , MONGODB_PASSWORD) , {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    
}).then(() => {
    console.log("ATLAS database is connected")
})
.catch((err) => {
    console.log("Database not connected")
})

module.exports = mongoose