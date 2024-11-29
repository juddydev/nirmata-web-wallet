const Wallet = require('../model/walletModel');
const decrypt = require('../utils/decrypt')

const getWalletData = async (req, res) => {
    const walletData = await Wallet.find({})
    console.log("walletData", walletData);

    // const decryptedPrivateKey =  decrypt.decrypt(walletData[0].privateKey.encryptedData, walletData[0].privateKey.iv)
    // console.log("decryptedPrivateKey", decryptedPrivateKey);
    
    // await res.send(decryptedPrivateKey)

}

module.exports = {
    getWalletData
};