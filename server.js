
const morgon = require('morgan')
const express = require('express')
const app = express()

const port = 8080

const router = require('./routes/index')
const apiErrorHander = require('./error/api-error-handler')

app.use(express.json())

app.use('/', router)



app.use(apiErrorHander)
app.listen(port, () => console.log(`Example app listening on port ${port}`))