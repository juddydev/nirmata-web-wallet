const Wallet = require('../model/walletModel');

const getWalletData = async (req, res) => {
    const walletData = await Wallet.find({})
    console.log("walletData", walletData);
    await res.send(walletData)

}

module.exports = {
    getWalletData
};