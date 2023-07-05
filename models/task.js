import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    addedOn: String,
    dateScheduled: String,
    timeScheduled: String,
    status: String
})

const taskModel = mongoose.models.Task || mongoose.model('Task', taskSchema)

export default taskModel