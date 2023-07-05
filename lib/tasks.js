import fs from 'fs'
import path from 'path'

const filepath = path.join(process.cwd(),"data","taskList.json")

export function getAllTasks(){
    const allTasksJson = fs.readFileSync(filepath)
    return JSON.parse(allTasksJson)
}

export function addTask(task){
    console.log(task)
}
export function getTaskDetails(id){

}