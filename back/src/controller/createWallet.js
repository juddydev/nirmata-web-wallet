const { ethers } = require('ethers');
const bip39 = require('bip39');
const Wallet = require('../model/walletModel');

const createWallet = async (req, res) => {
  console.log("here is the wallet address page", req.body);
  const name = req.body.walletName
  const password = req.body.walletPassword

  try {
    const mnemonic = bip39.generateMnemonic(256); // 24 words
    const hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic);
    const wallet = hdNode.connect();

    // Get the original address and replace '0x' with 'anr'
    const originalAddress = wallet.address;
    const customAddress = 'aNx' + originalAddress.slice(2);
    const privateKey = wallet.privateKey;
    // Save wallet to MongoDB
    const newWallet = new Wallet({
      name,
      password,
      originalAddress,
      customAddress,
      mnemonic,
      privateKey
    });

    await newWallet.save();

    console.log("success");

    res.status(200).json({
      originalAddress,
      customAddress,
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