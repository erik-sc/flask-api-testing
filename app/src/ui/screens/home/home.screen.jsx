import { TaskList } from "../../components/task-list/task-list.component"
import "./home.style.css"
import { GameSection } from "../../components/game-section/game-section.component"
import useTodoistAuth from "../../../hooks/use-todoist-auth/use-todoist-auth.hook"
import { useGetTasks } from "../../../hooks/use-get-tasks/use-get-tasks.hook"
import { useEffect, useState } from "react"

export function Home() {
    const { handleLogout } = useTodoistAuth();
    const { tasks, fetchTasks } = useGetTasks();
    const [highlightedTask, setHighlight] = useState(null)

    useEffect(()=>{fetchTasks()}, [])

    function handleHighlight(id) {
        if(highlightedTask === id) {
            setHighlight(null)
            return
        }
        setHighlight(id)
    }
    return (
        <section className="home-section">
            <TaskList handleHighlight={handleHighlight} tasks={tasks}/>
            <GameSection tasks={tasks} focusedTaskId={highlightedTask}/>
        </section>
    )
}