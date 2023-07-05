import fs from 'fs'
import path from 'path'
import {connectDB} from './../database/mongodb'
import Task from './../models/task'

//const filepath = path.join(process.cwd(),"data","taskList.json")
connectDB()

export async function getAllTasks(){
    //const allTasksJson = fs.readFileSync(filepath)
    const allTasks = await Task.find()
    console.log("All tasks" , allTasks)
    return allTasks

    //return JSON.parse(allTasksJson)
}

export async function addTask(task){
    try{
        const newTask = Task(task)
        await newTask.save()
        console.log("Task in lib",task)
        return true
    }
    catch(error){
        console.log(error)
        return false
    }
}
export function getTaskDetails(id){

}