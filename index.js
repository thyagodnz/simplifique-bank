import express from 'express'
import mongoose from 'mongoose'

import User from './models/User.js'

const app = express();

app.use(express.json());


app.get('/users', async (req, res) => {

    const users = await User.find()

    return res.status(200).json(users)
})

app.post('/users', async (req, res) => {

    const user = req.body

    const newUser = await User.create(user)

    return res.status(201).json(newUser)
})

mongoose.connect('mongodb+srv://thyago:iWEg6QpkipCC3rHh@cluster0.xain9id.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Banco de dados conectado!')).catch(() => console.log('Erro ao conectar no banco de dados!'))

app.listen(3000)
