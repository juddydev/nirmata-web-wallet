import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(username, password, confirmPassword);
		if (password !== confirmPassword) {

			alert("Passwords do not match");
			return;

		} else {

			const res = await axios.post(process.env.REACT_APP_API_URL + "/register", {
				username,
				password,
			});
			console.log("res");
		}
	};

	return (
		<>
			<div>Register Page</div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
				<input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
				<input type="password" placeholder="confirm" onChange={(e) => setConfirmPassword(e.target.value)} />
				<button type="submit">Register</button>
			</form>
			<div>
				is register? <Link to="/login">Login</Link>
			</div>

		</>
	)
};

export default RegisterPage;
