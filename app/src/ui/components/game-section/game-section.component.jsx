import "./game-section.style.css";
import { EvilTask } from "../evil-task/evil-task.component";

export function GameSection({ tasks, focusedTaskId }) {
  function renderOneTaskOnly() {
    return tasks?.map((task) => {
      return (
        <EvilTask
          key={task.id}
          id={task.id}
          isVisible={focusedTaskId === task.id}
          isMoving={focusedTaskId === task.id}
        />
      );
    });
  }

  function renderAllTasks() {
    return tasks?.map((task) => {
      return (
        <EvilTask key={task.id} id={task.id} isVisible={true} isMoving={true} />
      );
    });
  }

  return (
    <section className="game-section">
      {focusedTaskId === null ? renderAllTasks() : renderOneTaskOnly()}
    </section>
  );
}
