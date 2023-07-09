import {connectDB} from './../../../database/mongodb'
import {editTask,deleteTask,getTask} from '../../../lib/tasks'


export default async function handler(req, res) {
    
    const id = req.query.id
    //console.log("Request received", req.query)
    const method = req.method
    let response;
    switch(method){
        case 'GET':
            response = await getTask(id)
            if(response){
                res.status(200).json(response)
                break;
            }
            else res.status(400).json({"msg":"Failed to update"})
            break;

        case 'PUT' :
            const task = req.body
            //console.log("req body" , task)
            response = await editTask(task)
            if(response == true){
                res.status(200).json({"msg":"successfully updated"})
                break;
            }
            else res.status(400).json({"msg":"Failed to update"})
            break;
        case 'DELETE' :
            //console.log("In delete API", id)
            response = await deleteTask(id)
            //console.log("Data in API", response)
            if(response == true){
                res.status(200).json({"msg":"successfully deleted"})
                break;
            }
            else res.status(400).json({"msg":"Failed to delete"})
            break;
    }
  }
  