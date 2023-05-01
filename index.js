const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chefs = require('./data/chefs.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Cheflo is running')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.listen(port, () => {
  console.log(`Cheflo ${port}`)
})