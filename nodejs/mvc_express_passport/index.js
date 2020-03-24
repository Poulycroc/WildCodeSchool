// 5 // create router + link connexion

const express = require("express");
const app = express();
const router = express.Router();

// call controllers linked to models

const usersController = require('./controllers/usersController.js')
//const basketController = require('./controllers/basketController.js')

// create router link to an url and a specific function

router.get('/users', usersController.showAll)
router.post('/users', usersController.createUser)
router.get('/users/:id', usersController.showUser) //:id because param in model
router.post('/users/:id', usersController.updateUser) 
router.delete('/users/:id', usersController.deleteUser) 

// ?????

app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

app.listen(4545, () => {
  console.log("Example app listening on port 4545!");
});
