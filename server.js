const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
require("./db")
PORT = process.env.PORT || 1234

app.use(express.json())
app.use(cors())


app.use(require("./routers/companyRouter"))

app.use((req,res ,next) => {
    res.status(404)
    res.send({
        error:"Not Found"
    })
})

app.listen(PORT , () => {
    console.log(`Server running at port ${PORT}`)
})