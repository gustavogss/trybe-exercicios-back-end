const express = require('express')
const app = express()
const port = 3000
const author = require('./module/author');

app.get('/authors', async (req, res) =>{
  const authors = await author.getAll();
  res.status(200).json(authors);

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))