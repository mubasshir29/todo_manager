'use client'
import React,{useContext} from 'react'
import {AppContext} from '../context/context'

function Nav() {
  const {addNew, toggleAddButton} = useContext(AppContext)
  //console.log(addNew)
  const OnAddButton = (e) =>{
    e.preventDefault()
    toggleAddButton()
  }
  return (
    <div className='w-full bg-emerald-900 h-16 flex items-center'>
        <div className='w-[80%] mx-auto py-4 flex justify-between'>
            <h1 className='text-slate-100 text-4xl font-bold'>Task Manager</h1>
            {!addNew && <button onClick={(e) => OnAddButton(e)} className='border-2 border-slate-100 px-3 py-1 font-bold text-slate-100 text-lg rounded-lg hover:bg-slate-100 hover:text-slate-700'>Add New</button>}
        </div>
    </div>
  )
}

export default Nav