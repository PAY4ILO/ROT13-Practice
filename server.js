const express = require('express')

const app = express()

app.use(express.static('templates'))
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/templates/index.html')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`)
})