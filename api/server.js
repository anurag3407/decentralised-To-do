const express = require('express');
const cors = require('cors');
const ABI = require('./ABI.json');
const { Web3 } = require('web3');

const tasks = require('./routes/routes')

const app = express();

// Middleware
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/ethereum',tasks)

// Sepolia testnet RPC endpoint
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/demo");
const contractAddress = "0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b";
const contract = new web3.eth.Contract(ABI, contractAddress);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Connected to Sepolia testnet');
});
