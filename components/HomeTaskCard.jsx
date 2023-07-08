import React from 'react'
import { MdDelete,MdEdit } from "react-icons/md";
import {deleteTask} from './../helpers/task'


function HomeTaskCard({task}) {
  console.log(task)

  const onEditButton = (e) => {

  }
  const onDeleteButton = async (e) => {
    e.preventDefault()
    console.log("Task ID",task._id)
    const response = await deleteTask(task._id)
    console.log("Response on main" , response)
  }
  return (
    <div className='bg-white w-full p-4 group flex gap-4 rounded-lg  hover:bg-emerald-100 drop-shadow-md'>
      <input type='checkbox' />
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
    <div className='hidden group-hover:absolute right-0 top-0 group-hover:flex flex-col justify-around group h-full px-3 py-2 text-xl text-slate-500 rounded-r-lg'>
              <span onClick={(e)=>onEditButton(e)} className='hover:bg-slate-300 p-1 rounded-lg text-slate-400 hover:text-slate-500'><MdEdit/></span>
              <span onClick={(e)=>onDeleteButton(e)} className='hover:bg-slate-300 p-1 rounded-lg text-slate-400 hover:text-slate-500'><MdDelete/></span>
            </div>
    </div>
    
  )
}

export default HomeTaskCard