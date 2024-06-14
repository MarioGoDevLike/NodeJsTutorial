const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");


app.use(express.json());
app.use(cors());

const postsRouter = require('./routes/Posts');
app.use('/posts', postsRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
}).catch(err =>{
    console.error('Unable to connect: ', err)
});
  