const crypto = require('crypto');

// Define a secret key and algorithm
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32); // Use a secure random key
const iv = crypto.randomBytes(16);

const decrypt = (encryptedData, iv) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = {
    decrypt
}