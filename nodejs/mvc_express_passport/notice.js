// 1 // create connexion to database (db.js) ///////////////////////////////////////

const mysql = require('mysql');
const env = require('../env')


const con = mysql.createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  port: env.DATABASE_PORT
});

module.exports = con

// 2 // create tables (ex: tablesUser.js) //////////////////////////////////////////

const con = require('../database/db')

//create table and columns here
// launch from terminal (node file.js) stop here, no link to other files


// 3 // create model of action sql (Model.js) /////////////////////////////////////

const con = require("../database/db"); // link to step 1
const now = new Date();

// create class gathering common 
// info to every actions:

function Model(options) {
    this.db = con;
    this.state = {
      created_at: now,
      updated_at: now
    };
    this.tableName = options.tableName;
  }

// create model of action:

Model.prototype.findById = function(id, callback){
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    this.db.query(sql, id, callback)
}

// export all model via:

module.exports = Model;

// 4 // use model to specific table (ex: User.js) /////////////////////////////////////

const Model = require('./Model') // link to step 2

// create var including 
// model values (.call) + specific values for this table:

function User() {
  Model.call(this, { // call options from Model.js
    tableName: 'users'
  })
  this.state.email = 'wild@mail.com',
  this.column = 'id'
}

// extend from model:

User.prototype = Object.create(Model.prototype)
User.prototype.constructor = Model

// export function User()(export prototype as well):

module.exports = User

// 5 // create controllers for sql actions (userscontroller.js) //////////////////////////

// call action from previous file 
//based on the model file:

const User = require("../models/User"); // link to step 3

// create controller for the action:

const showUser = (req, res) => {
    const user = new User();
    // request id in url
    const userID = req.params.id
    user.findById(userID, (err, result) => {    // call model action (step 2)
      if (err) throw err                        // (userID, (err, result) = (id, callback)
      res.json(result[0])
    });
  }

  module.exports = {
    showUser
  };

// 6 // create router + link connexion (index.js) ////////////////////////////////////

const express = require("express");
const app = express();
const router = express.Router();

// call controllers linked to models:

const usersController = require('./controllers/usersController.js')

// create router link to an url 
// and a specific function "showUser" (user.js) based on "findById" (Model.js) 

router.get('/users/:id', usersController.showUser) //:id because param in model

// ?????

app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

// ?????

app.listen(4545, () => {
  console.log("Example app listening on port 4545!");
});

// go to postman for interaction 

// all in the same code ///////////////////////////////////////////////////////

tableName = 'user'

const showUser = function (tableName) {
    const sql = `SELECT * FROM ${tableName} WHERE id = ?`;
    con.query(sql, function (err, response) {
      if (err) throw err;
      response.json(response);
    });
  }