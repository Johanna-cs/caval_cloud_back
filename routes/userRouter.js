const express = require('express');
const app = express();
const userRouter = express.Router();
const models = require('../models'); 


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Affiche l'ensemble des utilisateurs :
userRouter.get('/', (req,res) => {
  models
    .User
    .findAll()
    .then(x => res.json(x))

  }
)

// Création d'un nouvel utilisateur :
userRouter.post('/', (req,res) => {
  models
    .User
    .create(req.body)
    .then(x => res.json(x))
});

// Update des infos utilisateur 
userRouter.put('/:id', (req,res) => {
  models
    .User
    .update({user_firstname : 'Nadir'},{
      where: {
        user_ID: req.params.id
      }
    })
    .then(x => res.json(x))
});

// delete d'un user
userRouter.delete('/:id', (req,res) => {
  models
    .User
    .destroy({
      where: {
        user_ID : req.params.id
      }
    })
    .then(x => res.json(x))
});

module.exports = userRouter