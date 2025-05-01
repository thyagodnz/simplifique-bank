import express from 'express';
import QueueService from '../services/QueueService';

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { userId, name, age } = req.body;
        
        if (!userId || !name || age === undefined) {
            return res.status(400).json({ error: 'Dados incompletos' });
        }

        const queueItem = await QueueService.addToQueue(userId, name, age);
        res.status(201).json(queueItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/next', async (req, res) => {
    try {
        const next = await QueueService.getNext();
        if (!next) return res.status(204).end();
        res.json(next);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/status', async (req, res) => {
    try {
        const status = await QueueService.getQueueStatus();
        res.json(status);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/peek', async (req, res) => {
    try {
        const next = await QueueService.peekNext();
        if (!next) return res.status(204).end();
        res.json(next);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;