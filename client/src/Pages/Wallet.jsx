import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import ABI from "./ABI.json"

const Wallet =({saveState})=>{
    const navigateTo =useNavigate();
    const connectWallet =async()=>{
       try{
          if(window.ethereum){
              // Request account access
              await window.ethereum.request({ method: 'eth_requestAccounts' });
              
              // Create ethers provider and signer
              const provider = new ethers.BrowserProvider(window.ethereum);
              const signer = await provider.getSigner();
              const account = await signer.getAddress();
              
              console.log("🔗 Connected to wallet:", account);
              
              // Create contract instance
              const contractAddress = "0x735EE6B0F785De5b39C908Ed6bfB29A306d5455b";
              const contract = new ethers.Contract(contractAddress, ABI, signer);
              
              // Save state with ethers objects
              saveState({
                provider: provider,
                signer: signer,
                contract: contract,
                account: account
              });
              
              console.log("✅ Wallet connected successfully!");
              navigateTo("/view-all-tasks")
          }else{
            alert("Please install MetaMask to use this app!")
          }
       }catch(error){
          console.error("❌ Wallet connection error:", error)
          alert("Failed to connect wallet. Please try again.")
       }
    }

    return(
      <>
        <div className="wallet_header ">
          <span>WELCOME TO</span> <p>TODO 3.0</p>
        </div>
        <div className="connect_wallet_section todo_btn">
          <p>🔐 Please connect your MetaMask wallet to access the decentralized Todo app</p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      </>
    );
}
Wallet.propTypes = {
    saveState: PropTypes.func.isRequired,
  };
  
export default Wallet;