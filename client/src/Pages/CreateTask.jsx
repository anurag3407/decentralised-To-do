import {useState, useRef} from "react";
import PropTypes from 'prop-types';
import Navigation from "../components/Navigation";

const CreateTask =({state})=>{

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [loading, setLoading] = useState(false);
    const taskNameRef = useRef(null);
    const taskDateRef = useRef(null);

    const closeModal = () => {
        setModalOpen(false);
        setModalContent("");
      };

    const createTask = async(event)=>{
        event.preventDefault();
        const {contract,account}=state;
        const taskName = taskNameRef.current?.value || "";
        const taskDate = taskDateRef.current?.value || "";
        
        if (!taskName || !taskDate) {
            setModalContent("⚠️ Please fill in all fields");
            setModalOpen(true);
            return;
        }

        if (!contract || !account) {
            setModalContent("❌ Please connect your wallet first");
            setModalOpen(true);
            return;
        }

        setLoading(true);
        try{
            console.log("📝 Creating task:", taskName, "on", taskDate);
            console.log("📍 Contract:", contract.target);
            console.log("👤 Account:", account);
            
            // Call contract method with ethers.js
            const tx = await contract.createTask(taskName, taskDate);
            console.log("⏳ Transaction sent:", tx.hash);
            
            setModalContent(`⏳ Transaction pending... Hash: ${tx.hash.slice(0, 10)}...`);
            setModalOpen(true);
            
            // Wait for transaction confirmation
            const receipt = await tx.wait();
            console.log("✅ Transaction confirmed:", receipt);
            
            setModalContent(`✅ Task "${taskName}" successfully added for ${taskDate}`);
            
            // Clear form safely
            if(taskNameRef.current) taskNameRef.current.value = "";
            if(taskDateRef.current) taskDateRef.current.value = "";
            
        } catch (error) {
            console.error("❌ Create task error:", error);
            let errorMessage = "Failed to create task. ";
            
            if (error.code === 4001) {
                errorMessage += "Transaction rejected by user.";
            } else if (error.code === -32603) {
                errorMessage += "Internal JSON-RPC error.";
            } else if (error.message) {
                errorMessage += error.message;
            }
            
            setModalContent(`❌ ${errorMessage}`);
          } finally {
            setModalOpen(true);
            setLoading(false);
          }
    }
    return(
        <>
          <Navigation account={state?.account} />
          <div className="create_task todo_btn">
            <form onSubmit={createTask}>
              <h2>Create New Task</h2>
              <div className="form_group">
                <label>
                  Task Name
                  <input 
                    ref={taskNameRef}
                    type="text"
                    placeholder="Enter task name..."
                    disabled={loading}
                  />
                </label>
              </div>
              <div className="form_group">
                <label>
                  Date
                  <input 
                    ref={taskDateRef}
                    type="date"
                    disabled={loading}
                  />
                </label>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Task'}
              </button>
            </form>
    
            {modalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <p>{modalContent}</p>
                </div>
              </div>
            )}
          </div>
        </>
      )
}

CreateTask.propTypes = {
  state: PropTypes.object.isRequired,
};

export default CreateTask;