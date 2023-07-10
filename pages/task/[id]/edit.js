//'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//import {getTask} from '../../../helpers/task'
import {getTask} from './../../../lib/tasks'
import { VscClose } from "react-icons/vsc";
import { AiOutlineClockCircle } from "react-icons/ai";
import {editTask} from './../../../helpers/task'


const editTasks = ({onetTask}) => {
  const task = JSON.parse(onetTask)
  const [updatedTask,setUpdatedTask] = useState(task)
  console.log("Received Task",task)
  console.log("Converted Task",JSON.parse(onetTask))
   const router = useRouter()
   const hours = (task.timeScheduled.split(":"))[0]
   const mins = (((task.timeScheduled.split(":"))[1]).split(" "))[0]
   const merid = (task.timeScheduled.split(" "))[1]

   console.log("Hours, Mins, Merid", hours, mins, merid)

   const onTaskUpdate= (e) =>{
    setUpdatedTask((prev) => ({...prev, [e.target.name]:e.target.value}))
   }

   const submitTask = async (e) => {
    e.preventDefault()
    const response = editTask(updatedTask)
    if(response){
      window.alert("Successfully updated")
      router.back()
    }
    else{
      
    }
   }
  // const [task, setTask] = useState(null)
  // console.log(router.query)
  
  // // setTask((prev) => (getTask(id)))
  // // // useEffect(()=>{
  // // //   gettingTask()
  // // // },[])

  // const gettingTaskDetails = async (id)=>{
  //   console.log("ID",id)
  //   const data = await getTask(id)
  //   return data
  // }

  // useEffect(()=>{
  //   const router = useRouter()
  //   const id=router.query.id
  //   const data = gettingTaskDetails(id)
  //   setTask(data)
  // },[task])

  // const gettingTask = async () => {
  //   const data = await getTask(id)
  //   setTask(data)
  // }
  if(task){
    return (
      <div className='w-screen h-screen max-w-screen max-h-screen bg-slate-700/40 flex items-center justify-center'>
        <div className='relative w-[620px] bg-slate-100 p-6 rounded-lg flex flex-col gap-3'>
        <h1 className='text-2xl font-bold text-slate-500'>Edit task</h1>
        <form className='flex flex-col gap-4' onSubmit={(e)=>submitTask(e)}>     
              <input type='text' name='title' defaultValue={task.title} onChange={(e)=>onTaskUpdate(e)}  className='p-2 text-lg rounded-lg'></input>         
              <textarea rows='3' name='description' defaultValue={task.description} onChange={(e)=>onTaskUpdate(e)}   placeholder='Description' className='p-2 text-lg rounded-lg resize-none' />
             <div className='flex w-full justify-between'>
              {/* <DateTime/> */}
              <div className='flex gap-2 items-center text-slate-500 text-lg'>
                <h1 className=''>Schedule:</h1>
                  <div className='flex gap-3 text-lg bg-white rounded-lg'>
                    <input type='date' name='dateScheduled' defaultValue={task.dateScheduled} onChange={(e)=>onTaskUpdate(e)} className='p-3 rounded-lg'></input>
                    <div className='flex items-center'>
                      <input type='time' name='timeScheduled' defaultValue={task.timeScheduled} onChange={(e)=>onTaskUpdate(e)} className='p-3 rounded-lg focus:outline-none'></input>
                      <span className='px-2 text-xl'><AiOutlineClockCircle/></span>
                  </div>
                    {/* <div className='flex justify-center items-center'>
                    <select name='hours' defaultValue={hours} onChange={(e) => onTimeChange(e)} className='focus:outline-none appearance-none w-12 text-center bg-white'>
                      
                      {(Array.from({length:12}, (value,index)=>index )).map(hour => {
                        if(hour < 10){
                          return (<option value={hour} className='text-black'>0{hour}</option>)
                        }
                      else return (<option value={hour} className='text-black'>{hour}</option>)
                      } )}
                    </select>:
                    <select name='mins' defaultValue={mins} onChange={(e) => onTimeChange(e)} className='focus:outline-none appearance-none px-2 bg-white' placeholder='Mins'>
                    
                      {(Array.from({length:12}, (value,index)=>index * 5 )).map(mins => {
                        if(mins < 10){
                          return <option value={mins} className='text-black'>0{mins}</option>
                        }
                        else return <option value={mins} className='text-black'>{mins}</option>
                      } )}
                    </select>
                    <select name='merid' defaultValue={merid} onChange={(e) => onTimeChange(e)}  className='focus:outline-none appearance-none px-2 bg-white'>
                      <option value='AM' className='text-black'>AM</option>
                      <option value='PM' className='text-black'>PM</option>
                    </select>
                    <span className='px-2 text-xl'><AiOutlineClockCircle/></span>
                  </div> */}
                  </div>
              </div>
              
              <button type='submit' className='bg-emerald-500 text-white self-end py-2 px-6 rounded-lg'>Save</button>
             </div>
             </form>
             <span onClick={()=>{router.back()}} className='bg-slate-300 absolute top-2 right-2 p-1 rounded-full'><VscClose/></span>

        </div>  
      </div>
    )
  }

}

export async function getServerSideProps(context){
  const id = context.params.id
  const data = await getTask(id)
  const onetTask = JSON.stringify(data)
  console.log(onetTask)
  return{
    props: {
      onetTask
    }
  }
}

export default editTasks