//'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//import {getTask} from '../../../helpers/task'
import {getTask} from './../../../lib/tasks'
import { VscClose } from "react-icons/vsc";

const editTask = ({onetTask}) => {
  const task = JSON.parse(onetTask)
  console.log("Received Task",task)
  console.log("Converted Task",JSON.parse(onetTask))
   const router = useRouter()
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
              <input type='text' name='title' defaultValue={task.title}  className='p-2 text-lg rounded-lg'></input>         
              <textarea rows='3' name='description' defaultValue={task.description}  placeholder='Description' className='p-2 text-lg rounded-lg resize-none' />
             <div className='flex w-full justify-between'>
              {/* <DateTime/> */}
              <div className='flex gap-2 items-center text-slate-500 text-lg'>
                <h1 className=''>Schedule:</h1>
                  <div className='flex gap-3 text-lg bg-white rounded-lg'>
                    <input type='date' name='dateScheduled' defaultValue={task.dateScheduled}  onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg'></input>
                    <input type='time' name='timeScheduled' defaultValue={task.timeScheduled} onChange={(e)=>onValueChang(e)} className='p-3 rounded-lg'></input>
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

export default editTask