import React, { useState } from "react";
import { ethers } from "ethers";

const TransferToken = () => {
    const [privateKey, setPrivateKey] = useState("");
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [txHash, setTxHash] = useState("");

    const transferTokens = async () => {
        try {
            // Connect to the Ethereum network
            const provider = new ethers.JsonRpcProvider(
                "https://mainnet.infura.io/v3/866561e7397b4de796a87f7e2050afc5"
            );

            // Create a wallet from the private key
            const wallet = new ethers.Wallet(privateKey, provider);

            // Transaction data
            const tx = {
                to: recipient,
                value: ethers.parseEther(amount), // Updated from utils.parseEther
            };

            // Send the transaction
            const transaction = await wallet.sendTransaction(tx);
            await transaction.wait(); // Wait for confirmation
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
            <button onClick={transferTokens}>Send</button>
            {txHash && <p>Transaction Hash: {txHash}</p>}
        </div>
    );
};

export default TransferToken;
