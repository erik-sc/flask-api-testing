import "./game-section.style.css";
import evilTaskImage from "../../../assets/evil-task.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function GameSection() {
  let intervalId;
  const [x, setX] = useState(350);
  const [y, setY] = useState(350);

  useEffect(() => {
    if (!intervalId) {
        intervalId = setInterval(updatePointsRandomly, 900);
      }
    
  }, [])

  function updatePointsRandomly() {
    setX(getRandomInt(600));
    setY(getRandomInt(600));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <section className="game-section">
      <motion.div
        className="evil-task"
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img
          onClick={() => console.log("ATIROU E MATOU")}
          className="evil-task-img"
          src={evilTaskImage}
          alt="Pixel art of a task icon with angry face"
        />
      </motion.div>
    </section>
  );
}
