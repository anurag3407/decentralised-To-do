import {useState, useRef} from "react";
import Navigation from "../components/Navigation";

const ViewTask =()=>{
    const [task,setTask]=useState({numId:null,name:null,date:null});
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [loading, setLoading] = useState(false);
    const taskIDRef = useRef(null);
    
    const viewTask =async(event)=>{
       try{
          event.preventDefault()
          const taskID = taskIDRef.current?.value || "";
          
          if (!taskID) {
            setModalContent("❌ Please enter a task ID");
            setModalVisible(true);
            return;
          }

          setLoading(true);
          const res = await fetch(`http://localhost:3000/api/ethereum/view-task/${taskID}`,
          {
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
          });
          const data = await res.json();
          if(res.ok && data.status===200){
            setTask(data.taskObj)
            setModalContent("✅ Task found!");
            setModalVisible(true);
          }else{
            throw new Error(data.message || "Task not found");
          }
       }catch(err){
        console.error(err);
        setTask({numId:null,name:null,date:null});
        setModalContent("❌ Task does not exist");
        setModalVisible(true);
       } finally {
        setLoading(false);
       }
    }
    
    const closeModal = () => {
      setModalVisible(false);
      setModalContent("");
    };
    
    return<>
     <Navigation/>
     <div className="view_task todo_btn">
     {task.numId!==null && task.name!==null && task.date!==null ? (
          <div className="view_task_by_id">
            <p><strong>Task ID:</strong> {task.numId}</p>
            <p><strong>Task Name:</strong> {task.name}</p>
            <p><strong>Task Date:</strong> {task.date}</p>
          </div>
        ) : (
          <div className="empty_div"></div>
        )}
        <form onSubmit={viewTask}>
          <h2>View Task by ID</h2>
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
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'View Task'}
          </button>
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
}
export default ViewTask;