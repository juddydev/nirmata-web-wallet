const axios = require("axios");

const getAPI = async (req, res) => {
  try {
    const url = "http://45.14.247.211:11232/json_rpc";
    const requestData = {
      jsonrpc: "2.0",
      id: 0,
      method: "getblockcount",
    };
    const response = await axios.post(url, requestData);
    return res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAPI,
};
