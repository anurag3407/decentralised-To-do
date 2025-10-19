const {Web3}= require("web3");
const ABI = require("../ABI.json");
// Sepolia testnet RPC endpoint
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/demo");
const contractAddress = "0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}