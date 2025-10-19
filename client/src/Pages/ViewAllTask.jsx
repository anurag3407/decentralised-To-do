import {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import Navigation from "../components/Navigation";

const ViewAllTasks =({state})=>{
    const [taskList,setTaskList]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
      const allTasks = async()=>{
        try{
            const res = await fetch("http://localhost:3000/api/ethereum/view-all-task",{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            })
            const data = await res.json();
            if(data.status===200){
                setTaskList(data.taskList || [])
            }
        }catch(error){
            console.error(error)
        } finally {
            setLoading(false)
        }
      }
      allTasks();
    },[])
    
    return<>
      <Navigation account={state?.account}/>
      <div className="view_all_tasks">
        <h1>All Tasks</h1>
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading tasks...</p>
          </div>
        ) : taskList.length === 0 ? (
          <div className="no_tasks_message">
            <p>📝 No tasks found. Create your first task!</p>
          </div>
        ) : (
          taskList.map((task)=>{
            return(
                <div 
                className="view_all_tasks_card"
                key={task.taskId}
                style={task.taskId!=="" && task.name!=="" && task.date!=="" ? {} : {display:"none"}}
                >   
                    <p>#{task.taskId}</p>
                    <p>{task.name}</p>
                    <p>{task.date}</p>
                </div>
            )
          })
        )}
      </div>
    </>
}

ViewAllTasks.propTypes = {
    state: PropTypes.object,
};

export default ViewAllTasks;