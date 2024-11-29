
const axios = require('axios')

const tokenTransfer = async (req, res) => {
  console.log("--token transfer page--", req.body);
  try {
    const url = "http://45.14.247.211:11232/json_rpc";
    // const url = "http://127.0.0.1:11232/json_rpc";

    const requestData = {
      "jsonrpc": "2.0",
      "id": 0,
      "method": "sendrawtransaction",
      // "params": {
      //   "wallet_address": "NiRDbSpgDzyaMecaMUi6orsLimz3M8ptCzYzEuboTdYmwai8xhyATWnkHCt26Ts2kT75ajPGgmDAWR6xdpVBto8Vz1dmQJp8AJ",
      //   "extra_text": "",
      //   "pos_block": false,
      //   "stakeholder_address": "",
      //   "pos_amount": 2,
      //   "pos_index": 1
      // }
    }

    const response = await axios.post(url, requestData);

    console.log("get data", response?.data);

    // return res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }

}

module.exports = {
  tokenTransfer
}