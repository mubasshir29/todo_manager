import React, { useContext } from 'react'
import { MdDelete,MdEdit } from "react-icons/md";
import {deleteTask} from './../helpers/task'
import {AppContext} from './../context/context'


function HomeTaskCard({task}) {
  //console.log(task)
  const {selectedTasks, setSelectTasks} = useContext(AppContext)

  const onEditButton = (e) => {

  }
  const onDeleteButton = async (e) => {
    e.preventDefault()
    console.log("Task ID",task._id)
    const response = await deleteTask(task._id)
    console.log("Response on main" , response)
  }

  const taskSelected = (e) => {
    if(e.target.checked){
      setSelectTasks((prev) => ([...prev, task]))
      console.log(selectedTasks)
      console.log("checkbox ID", e.target.id)
    }
    else {
      const newSelectedTasks = selectedTasks.filter(item => item._id != e.target.id)
      setSelectTasks(newSelectedTasks)
      console.log(newSelectedTasks)
    }
    
  }
  return (
    <div className='bg-white w-full p-4 group flex gap-4 rounded-lg  hover:bg-emerald-100 drop-shadow-md'>
      <input type='checkbox' defaultChecked={selectedTasks.some(item => item._id == task._id)} id={task._id} onChange={(e)=>taskSelected(e)} />
      <div className='w-full  flex flex-col gap-1 '>
        <h1 className='text-lg font-bold text-slate-700'>{task.title}</h1>
        <div className='flex w-[90%] justify-between items-center text-slate-400 group-hover:text-slate-700'>
            <p className='w-[30%] text-sm'>Time: {task.timeScheduled}</p>
            <p className='w-[30%] text-sm'>Date: {task.dateScheduled}</p>
            {/* <span className='font-normal text-white text-sm px-3 py-0 rounded-full' style={{backgroundColor:`${task.statusColor}`}}>{task.status}</span> */}
        
        <div className='w-[40%] flex gap-2'>
          <p className='text-slate-400 group-hover:text-slate-700'>Status:</p>
          <span className='px-2 text-white rounded-full text-sm' style={task.status == 'Open' ? {backgroundColor:'#05b685'} : {backgroundColor:'#3c4246'}}><p>{task.status}</p></span>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default HomeTaskCard