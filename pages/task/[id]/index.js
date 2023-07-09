'use client'
import React from 'react'
import { useRouter } from 'next/router'
import { VscClose } from "react-icons/vsc";

const Task = () => {
  const router = useRouter()
  const id=router.query.id
  return (
    <div className='w-screen h-screen max-w-screen max-h-screen bg-slate-700/40 flex items-center justify-center'>
      <div className='w-[620px] bg-slate-100 p-6 rounded-lg flex flex-col gap-3'>
      
      <div className='relative flex flex-col gap-4' onSubmit={(e)=>submitTask(e)}>
        <h1 className='text-xl font-bold text-slate-600'>Task title </h1>   
        <span name='description'  className='p-2 text-lg rounded-lg resize-none bg-white'>If you want something said, ask a man; if you want something done, ask a woman.</span>
        <div className='flex w-full justify-between'>
          <div className='flex w-full justify-between gap-3 text-lg rounded-full'>
            <span className='flex gap-2 items-center'>Date : <p className='bg-white px-6 rounded-full'>02/03/203</p></span>
            <span className='flex gap-2 items-center'>Time : <p className='bg-white px-6 rounded-full'>09:30 PM</p></span>
          </div>
        </div>
        <span className='bg-slate-300 absolute top-0 right-0 p-1 rounded-full'><VscClose/></span>
      </div>
      </div>  
    </div>
  )
}

export default Task