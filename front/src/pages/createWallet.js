import React, { useState } from "react";
import axios from "axios";
import InputTemplate from "../components/inputTemplate";
import ButtonTemplate from "../components/buttonTemplate";

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
					walletName, walletPassword
				})
				setRes(response?.data);
				console.log(response);
			}
		};
	}

	return (

		<div className="flex justify-center  h-screen mx-auto">
			<div className="flex flex-col w-1/2">

				<h1>Create Wallet</h1>
				<div className="flex flex-col gap-2">
					<p>please input the below contents!</p>

					<div className="flex gap-2">
						<div className="w-1/2">wallet name</div>
						<InputTemplate
							// labelText="Wallet Name"
							// labelStyle={{ color: "red" }}
							type="text"
							inputStyle="text-green-500"
							placeholder="input wallet name"
							onChange={(e) => setWalletName(e.target.value)}
							value={walletName}
						/>
					</div>

					<div className="flex gap-2">
						<div className="w-1/2">wallet password</div>
						<InputTemplate
							// labelText="Wallet Password"
							// labelStyle={{ color: "red" }}
							type="password"
							inputStyle="text-green-500"
							placeholder="input wallet password"
							onChange={(e) => setWalletPassword(e.target.value)}
							value={walletPassword}
						/>
					</div>
					<div className="flex gap-2">
						<div className="w-1/2"> confirm password</div>
						<InputTemplate
							// labelText="Wallet Confirm Password"
							// labelStyle={{ color: "red" }}
							type="password"
							inputStyle="text-green-500"
							placeholder="input wallet confirm password"
							onChange={(e) => setWalletConfirmPassword(e.target.value)}
							value={walletConfirmPassword}
						/>
					</div>
					<div>
						<ButtonTemplate
							buttonText="Create"
							buttonStyle={{ color: "green" }}
							onClick={() => createWalletAddress()}
						/>
					</div>
				</div>

				<div className="text-red-500">
					{res.originalAddress}
				</div>
				<div className="text-green-500">
					{res.privateKey}
				</div>
				<div className="text-orange-500">
					{res.mnemonic}
				</div>

			</div>
		</div>
	)
}

export default CreateWallet;
