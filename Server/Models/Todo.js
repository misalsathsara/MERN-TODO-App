const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String
})

const TodoModal = mongoose.model("todos", TodoSchema)
module.exports = TodoModal