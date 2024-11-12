import "./App.css";
import axios from "axios";

function App() {
  const start = async () => {
    const res = await axios.get("http://localhost:5000/api/data");
    console.log("res==> ❤", res);
  };

  return (
    <>
      <div>Web Wallet MVP!</div>
      <div>
        <button onClick={() => start()}>start</button>
      </div>
    </>
  );
}

export default App;
