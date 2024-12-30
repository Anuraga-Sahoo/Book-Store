const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, (error)=>{
   error ? console.log(error) : console.log(`Server running on http://localhost:${port}`)
})