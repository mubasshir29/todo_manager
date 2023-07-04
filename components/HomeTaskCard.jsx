import React from 'react'

function HomeTaskCard({task}) {
  return (
    <div className='bg-white p-4 w-full rounded-lg flex flex-col gap-2'>
        <h1 className='text-lg font-bold text-slate-700'>{task.title}</h1>
        <div className='flex w-full justify-between text-slate-400 font-bold'>
            <p>Time: {task.time}</p>
            <p>Date: {task.date}</p>
            <span className='bg-emerald-400 font-normal text-white text-sm px-3 py-0 rounded-full'>{task.status}</span>
        </div>
    </div>
  )
}

export default HomeTaskCard