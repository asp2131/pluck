require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());

const port = 8080 || process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});