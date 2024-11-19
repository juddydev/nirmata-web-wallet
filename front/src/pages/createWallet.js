import React, { useState } from "react";
import axios from "axios";

const CreateWallet = () => {
    console.log("wallet page");

    const [walletName, setWalletName] = useState("");
    const [walletPassword, setWalletPassword] = useState("");
    const [walletConfirmPassword, setWalletConfirmPassword] = useState("");
    const [res, setRes] = useState("");

    const createWalletAddress = async () => {
        if (walletName === "" || walletPassword === "" || walletConfirmPassword === "") {
            alert("please input the contents!");
            return;
        } else {

            if (walletPassword !== walletConfirmPassword) {
                alert("password and confirm password are not same!");
                return;
            } else {
                const response = await axios.post(process.env.REACT_APP_API_URL + "/create-wallet", {
                    walletName
                })
                setRes(response.data);
                console.log(response);
            }
        };
    }

    console.log(res);
    return (
        <div>
            <h1>Create Wallet</h1>
            <div className="text-red-500">
                {res.customAddress}
            </div>
            <div className="text-green-500">
                {res.mnemonic}
            </div>

            <div>
                <p>please input the below contents!</p>
                <div>
                    <label>Wallet Name</label>
                    <input type="text" value={walletName} onChange={(e) => setWalletName(e.target.value)} />
                </div>
                <div>
                    <label>Wallet Password</label>
                    <input type="password" value={walletPassword} onChange={(e) => setWalletPassword(e.target.value)} />
                </div>
                <div>
                    <label>Wallet Confirm Password</label>
                    <input type="password" value={walletConfirmPassword} onChange={(e) => setWalletConfirmPassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => createWalletAddress()}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateWallet;
