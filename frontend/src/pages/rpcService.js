const axios = require("axios");

const CallAPI = async () => {
  try {
    // const url = "http://127.0.0.1:11232/json_rpc";
    const url = "http://45.14.247.211:11232/getinfo";

    const requestData = {
      jsonrpc: "2.0",
      id: 0,
      method: "getbalance",
    };

    const response = await axios.post(url, requestData);
    console.log(response.data);
    // Process the response data as needed
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export default CallAPI
