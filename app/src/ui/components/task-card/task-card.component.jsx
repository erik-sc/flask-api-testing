import "./task-card.style.css"
import targetIcon from "../../../assets/task-target-icon.svg"

export function TaskCard({task}) {
    const { name, deadline } = task
    const formattedDate = new Date(deadline).toLocaleString("pt-br", {year: "numeric", month: "2-digit", day:"2-digit"});
    return(
        <div className="task-card-container">
            <div className="task-card-content-container">
                <p className="task-card-name">{name}</p>
                <p className="task-card-date">{formattedDate}</p>
            </div>
            <button className="task-card-target-button">
                <img className="task-card-target-icon" src={targetIcon} alt="Target resembling arrow shooting practice targets"/>
            </button>
        </div>
    )
}