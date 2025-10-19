import {useState, useRef} from "react";
import PropTypes from 'prop-types';
import Navigation from "../components/Navigation";

const DeleteTask =({state})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [loading, setLoading] = useState(false);
    const taskIDRef = useRef(null);

    const closeModal = () => {
      setModalVisible(false);
      setModalContent("");
    };
  
    const {contract,account}=state;
    
    const deleteTask=async(event)=>{
        event.preventDefault();
        const taskID = taskIDRef.current?.value || "";

        if (!taskID) {
            setModalContent("❌ Please enter a task ID");
            setModalVisible(true);
            return;
        }

        if (!contract || !account) {
            setModalContent("❌ Please connect your wallet first");
            setModalVisible(true);
            return;
        }

        setLoading(true);
        try{
          console.log("🗑️ Deleting task:", taskID);
          
          const res = await fetch(
            `http://localhost:3000/api/ethereum/delete-task/${taskID}`,
            {
                method:"DELETE",
                headers:{
                    "content-type":"application/json"
                }
            }
          )
          const data = await res.json();
          if(data.status===200){
            // Call contract method with ethers.js
            const tx = await contract.deleteTask(taskID);
            console.log("⏳ Transaction sent:", tx.hash);
            
            setModalContent(`⏳ Deleting task... Hash: ${tx.hash.slice(0, 10)}...`);
            setModalVisible(true);
            
            // Wait for transaction confirmation
            const receipt = await tx.wait();
            console.log("✅ Transaction confirmed:", receipt);
            
            setModalContent(
              `✅ Task #${taskID} has been successfully deleted`
            );
            
            // Clear form safely
            if(taskIDRef.current) taskIDRef.current.value = "";
          }else if(data.status===403){
            setModalContent("❌ This task cannot be deleted (priority task)");
          }else{
            throw new Error("Task cannot be deleted")
          }

        }catch (err) {
          console.error("❌ Delete task error:", err);
          let errorMessage = "Failed to delete task. ";
          
          if (err.code === 4001) {
            errorMessage += "Transaction rejected by user.";
          } else if (err.message) {
            errorMessage += err.message;
          }
          
          setModalContent(`❌ ${errorMessage}`);
        } finally {
          setModalVisible(true);
          setLoading(false);
        }
    }
    
    return(
    <>
      <Navigation />
      <div className="delete_task todo_btn">
        <form onSubmit={deleteTask}>
          <h2>Delete Task</h2>
          <div className="form_group">
            <label>
              Task ID
              <input 
                ref={taskIDRef}
                type="text"
                placeholder="Enter task ID to delete..."
                disabled={loading}
              />
            </label>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{background: 'linear-gradient(135deg, #ef4444, #dc2626)'}}
          >
            {loading ? 'Deleting...' : 'Delete Task'}
          </button>
          <p style={{
            textAlign: 'center', 
            color: 'var(--text-secondary)', 
            fontSize: '14px',
            marginTop: '-8px'
          }}>
            ⚠️ This action cannot be undone
          </p>
        </form>

        {modalVisible && (
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
  );
}

DeleteTask.propTypes = {
  state: PropTypes.object.isRequired,
};

export default DeleteTask;