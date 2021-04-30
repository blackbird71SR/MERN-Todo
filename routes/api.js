const express = require('express')
const Todo = require('../models/todo')

const router = express.Router()

router.get('/todos', (req, res, next) =>{
    Todo.find({}, 'title isCompleted')
        .then(data => res.json(data))
        .catch(next)
})

router.post('/todos', (req, res, next) =>{
    if(req.body.title){
        Todo.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else{
        res.json({
            error: 'The title field is empty!'
        })
    } 
})

router.post('/todos/:id', (req, res, next) =>{
    Todo.findById(req.params.id, (err, todo)=>{
        if(!todo){
            res.status(404).send("Todo not found");
        }else{
            todo.isCompleted = !todo.isCompleted
            todo.save((err, todo)=>{
                if(err){
                    res.status(400).send("updating todo failed");
                }else{
                    res.status(200).json({ todo: "todo updated" });
                }
            })
        }
    })
})

router.delete('/todos/:id', (req, res, next) =>{
    Todo.findOneAndDelete({'_id': req.params.id})
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router

// Todo.findOneAndUpdate({'_id': req.params.id},{isCompleted: !this.isCompleted},{new : true})
//         .then(data => res.json(data))
//         .catch(next)