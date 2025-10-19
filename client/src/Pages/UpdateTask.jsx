import {useState, useRef} from "react";
import PropTypes from 'prop-types';
import Navigation from "../components/Navigation";

const UpdateTask =({state})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [loading, setLoading] = useState(false);
    const taskIDRef = useRef(null);
    const taskNameRef = useRef(null);
    const taskDateRef = useRef(null);

    const closeModal = () => {
      setModalVisible(false);
      setModalContent("");
    };
  
    const {contract,account}=state;
    const updateTask=async(event)=>{
        event.preventDefault();
        const taskName = taskNameRef.current?.value || "";
        const taskDate = taskDateRef.current?.value || "";
        const taskID = taskIDRef.current?.value || "";

        if (!taskID || !taskName || !taskDate) {
            setModalContent("❌ Please fill in all fields");
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
          console.log("🔄 Updating task:", taskID, "to", taskName, "on", taskDate);
          
          // Call contract method with ethers.js
          const tx = await contract.updateTask(taskID, taskName, taskDate);
          console.log("⏳ Transaction sent:", tx.hash);
          
          setModalContent(`⏳ Updating task... Hash: ${tx.hash.slice(0, 10)}...`);
          setModalVisible(true);
          
          // Wait for transaction confirmation
          const receipt = await tx.wait();
          console.log("✅ Transaction confirmed:", receipt);
          
          setModalContent(
            `✅ Task #${taskID} successfully updated!\nNew name: "${taskName}"\nNew date: ${taskDate}`
          );
          
          // Clear form safely
          if(taskIDRef.current) taskIDRef.current.value = "";
          if(taskNameRef.current) taskNameRef.current.value = "";
          if(taskDateRef.current) taskDateRef.current.value = "";
        }catch (err) {
          console.error("❌ Update task error:", err);
          let errorMessage = "Failed to update task. ";
          
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
      <Navigation account={state?.account} />
      <div className="update_task todo_btn">
        <form onSubmit={updateTask}>
          <h2>Update Task</h2>
          <div className="form_group">
            <label>
              Task ID
              <input 
                ref={taskIDRef}
                type="text"
                placeholder="Enter task ID..."
                disabled={loading}
              />
            </label>
          </div>
          <div className="form_group">
            <label>
              New Task Name
              <input 
                ref={taskNameRef}
                type="text"
                placeholder="Enter new task name..."
                disabled={loading}
              />
            </label>
          </div>
          <div className="form_group">
            <label>
              New Date
              <input 
                ref={taskDateRef}
                type="date"
                disabled={loading}
              />
            </label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Task'}
          </button>
        </form>

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p style={{whiteSpace: 'pre-line'}}>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

UpdateTask.propTypes = {
  state: PropTypes.object.isRequired,
};

export default UpdateTask;