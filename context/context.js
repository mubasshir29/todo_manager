
import { createContext,useState } from "react";

export const AppContext = createContext()

 const Context = ({children}) => {
    const [addNew,setAddNew] = useState(false)
    const [selectedTasks, setSelectTasks] = useState([])
    const [editMode, setEditMode] = useState(false)

    function toggleAddButton(){
        setAddNew((prev)=> !prev)
    }
    return (<AppContext.Provider value={{addNew, toggleAddButton,selectedTasks, setSelectTasks}}>
            {children}
        </AppContext.Provider>)
}
export default Context