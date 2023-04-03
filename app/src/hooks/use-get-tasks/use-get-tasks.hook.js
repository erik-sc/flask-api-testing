import { useState } from "react";
import { getTasks } from "../../api/tasks/get-tasks.api";

export function useGetTasks() {
    const [tasks, setTasks] = useState(null);

    async function fetchTasks() {
        try {
            const response = await getTasks();
            setTasks(response.data);
        } catch(error){
            console.log(error);
        }
    }

    return {tasks, fetchTasks}
}