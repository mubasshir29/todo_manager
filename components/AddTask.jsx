import React, { useState,useContext } from 'react'
import DateTime from './DateTime'
import {addTask} from './../helpers/task'
import { VscClose } from "react-icons/vsc";
import { AppContext } from '@/context/context'


function AddTask() {
  const {addNew, toggleAddButton} = useContext(AppContext)

    const [taskContent, setTaskContent] = useState({
            title:"",
            description:"",
            addedOn:"",
            dateScheduled:"",
            timeScheduled:"",
            status:""

    })
    const onValueChang =(e)=>{
      setTaskContent((prev) => ({...prev, [e.target.name]:e.target.value}))
      //console.log(taskContent)
    }

    const submitTask = (e)=>{
      e.preventDefault()
      taskContent.addedOn = (new Date()).toLocaleString()
      taskContent.status = "New"
      console.log(taskContent)
      addTask(taskContent)
      setTaskContent({
        title:"",
        description:"",
        addedOn:"",
        dateScheduled:"",
        timeScheduled:"",
        status:""
      })
    }
  return (
    <div className='w-full mt-6'>
        <div className='w-full mx-auto bg-slate-100 p-4  rounded-lg flex flex-col gap-4'>
          <div onClick={toggleAddButton} className='text-2xl self-end rounded-full bg-slate-200 p-1 hover:bg-slate-300'><VscClose/></div>
          <form className='flex flex-col gap-4' onSubmit={(e)=>submitTask(e)}>     
            <input type='text' name='title' value={taskContent.title} onChange={(e)=>onValueChang(e)} placeholder='Title' className='p-2 text-lg rounded-lg'></input>         
            <textarea rows='3' name='description' value={taskContent.description} onChange={(e)=>onValueChang(e)} placeholder='Description' className='p-2 text-lg rounded-lg resize-none' />
           <div className='flex w-full justify-between'>
            {/* <DateTime/> */}
            <div className='flex gap-2 items-center text-slate-500 text-lg'>
              <h1 className=''>Schedule:</h1>
                <div className='flex gap-3 text-lg bg-white rounded-lg'>
                  <input type='date' name='dateScheduled' value={taskContent.dateScheduled} onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg'></input>
                  <input type='time' name='timeScheduled' value={taskContent.timeScheduled} onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg'></input>
                </div>
            </div>
            
            <button type='submit' className='bg-emerald-500 text-white self-end py-2 px-6 rounded-lg'>Save</button>
           </div>
           </form>
        </div>
    </div>
  )
}

export default AddTask