const { ethers } = require('ethers');
const bip39 = require('bip39');
const Wallet = require('../model/walletModel');
const crypto = require('crypto');

// Define a secret key and algorithm
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32); // Use a secure random key
const iv = crypto.randomBytes(16);

const encrypt = require('../utils/encrypt')
const decrypt = require('../utils/decrypt')

const createWallet = async (req, res) => {
  console.log("--create wallet--");
  const name = req.body.walletName
  const password = req.body.walletPassword

  try {
    const mnemonic = bip39.generateMnemonic(256); // 24 words
    const hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic);
    const wallet = hdNode.connect();

    // const customAddress = 'aNx' + originalAddress.slice(2);
    const originalAddress = wallet.address;
    const privateKey = wallet.privateKey;

    const encryptedMnemonic = encrypt.encrypt(mnemonic)
    const encryptedPrivateKey = encrypt.encrypt(privateKey)
    const encryptedPassword = encrypt.encrypt(password)

    console.log("encryptedMnemonic", encryptedMnemonic);

    // const decryptedMnemonic = decrypt(encryptedMnemonic.encryptedData, encryptedMnemonic.iv);
    // const decryptedPrivateKey = decrypt(encryptedPrivateKey.encryptedData, encryptedPrivateKey.iv);
    // const decryptedPassword = decrypt(encryptedPassword.encryptedData, encryptedPassword.iv);

    // console.log("Decrypted Mnemonic:", decryptedMnemonic);

    const newWallet = new Wallet({
      name: name,
      password: encryptedPassword,
      originalAddress: originalAddress,
      mnemonic: encryptedMnemonic,
      privateKey: encryptedPrivateKey
    });

    await newWallet.save();

    console.log("success");

    res.status(200).json({
      originalAddress,
      mnemonic,
      privateKey
    });

  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a function to get all wallets
const getAllWallets = async (req, res) => {
  try {
    const wallets = await Wallet.find({}).select('-mnemonic'); // Exclude mnemonic for security
    res.status(200).json(wallets);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createWallet,
  getAllWallets
};