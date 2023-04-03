import "./task-list.style.css";
import { TaskCard } from "../task-card/task-card.component";

export function TaskList({ handleHighlight, tasks }) {
  return (
    <section className="task-list-section">
      <div className="task-list-container">
        {tasks?.map((task) => {
          return <TaskCard handleHighlight={handleHighlight} key={task.id} task={task} />;
        })}
      </div>
    </section>
  );
}
