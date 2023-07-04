import React, { useState } from 'react'

function AddTask() {
    const [taskContent, setTaskContent] = useState({
            title:"",
            description:"",
            date:"",
            time:""
    })
  return (
    <div className='w-full mt-6'>
        <div className='w-full mx-auto bg-slate-100 p-6 flex flex-col gap-4 rounded-lg'>     
            <input type='text' placeholder='Title' className='p-2 text-lg rounded-lg'></input>         
            <textarea rows='3' placeholder='Description' className='p-2 text-lg rounded-lg resize-none' />
            <button className='bg-emerald-500 text-white self-end py-2 px-6 rounded-lg'>Save</button>
        </div>
    </div>
  )
}

export default AddTask