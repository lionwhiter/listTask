import { createContext, useState, useEffect } from "react";

import { listTask } from "../Data/dataList.js";

export const TaskContext = createContext();
export function TaskContextProvider({ children }) {
    const [task, setTask] = useState([]);
    
    useEffect(() => {
        setTask(listTask);
    }, []);

    //actualizacion de estado de Tareas
    function updateTask(idTask) {
        setTask(
            task.map((valueTask) => {
                if (valueTask.id == idTask) {
                    valueTask.statu = valueTask.statu == 'Pendiente'
                        ? "Realizados"
                        : "Pendiente";
                }
                return valueTask;
            }),
        );
    }

    // Eliminar Tarea 
    function delenteTask(idTask) {
        setTask(task.filter((valueTask) => valueTask.id !== idTask));
    }

    // Creacion de Nueva Tarea
    function createTask(dta) {
      console.log(dta);  
      setTask([
        ...task, 
        {
          id: dta.id,
          title: dta.title,
          desc: dta.desc,
          status: dta.statu,
          user: dta.user
      }
      ]);
      console.log(task);
    }

    return (
        <TaskContext.Provider
            value={{
                task,
                updateTask,
                delenteTask,
                createTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
