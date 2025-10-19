import {useState} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import CreateTask from './Pages/CreateTask'
import Wallet from './Pages/Wallet'
import ViewAllTasks from './Pages/ViewAllTask'
import UpdateTask from './Pages/UpdateTask'
import ViewTask from './Pages/ViewTask'
import DeleteTask from './Pages/DeleteTask';

import './App.css'

function App() {
  const [state,setState]=useState({provider:null,signer:null,contract:null,account:null})
  
  const saveState=({provider,signer,contract,account})=>{
    setState({provider:provider,signer:signer,contract:contract,account:account})
  }
  const router = createBrowserRouter([
    {path:'/',element:<Wallet saveState={saveState}/>},
    {path:'/view-all-tasks',element:<ViewAllTasks state={state}/>},
    {path:'/create-task',element:<CreateTask state={state}/>},
    {path:'/view-task',element:<ViewTask state={state}/>},
    {path:'/update-task',element:<UpdateTask state={state}/>},
    {path:'/delete-task',element:<DeleteTask state={state}/>}
  ], {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }
  })

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App