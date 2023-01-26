import { createContext, useState, useEffect } from "react";

import { listTask } from "../Data/dataList.js";

export const TaskContext = createContext();
export function TaskContextProvider({ children }) {
    const [task, setTask] = useState([]);
    useEffect(() => {
        setTask(listTask);
    }, []);

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

    function delenteTask(idTask) {
        setTask(task.filter((valueTask) => valueTask.id !== idTask));
    }

    function createTask(dta) {
        console.log(dta);
        setTask([...task, dta]);
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
