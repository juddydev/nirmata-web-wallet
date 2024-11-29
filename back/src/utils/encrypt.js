const crypto = require('crypto');

// Define a secret key and algorithm
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32); // Use a secure random key
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'), // Store the IV with the encrypted data
        encryptedData: encrypted
    };
}

module.exports = {
    encrypt
}