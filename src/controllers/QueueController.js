import Queue from '../models/Queue.js';
import User from '../models/User.js';

async function getQueue(req, res) {
    try {
        const queueList = await Queue.find()
            .populate('list')  
            .sort({ 'list.priority': 1, createdAt: 1 });  

        return res.status(200).json(queueList);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar a fila', error: error.message });
    }
}

async function createQueue(req, res) {
    try {
        const { userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const newQueueEntry = new Queue({
            list: userId  
        });

        await newQueueEntry.save();
        return res.status(201).json(newQueueEntry);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao adicionar à fila', error: error.message });
    }
}

export { getQueue, createQueue };

//Testando no Thunder Client

//GET /users: Para listar todos os usuários.

//POST /users: Para criar um novo usuário.

//GET /queue: Para listar todos os usuários na fila, ordenados por prioridade.

//POST /queue: Para adicionar um usuário à fila, fornecendo o userId no corpo da requisição, como este exemplo:

//{
    //"userId": "63f0b22f1c2d2f37f8f1ad59"  // ID do usuário