import {connectDB} from '../../database/mongodb'

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  