import User from '../models/User.js'

async function getUsers(req, res) {
    const users = await User.find()

    return res.status(200).json(users)
}

async function createUser(req, res) {
    const user = req.body

    const newUser = await User.create(user)

    return res.status(201).json(newUser)
}

async function deleteUser(req, res) {
    const id = req.params.id

    await User.findByIdAndDelete({_id: id})

    return res.status(200).json({res: 'Usuário deletado com sucesso'})
}

async function updateUser(req, res) {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, {
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



export { getUsers, createUser, deleteUser, updateUser }