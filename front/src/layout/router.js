import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import MainPage from "../pages/main";
import CreateWallet from "../pages/createWallet";
import TokenTransfer from "../pages/tokenTransfer";

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
    {
        path: "/token-transfer",
        element: <TokenTransfer />,
    },
]);

export default MainRouter;