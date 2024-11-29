const axios = require("axios");

const getAPI = async (req, res) => {
  console.log(req.body);
  console.log("get address");


  try {
    const url = "http://127.0.0.1:11232/json_rpc";

    const requestData = {
      "jsonrpc": "2.0",
      "id": 0,
      "method": "getbalance"
    }

    const response = await axios.post(url, requestData);

    console.log("get data", response?.data);

    // return res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAPI,
};
