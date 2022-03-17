const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  if (!req.query.url) {
    return res.status(400).send('url is required');
  }

  axios.get(req.query.url).then(resp => {
    console.log('resp', resp.data);
    res.send(resp.data)
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
