import { Router } from 'express'
import { getUsers, createUser, deleteUser, updateUser } from './controllers/UserController.js'
import{  getQueue, createQueue}from './controllers/QueueController.js'

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)
routes.put('/users/:id', updateUser)

routes.get('/queue', getQueue)
routes.post('/queue', createQueue)

export default routes
//Testando no Thunder Client

//GET /users: Para listar todos os usuários.

//POST /users: Para criar um novo usuário.

//GET /queue: Para listar todos os usuários na fila, ordenados por prioridade.

//POST /queue: Para adicionar um usuário à fila, fornecendo o userId no corpo da requisição, como este exemplo:

//{
    //"userId": "63f0b22f1c2d2f37f8f1ad59"  // ID do usuário