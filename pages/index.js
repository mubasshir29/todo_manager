'use client'
import React, { useState,useContext } from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AddTask from '@/components/AddTask'
import TasksList from '@/components/TasksList'
import {getAllTasks} from './../helpers/task'
import HomeTaskCard from '@/components/HomeTaskCard'
import { VscRefresh } from "react-icons/vsc";

import { AppContext } from '@/context/context'


function Home({tasks}) {
    const {addNew, toggleAddButton} = useContext(AppContext)
    const [receivedTasks,setReceivedTasks] = useState(tasks)
    //console.log(tasks)
    const reloadTasks = async (e) => {
        const updated = await getAllTasks()
        setReceivedTasks(updated)
    }
  return (
    <Layout>
        <Head>
            <title>Todo App</title>
        </Head>
        <section className='flex flex-col'>
            {addNew && <AddTask/>}
            
            <div className='bg-slate-200 p-6 rounded-lg mt-4'>
                <div className='text-xl p-3 flex justify-between'>
                    <h1 className='w-full text-2xl font-bold text-slate-700 '>Tasks</h1>
                    <span onClick={(e)=>reloadTasks(e)} className='hover:bg-slate-300 p-2 rounded-lg'><VscRefresh/></span>
                    </div>
                <div className='flex flex-col gap-3'>
                    {receivedTasks && receivedTasks.map(task => <HomeTaskCard task={task} />)}
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