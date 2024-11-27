import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const TransferToken = () => {
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [txHash, setTxHash] = useState("");
    const [walletData, setWalletData] = useState([])
    const [privateKey, setPrivateKey] = useState("")

    const walletDataGet = async () => {
        const res = await axios.get(process.env.REACT_APP_API_URL + '/get')
        setWalletData(res?.data)
    }

    useEffect(() => {
        walletDataGet()
    }, [])

    // 0xc97d42a5373fcedf22d0dca4920337d95c196fccee462e5191be3b6a5db583a6

    const transferTokens = async () => {
        console.log("private", privateKey);
        console.log("re", recipient);
        console.log("amount", amount);
        
        // setPrivateKey(walletData[0]?.privateKey)
        // console.log("privateKey", privateKey);
        try {
            const provider = new ethers.JsonRpcProvider(
                "https://mainnet.infura.io/v3/866561e7397b4de796a87f7e2050afc5"
            );
            const wallet = new ethers.Wallet(privateKey, provider);
            const tx = {
                to: recipient,
                value: ethers.parseEther(amount),
            };
            const transaction = await wallet.sendTransaction(tx);
            await transaction.wait();
            setTxHash(transaction.hash);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h1>Transfer Tokens</h1>
            <input
                type="text"
                placeholder="Your Private Key"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
            />
            <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="text"
                placeholder="Amount (ETH)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={() => transferTokens()}>Send</button> 

            {txHash && <p className="text-green-500"> Transaction Hash: {txHash}</p>} 
        </div>
    );
};

export default TransferToken;
