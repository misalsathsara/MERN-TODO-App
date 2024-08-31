const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModal = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get', (req, res) => {
    TodoModal.find()
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModal.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModal.findByIdAndUpdate(id, { done: true }, { new: true })
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
        });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModal.findByIdAndDelete(id, { done: true }, { new: true })
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
        });
});

app.listen(3001, () => {
    console.log("server is running")
})