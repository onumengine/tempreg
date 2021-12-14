const { createHash, scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

function saltPassword(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');
    const user = { email, password:`${salt}:${hashedPassword}` };

    return user;
}

function unsaltPassword(saltedPassword) {
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(saltedPassword, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login success!';
    } else {
        return 'login failed';
    }
}

export default function generateRandomNumber() {
    return (randomBytes(6).toString('hex')) + (randomBytes(2).toString());
}