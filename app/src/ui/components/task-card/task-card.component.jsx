import "./task-card.style.css"
import targetIcon from "../../../assets/task-target-icon.svg"

export function TaskCard({handleHighlight, task}) {
    const { id, content, due } = task
    const formattedDate = due ? new Date(due.date).toLocaleString("pt-br", {year: "numeric", month: "2-digit", day:"2-digit"}) : null;
    return(
        <div className="task-card-container">
            <div className="task-card-content-container">
                <p className="task-card-name">{content}</p>
                <p className="task-card-date">{formattedDate ? formattedDate : null}</p>
            </div>
            <button onClick={() => handleHighlight(id)} className="task-card-target-button">
                <img className="task-card-target-icon" src={targetIcon} alt="Target resembling arrow shooting practice targets"/>
            </button>
        </div>
    )
}