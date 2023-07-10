'use client'
import React, { useState,useContext } from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AddTask from '@/components/AddTask'
import TasksList from '@/components/TasksList'
import {getAllTasks,deleteTask} from './../helpers/task'
import HomeTaskCard from '@/components/HomeTaskCard'
import { VscRefresh,VscEdit,VscTrash } from "react-icons/vsc";
import { useRouter } from 'next/router'

import { AppContext } from '@/context/context'
import Link from 'next/link'


function Home({tasks}) {
    const router = useRouter()
    const {addNew, toggleAddButton,selectedTasks, setSelectTasks} = useContext(AppContext)
    const [receivedTasks,setReceivedTasks] = useState(tasks)
    //console.log(tasks)
    const reloadTasks = async (e) => {
        const updated = await getAllTasks()
        setReceivedTasks(updated)
    }
    const navigateToEdit = () => {
        console.log("Edit buttin clicked")
        const selectedTaskId = selectedTasks[0]._id
        router.push(`/task/${selectedTaskId}/edit`)
    }
    const deleteTasks = (e)=>{
        e.preventDefault()
        selectedTasks.forEach( async task => {
            try{
                await deleteTask(task._id)
            }
            catch(error){
                window.alert("Error in deleting task: ", task.title)
            }

        })
    }
  return (
    <Layout>
        <Head>
            <title>Todo App</title>
        </Head>
        <section className='flex flex-col'>
            {addNew && <AddTask/>}
            
            <div className='bg-slate-100 p-6 rounded-lg my-4'>
                <div className='text-xl p-3 flex justify-between'>
                    <h1 className='w-full text-2xl font-bold text-slate-700 '>Tasks</h1>
                    <div className='flex gap-3 h-10'>
                        {selectedTasks.length==1 && <span onClick={navigateToEdit} className='hover:bg-emerald-100  bg-white p-2 rounded-lg border-2 hover:border-emerald-400'><VscEdit/></span>}
                        {selectedTasks.length > 0 && <span onClick={(e)=>deleteTasks(e)} className='hover:bg-emerald-100 bg-white p-2 rounded-lg border-2 hover:border-emerald-400'><VscTrash/></span>}
                        <span onClick={(e)=>reloadTasks(e)} className='hover:bg-emerald-100 bg-white p-2 rounded-lg border-2 hover:border-emerald-400'><VscRefresh/></span>
                        </div>
                    </div>
                <div className='flex flex-col gap-3'>
                    {receivedTasks ? receivedTasks.map((task,index) =><HomeTaskCard key={index} task={task} />) : <h1 className='text-black'>No tasks found, Add now.</h1>}
                </div>
            </div>
        </section>
    </Layout>
  )
}

export async function getServerSideProps(){
    const receivedTask = await getAllTasks()
    console.log("Recevied tasks",receivedTask)
    return{
        props:{
            tasks: receivedTask
        }
    }
}

export default Home