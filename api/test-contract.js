// Test script to check contract connectivity
const {Web3} = require("web3");
const ABI = require("./ABI.json");

// Sepolia testnet RPC
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/demo");
const contractAddress = "0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b";
const contract = new web3.eth.Contract(ABI, contractAddress);

async function testContract() {
    try {
        console.log("🔍 Testing contract connectivity...\n");
        
        // Test 1: Check taskCount
        console.log("📊 Test 1: Getting taskCount...");
        const taskCount = await contract.methods.taskCount().call();
        console.log("   Task Count:", taskCount.toString());
        
        // Test 2: Check taskId
        console.log("\n📊 Test 2: Getting taskId...");
        const taskId = await contract.methods.taskId().call();
        console.log("   Current Task ID:", taskId.toString());
        
        // Test 3: Get all tasks
        console.log("\n📊 Test 3: Getting all tasks...");
        const allTasks = await contract.methods.allTask().call();
        console.log("   Number of tasks:", allTasks.length);
        allTasks.forEach((task, index) => {
            console.log(`   Task ${index + 1}:`, {
                id: task.id.toString(),
                name: task.name,
                date: task.date
            });
        });
        
        // Test 4: Get owner
        console.log("\n📊 Test 4: Getting contract owner...");
        const owner = await contract.methods.owner().call();
        console.log("   Owner:", owner);
        
        console.log("\n✅ All tests completed!");
        
    } catch (error) {
        console.error("❌ Error:", error.message);
        console.error(error);
    }
}

testContract();
