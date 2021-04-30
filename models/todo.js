const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title field is required'],
    },
    isCompleted:{
        type: Boolean,
        default: false,
        required: [true, 'Completion status is required']
    }
})

const Todo = mongoose.model('todo', TodoSchema)
module.exports = Todo