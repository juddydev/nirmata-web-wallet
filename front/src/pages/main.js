import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <div>Main Page</div>
            <button>
                <Link to="/login">Login</Link>
            </button>
            <button>
                <Link to="/register">Register</Link>
            </button>
        </>
    )
};

export default MainPage;
