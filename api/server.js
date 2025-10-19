const express = require('express');

const ABI = require('./ABI.json');
const { Web3 } = require('web3');

const tasks = require('./routes/routes')

const app = express();


const web3 = new Web3("https://go.getblock.us/4090d0da685345fb8520aafda889745c");
const contractAddress = "0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b";
const contract = new web3.eth.Contract(ABI, contractAddress);




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



app.use(cors())
app.use(express.json());


app.use('/api/ethereum',tasks)
