const {dateclashCheck,priorityCheck}=require('../models/task')
const {contract}=require('../contract/contract')
const createTask=async(req,res)=>{
    const {taskDate}=req.body; 
    const task = await dateclashCheck(taskDate);
    try{
        if(task!=="No Task Found"){
            res.status(409).json({status:409,message:"Date clash:Task cannot be added"})
        }else{
            res.status(200).json({status:200,message:"Task can be added"})
        }
    }catch(error){
        console.error(error)
    }
}
const updateTask=async(req,res)=>{
    const {taskDate}=req.body; 
    const task = await dateclashCheck(taskDate);
    try{
      if(task!=="No Task Found"){
         res.status(409).json({status:409,message:"Date clash:Task cannot be updated"})
      }else{
         res.status(200).json({status:200,message:"Task can be updated"})
      }
    }catch(error){
     console.error(error)
    }
}
const deleteTask=async(req,res)=>{
    try{
        const {taskId}=req.params;
        const isTrue = await priorityCheck(taskId);
        if(isTrue){
          res.status(403).json({status:403,message:"Task cannot be deleted"})
        }else{
          res.status(200).json({status:200,message:"Task can be deleted"})
        }
      }catch(error){
        console.error(error)
      }
}
const viewTask=async(req,res)=>{
    try{
        const {taskId}=req.params;
        console.log('ViewTask requested for ID:', taskId)
        
        if(!taskId) {
            return res.status(400).json({status:400,message:"Task ID is required"})
        }
        
        const task = await contract.methods.viewTask(taskId).call();
        const{id,name,date}=task;
        const numId = Number(id);
        
        if(numId === 0 || !name || name === "") {
            return res.status(404).json({status:404,message:"Task does not exist"})
        }
        
        const taskObj={
            numId,name,date
        }
        res.status(200).json({status:200,taskObj,message:"Task Exist"})
    }catch(error){
        console.error('ViewTask Error:', error)
        res.status(404).json({status:404,message:"Task does not exist"})
    }
}
const allTasks=async(req,res)=>{
    try{
        const tasks = await contract.methods.allTask().call();
        
        if(!tasks || tasks.length === 0){
            return res.status(200).json({status:200,taskList:[],message:"No tasks found"})
        }
        
        const taskList = tasks
            .filter(({id, name}) => id && name && name !== "") // Filter out empty tasks
            .map(({id,name,date})=>{
               const taskId=Number(id);
               return {taskId,name,date}
            })
        
        res.status(200).json({status:200,taskList,message:"Tasks retrieved"})
    }catch(error){
        console.error('AllTasks Error:', error)
        res.status(200).json({status:200,taskList:[],message:"No tasks found"})
    }
}
module.exports={
    createTask,
    updateTask,
    deleteTask,
    viewTask,
    allTasks
}