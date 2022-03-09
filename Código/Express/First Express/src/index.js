// const express = require('express');

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extends: false }));

// app.get("/", (req, res) => {
//     res.send("Olá");
// });

// app.listen(3000);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})