import { TaskList } from "../../components/task-list/task-list.component"
import "./home.style.css"
import tasks from "../../../temporary-data/tasks"
import { GameSection } from "../../components/game-section/game-section.component"

export function Home() {
    return (
        <section className="home-section">
            <TaskList tasks={tasks}/>
            <GameSection/>
        </section>
    )
}