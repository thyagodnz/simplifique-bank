import { Router } from 'express';
import { getUsers, createUser, deleteUser, updateUser } from './controllers/UserController.js';
import { getQueue, createQueue } from './controllers/QueueController.js';

const routes = Router();

routes.get('/users', getUsers);
routes.post('/users', createUser);
routes.delete('/users/:id', deleteUser);
routes.put('/users/:id', updateUser);

routes.get('/queue', getQueue);
routes.post('/queue', createQueue);

export default routes;
