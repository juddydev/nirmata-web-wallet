import { Link } from "react-router-dom";

const MainPage = () => {
	return (
		<>
			<div>Main Page</div>
			<div>
				<button>
					<Link to="/login">Login</Link>
				</button>
			</div>
			<div>
				<button>
					<Link to="/register">Register</Link>
				</button>
			</div>
			<div>
				<button>
					<Link to="/create-wallet">Create Wallet</Link>
				</button>
			</div>
		</>
	)
};

export default MainPage;
