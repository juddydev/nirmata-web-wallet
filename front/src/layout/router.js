import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import MainPage from "../pages/main";
import CreateWallet from "../pages/createWallet";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/create-wallet",
        element: <CreateWallet />,
    },
]);

export default MainRouter;