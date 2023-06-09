require('dotenv').config()
const express = require('express')

const models = require('./models/models')
const router = require('./routes/index')
const sequelize = require('./db')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 5000
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.static(path.resolve(__dirname, 'static')))

//Обработка ошибок, последний Middleware
app.use(errorHandler)


app.get('/', (req, res) => {
    res.status(200).json({message: 'Working!'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

