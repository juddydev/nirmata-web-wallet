import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./layout/router";

function App() {
  const start = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/data");
    console.log("res==> ❤", res);
  };

  return (
    <>
      <RouterProvider router={MainRouter} />
      {/* <div>
        <button onClick={() => start()} className="text-red-500">start</button>
      </div> */}
    </>
  );
}

export default App;
