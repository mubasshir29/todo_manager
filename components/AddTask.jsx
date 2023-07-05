import React, { useState } from 'react'
import DateTime from './DateTime'
import {addTask} from './../lib/tasks'

function AddTask() {
    const [taskContent, setTaskContent] = useState({
            title:"",
            description:"",
            dateAdded:"",
            timeAdded:"",
            dateScheduled:"",
            timeScheduled:""

    })
    const onValueChang =(e)=>{
      setTaskContent((prev) => ({...prev, [e.target.name]:e.target.value}))
      console.log(taskContent)
    }

    const submitTask = (e)=>{
      e.preventDefault()
      console.log(taskContent)
      addTask(taskContent)
    }
  return (
    <div className='w-full mt-6'>
        <div className='w-full mx-auto bg-slate-100 p-6  rounded-lg'>
          <form className='flex flex-col gap-4' onSubmit={(e)=>submitTask(e)}>     
            <input type='text' name='title' onChange={(e)=>onValueChang(e)} placeholder='Title' className='p-2 text-lg rounded-lg'></input>         
            <textarea rows='3' name='description' onChange={(e)=>onValueChang(e)} placeholder='Description' className='p-2 text-lg rounded-lg resize-none' />
           <div className='flex w-full justify-between'>
            {/* <DateTime/> */}
            <div className='flex gap-2 items-center text-slate-500 text-lg'>
              <h1 className=''>Schedule:</h1>
                <div className='flex gap-3 text-lg bg-white rounded-lg'>
                  <input type='date' name='dateScheduled' onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg'></input>
                  <input type='time' name='timeScheduled' onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg'></input>
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