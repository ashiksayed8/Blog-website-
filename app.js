const express = require('express')
const morgan = require('morgan')

const app = express()

//Setup View Engine
app.set('view engin', 'ejs')
app.set('views', 'views')


//Middleware Array============

const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true}),
    express.json()
]
app.use(middleware)

app.get('/', (req,res) => {
    res.json({
        message: 'I love Allah'
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})