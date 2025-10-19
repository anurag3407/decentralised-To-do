// Check network and contract
const {Web3} = require("web3");

// Sepolia testnet RPC
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/demo");
const contractAddress = "0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b";

async function checkNetwork() {
    try {
        console.log("🌐 Checking network information...\n");
        
        // Get network ID
        const networkId = await web3.eth.net.getId();
        console.log("📍 Network ID:", networkId.toString());
        
        // Get chain ID
        const chainId = await web3.eth.getChainId();
        console.log("⛓️  Chain ID:", chainId.toString());
        
        // Check if contract has code
        console.log("\n🔍 Checking if contract exists at address:", contractAddress);
        const code = await web3.eth.getCode(contractAddress);
        console.log("📄 Contract code length:", code.length);
        
        if (code === '0x' || code === '0x0') {
            console.log("❌ No contract found at this address on this network!");
            console.log("\n💡 This means either:");
            console.log("   1. The contract is not deployed to this network");
            console.log("   2. The address is incorrect");
            console.log("   3. You're connecting to the wrong network");
        } else {
            console.log("✅ Contract exists!");
            console.log("   Code preview:", code.substring(0, 100) + "...");
        }
        
        // Get latest block
        const blockNumber = await web3.eth.getBlockNumber();
        console.log("\n📦 Latest block number:", blockNumber.toString());
        
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

checkNetwork();
