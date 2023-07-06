export const getAllTasks = async () => {
    console.log("Request in helper")
    const response = await fetch('http://localhost:3000/api/tasks')
    const data = await response.json()
    console.log("Get response in helper",data)
    return data.reverse()
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
    console.log("Response in Helper", response)
}