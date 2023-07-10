export const getAllTasks = async () => {
    //console.log("Request in helper")
    const response = await fetch('http://localhost:3000/api/tasks')
    const data = await response.json()
    //console.log("Get response in helper",data)
    return data.reverse()
    //return response.json()
}
export const getTask = async (id) => {
    //console.log("Request in helper")
    const response = await fetch(`http://localhost:3000/api/tasks/${id}`)
    const data = await response
    //console.log("Get response in helper",data)
    return data
    //return response.json()
}

export const addTask = async (task) => {
    const response = await fetch('http://localhost:3000/api/tasks' , {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //console.log("Response in Helper", response)
    if(response.status == 200){
        window.alert("Successfully added")
    }
    else window.alert("Issue in adding task")
}

export const editTask = async (task) => {
    const response = await fetch(`http://localhost:3000/api/tasks/${task._id}` , {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //console.log("Response in Helper", response)
    if(response.status == 200){
        return true
    }
    else window.alert("Issue in updating task")
}

export const deleteTask = async (id) => {
    //console.log("ID in helper:",id)
    const response = await fetch(`http://localhost:3000/api/tasks/${id}` , {
        method: 'DELETE',
    })
    if(response.status == 200){
        window.alert("Successfully deleted, refresh the tasks")
    }
    else window.alert("Issue in deleting task")
}