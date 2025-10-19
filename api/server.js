const express = require('express');

const ABI = require('./ABI.json');
const { Web3 } = require('web3');

const app = express();


const web3 = new Web3("https://go.getblock.us/4090d0da685345fb8520aafda889745c");
const contractAddress = "0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b";
const contract = new web3.eth.Contract(ABI, contractAddress);


app.get("/api/ethereum/view-task/:taskId",async(req,res) =>{
    try {
        const {taskId} = req.params;
        const task = await contract.methods.viewTask(taskId).call();
        const {id,name,date} = task;
        const numId = Number(id);
        const taskObj = {
            id:numId,name,date
        }
        res.status(200).json({status:200 , task:taskObj, message:"Task Exists"})
    } catch (error){
        res.status(500).json({status:500,message:"Task ID does not exist"})

    }
})

console.log (contract)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});