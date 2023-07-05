import {connectDB} from './../../../database/mongodb'
import {getAllTasks,addTask} from '../../../lib/tasks'

connectDB()

export default async function handler(req, res) {
    console.log("Request received")
    const method = req.method
    switch(method){
        case 'POST' :
            const task = req.body
            console.log("req body" , task)
            const response = await addTask(task)
            if(response == true){
                res.status(200).json({"msg":"successfully added"})
                break;
            }
            else res.status(400).json({"msg":"Failed to add"})
            break;
        case 'GET' :
            const data = await getAllTasks()
            console.log("Data in API", data)
            res.status(200).json(data)
            break;
    }
  }
  