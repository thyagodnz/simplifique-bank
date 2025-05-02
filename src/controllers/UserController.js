import User from '../models/User.js';

function generateTicket(isPriority) {
    const prefix = isPriority ? 'P-' : 'NP-';
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${randomNumber}`;
}

async function getUsers(req, res) {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao buscar usuários', error: error.message });
    }
}

async function createUser(req, res) {
    try {
        const user = req.body;

        user.priority = user.age >= 60;
        user.ticket = generateTicket(user.priority);

        const newUser = await User.create(user);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao criar usuário', error: error.message });
    }
}

async function deleteUser(req, res) {
    const id = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete({ _id: id });

        if (!deletedUser) {
            return res.status(404).json({ res: 'Usuário não encontrado' });
        }

        return res.status(200).json({ res: 'Usuário deletado com sucesso' });
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao deletar usuário', error: error.message });
    }
}

async function updateUser(req, res) {
    const id = req.params.id;
    const newUser = req.body;

    newUser.priority = newUser.age >= 60;
    newUser.ticket = generateTicket(newUser.priority);

    try {
        const updatedUser = await User.findByIdAndUpdate(id, newUser, {
            new: true
        });

        if (!updatedUser) {
            return res.status(404).json({ res: 'Usuário não encontrado' });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ res: 'Erro ao atualizar usuário', error: error.message });
    }
}

export { getUsers, createUser, deleteUser, updateUser };
