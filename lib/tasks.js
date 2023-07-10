import fs from 'fs'
import path from 'path'
import {connectDB} from './../database/mongodb'
import Task from './../models/task'

//const filepath = path.join(process.cwd(),"data","taskList.json")
connectDB()

export async function getAllTasks(){
    //const allTasksJson = fs.readFileSync(filepath)
    const allTasks = await Task.find()
    ////console.log("All tasks" , allTasks)
    return allTasks

    //return JSON.parse(allTasksJson)
}

export async function getTask(id){
    const task = await Task.findById(id)
    //console.log("Found task" , task)
    return task
}

export async function addTask(task){
    try{
        const newTask = Task(task)
        await newTask.save()
        //console.log("Task in lib",task)
        return true
    }
    catch(error){
        //console.log(error)
        return false
    }
}

export async function editTask(task){
    console.log("Request for update",task)
    try{
        const response = await Task.findByIdAndUpdate(task._id, task)
        console.log("Update response",response)
        return true
    }
    catch(error){
        console.log(error)
        return false
    }
    
}

export async function deleteTask(id){
    try{
        ////console.log("In Delete Lib",id)
        const taskToDelete = await Task.findByIdAndDelete(id)
        //console.log("Delete task" , taskToDelete)
        return true
    }
    catch(error){
        return false
    }
}