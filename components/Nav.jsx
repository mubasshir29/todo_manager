'use client'
import React,{useContext} from 'react'
import {AppContext} from '../context/context'
import { VscAccount } from "react-icons/vsc";


function Nav() {
  const {addNew, toggleAddButton} = useContext(AppContext)
  //console.log(addNew)
  const OnAddButton = (e) =>{
    e.preventDefault()
    toggleAddButton()
  }
  return (
    <div className='w-full bg-emerald-900 h-16 flex items-center'>
        <div className='w-[70%] mx-auto py-4 flex justify-between'>
            <h1 className='text-slate-100 text-4xl font-bold'>Task Manager</h1>
            <div className='w-[180px] flex justify-end gap-6 items-center'>
              {!addNew && <button onClick={(e) => OnAddButton(e)} className='border-2 border-slate-100 px-3 py-1 font-bold text-slate-100 text-lg rounded-lg hover:bg-slate-100 hover:text-slate-700'>New Task</button>}
              <span className='p-2 text-slate-100 hover:bg-slate-100 hover:text-slate-700 rounded-full text-2xl '><VscAccount/></span>
            </div>
            
        </div>
    </div>
  )
}

export default Nav