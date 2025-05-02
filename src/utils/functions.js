import { randomBytes } from 'crypto';

function generateTicket(isPriority) {
    const prefix = isPriority ? 'P-' : 'NP-';
    const randomString = randomBytes(2).toString('hex');
    return `${prefix}${randomString}`;
}

export { generateTicket };
