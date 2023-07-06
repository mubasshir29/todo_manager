import React from 'react'
import { MdDelete,MdEdit } from "react-icons/md";
import {deleteTask} from './../helpers/task'


function HomeTaskCard({task}) {

  const onEditButton = (e) => {

  }
  const onDeleteButton = async (e) => {
    e.preventDefault()
    console.log("Task ID",task._id)
    const response = await deleteTask(task._id)
    console.log("Response on main" , response)
  }
  return (
    <div className='relative bg-white group p-4 w-full rounded-lg flex flex-col gap-2 hover:bg-slate-100'>
        <h1 className='text-lg font-bold text-slate-700'>{task.title}</h1>
        <div className='flex w-full justify-between items-center text-slate-400 font-bold group-hover:text-slate-700'>
            <p>Time: {task.timeScheduled}</p>
            <p>Date: {task.dateScheduled}</p>
            <p className=''>Status: <span className={`text-white bg-${task.status} px-3 rounded-full py-1 ml-2`}>{task.status}</span></p>
            <span className='font-normal text-white text-sm px-3 py-0 rounded-full' style={{backgroundColor:`${task.statusColor}`}}>{task.status}</span>
        </div>
        <div className='hidden group-hover:absolute right-0 top-0 group-hover:flex flex-col justify-around group h-full px-3 py-2 text-xl text-slate-500 rounded-r-lg'>
              <span onClick={(e)=>onEditButton(e)} className='hover:bg-slate-300 p-1 rounded-lg text-slate-400 hover:text-slate-500'><MdEdit/></span>
              <span onClick={(e)=>onDeleteButton(e)} className='hover:bg-slate-300 p-1 rounded-lg text-slate-400 hover:text-slate-500'><MdDelete/></span>
            </div>
    </div>
  )
}

export default HomeTaskCard