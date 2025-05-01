import Queue from '../models/Queue';

class QueueService {

    static async addToQueue(userId, name, age) {
        const isPriority = age >= 60;
        
        return await Queue.create({
            userId,
            name,
            age,
            isPriority
        });
    }


    static async getNext() {
        const nextInQueue = await Queue.findOneAndUpdate(
            { served: false },
            { $set: { served: true, serveTime: new Date() } },
            { 
                sort: { isPriority: -1, entryTime: 1 },
                new: true
            }
        );

        return nextInQueue;
    }


    static async getQueueStatus() {
        const [priorityCount, regularCount] = await Promise.all([
            Queue.countDocuments({ served: false, isPriority: true }),
            Queue.countDocuments({ served: false, isPriority: false })
        ]);

        return {
            priority: priorityCount,
            regular: regularCount,
            total: priorityCount + regularCount,
            next: await this.peekNext()
        };
    }


    static async peekNext() {
        return await Queue.findOne({ served: false })
            .sort({ isPriority: -1, entryTime: 1 })
            .select('name age isPriority');
    }


    static async clearQueue() {
        await Queue.updateMany(
            { served: false },
            { $set: { served: true, serveTime: new Date(), missed: true } }
        );
    }
}

export default QueueService;