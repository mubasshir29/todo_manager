'use client'
import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AddTask from '@/components/AddTask'
import TasksList from '@/components/TasksList'
import {getAllTasks} from './../helpers/task'
import HomeTaskCard from '@/components/HomeTaskCard'

function Home({tasks}) {
    console.log(tasks)
  return (
    <Layout>
        <Head>
            <title>Todo App</title>
        </Head>
        <section className='flex flex-col gap-4'>
            <AddTask/>
            <h1 className='w-full text-xl font-bold text-slate-700 text-center '>Tasks</h1>
            <div className='bg-slate-200 p-6 rounded-lg'>
                <div className='flex flex-col gap-3'>
                    {tasks && tasks.map(task => <HomeTaskCard task={task} />)}
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