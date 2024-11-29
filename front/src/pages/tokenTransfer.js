import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

// 123
// 0xfc0f88D6F4e56998be116563090d50f3FBa433B0
// 0.3 eth

// asd
// 0xFa1Dbc905917254e0FF728d31251E459b0A14a0C

const TransferToken = () => {
  const [recipient, setRecipient] = useState("0x21f89B113824925c5d8E76DfbC6a79559596234a");
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState("");
  const [walletData, setWalletData] = useState([])
  const [privateKey, setPrivateKey] = useState("")

  // const walletDataGet = async () => {
  //   const res = await axios.get(process.env.REACT_APP_API_URL + '/get')
  //   setWalletData(res?.data)
  // }
  // console.log("wallet data", walletData);

  // useEffect(() => {
  //   walletDataGet()
  // }, [])

  // 0xc97d42a5373fcedf22d0dca4920337d95c196fccee462e5191be3b6a5db583a6

  const transferTokens = async () => {

    console.log("recipient", recipient);
    console.log("amount", amount);

    try {
      // const provider = new ethers.JsonRpcProvider(
      //   "https://mainnet.infura.io/v3/866561e7397b4de796a87f7e2050afc5"
      // );
      // const wallet = new ethers.Wallet(privateKey, provider);
      // const tx = {
      //   to: recipient,
      //   value: ethers.parseEther(amount),
      // };
      // const transaction = await wallet.sendTransaction(tx);


      // await transaction.wait();
      // setTxHash(transaction.hash);
      const res = await axios.post(process.env.REACT_APP_API_URL + '/tokentransfer', {recipient,amount})
      console.log(res?.data);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Transfer Tokens</h1>
      {/* <div>
        privateKey :
        <div>

          <input
            type="password"
            disabled
            // value={recipient}
          />
        </div>
      </div> */}
      <div>
        Recipient Address :
        <div>
          <input
            type="text"
            placeholder="Recipient Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>
      </div>

      <div>
        Amount :
        <div>
          <input
            type="text"
            placeholder="Amount (ETH)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>


      <button onClick={() => transferTokens()}>Send</button>

      {txHash && <p className="text-green-500"> Transaction Hash: {txHash}</p>}
    </div>
  );
};

export default TransferToken;
