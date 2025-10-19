const {contract}=require('../contract/contract')
const dateclashCheck=async(taskDate)=>{
    const tasks = await contract.methods.allTask().call();
    const foundTask = tasks.find(task=>task.date===taskDate);

    if(foundTask){
        return foundTask.name;
    }
    return "No Task Found";
}

const priorityCheck = async(id)=>{
    try {
        const tasks = await contract.methods.allTask().call();
        // Find the task by ID instead of using array index
        const task = tasks.find(t => Number(t.id) === Number(id));
        
        if(!task || !task.name || task.name === "") {
            return false; // Task doesn't exist, so it can be "deleted" (no-op)
        }
        
        const result = task.name.toLowerCase().includes("priority");
        return result;
    } catch(error) {
        console.error('Priority check error:', error);
        return false;
    }
}
module.exports={dateclashCheck,priorityCheck}