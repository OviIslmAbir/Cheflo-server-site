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

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const viewRecipes = chefs.find(c => parseInt(c.id) === id) 
    res.send(viewRecipes)
})

app.listen(port, () => {
  console.log(`Cheflo ${port}`)
})