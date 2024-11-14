import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        if (username === "" || password === "") {
            alert("Username and password cannot be empty");
        } else {
            const res = await axios.post(process.env.REACT_APP_API_URL + "/login", {
                username,
                password,
            });
        }
    };

    return (
        <>
            <div>Login Page</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <div>
                is new? <Link to="/register">Register</Link>
            </div>
        </>
    )
};

export default LoginPage;
