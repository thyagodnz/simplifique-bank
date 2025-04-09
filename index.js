import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

const users = []

app.get('/users', (req, res) => {
    return res.json(users);
})

app.post('/users', (req, res) => {

    const { name, age, nickName } = req.body

    users.push({ name, age, nickName })

    return response.json({ name, age, nickName })
})

mongoose.connect('mongodb+srv://thyago:iWEg6QpkipCC3rHh@cluster0.xain9id.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Banco de dados conectado!')).catch(() => console.log('Erro ao conectar no banco de dados!'))

app.listen(3000)
