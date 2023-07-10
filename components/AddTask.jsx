import React, { useState,useContext } from 'react'
import DateTime from './DateTime'
import {addTask} from './../helpers/task'
import { VscClose } from "react-icons/vsc";
import { AppContext } from '@/context/context'
import { AiOutlineClockCircle } from "react-icons/ai";


function AddTask() {
  const {addNew, toggleAddButton} = useContext(AppContext)
  const [newTime,setNewTime] = useState({
    hours:"00",
    mins:"00",
    merid:"AM"
  })

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
    const onTimeChange = (e) =>{
      setNewTime((prev)=>({...prev, [e.target.name]:e.target.value}))
      console.log(newTime)
    }

    const submitTask = (e)=>{
      e.preventDefault()
      taskContent.addedOn = (new Date()).toLocaleString()
      taskContent.status = "New"
      taskContent.timeScheduled = newTime.hours + ":" + newTime.mins + " " + newTime.merid
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
        <div className='w-full mx-auto bg-slate-200 p-4  rounded-lg flex flex-col gap-4 shadow-md'>
          <div onClick={toggleAddButton} className='text-2xl self-end rounded-full bg-slate-200 p-1 hover:bg-slate-300'><VscClose/></div>
          <form className='flex flex-col gap-4' onSubmit={(e)=>submitTask(e)}>     
            <input type='text' name='title' value={taskContent.title} onChange={(e)=>onValueChang(e)} placeholder='Title' className='p-2 text-lg rounded-lg'></input>         
            <textarea rows='3' name='description' value={taskContent.description} onChange={(e)=>onValueChang(e)} placeholder='Description' className='p-2 text-lg rounded-lg resize-none' />
           <div className='flex w-full justify-between'>
            {/* <DateTime/> */}
            <div className='flex gap-2 items-center text-slate-500 text-lg'>
              <h1 className=''>Schedule:</h1>
                <div className='flex  text-lg bg-white rounded-lg items-center'>
                  <input type='date' name='dateScheduled' value={taskContent.dateScheduled} onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg focus:outline-none'></input>
                  {/* <input type='time' name='timeScheduled' value={taskContent.timeScheduled} onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg'></input> */}
                  <div className='flex justify-center items-center'>
                    <select name='hours' defaultValue="00" onChange={(e) => onTimeChange(e)} className='focus:outline-none appearance-none w-12 text-center'>
                      
                      {(Array.from({length:12}, (value,index)=>index )).map(hour => {
                        if(hour < 10){
                          return (<option value={hour} className='text-black'>0{hour}</option>)
                        }
                      else return (<option value={hour} className='text-black'>{hour}</option>)
                      } )}
                    </select>:
                    <select name='mins' defaultValue="00" onChange={(e) => onTimeChange(e)} className='focus:outline-none appearance-none px-2' placeholder='Mins'>
                    
                      {(Array.from({length:12}, (value,index)=>index * 5 )).map(mins => {
                        if(mins < 10){
                          return <option value={mins} className='text-black'>0{mins}</option>
                        }
                        else return <option value={mins} className='text-black'>{mins}</option>
                      } )}
                    </select>
                    <select name='merid' defaultValue='AM' onChange={(e) => onTimeChange(e)}  className='focus:outline-none appearance-none px-2'>
                      <option value='AM' className='text-black'>AM</option>
                      <option value='PM' className='text-black'>PM</option>
                    </select>
                    <span className='px-2 text-xl'><AiOutlineClockCircle/></span>
                  </div>
                  
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