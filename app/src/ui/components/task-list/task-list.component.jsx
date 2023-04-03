import "./task-list.style.css"
import { TaskCard } from "../task-card/task-card.component"



export function TaskList({tasks}) {
    return (
        <section className="task-list-section">
            
            <div className="task-list-container">
                {tasks.map(task => {
                    return (
                        <TaskCard task={task}/>
                    )
                })}
            </div>
        </section>
    )
}