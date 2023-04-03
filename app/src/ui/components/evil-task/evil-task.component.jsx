import { useEffect, useState } from "react";
import { getRandomInt } from "../../../helpers/random.helper";
import evilTaskImage from "../../../assets/evil-task.png";

import { motion } from "framer-motion";

export function EvilTask({ id, isVisible, isMoving }) {
  let intervalId;
  const [x, setX] = useState(350);
  const [y, setY] = useState(350);

  useEffect(() => {
    if (!intervalId) {
      const interval = getRandomInt(1000, 2000);
      intervalId = setInterval(updatePointsRandomly, interval);
    }
  }, []);

  function updatePointsRandomly() {
    setX(getRandomInt(0, 600));
    setY(getRandomInt(0, 600));
  }

  return isVisible ? (
    <motion.div
      className="evil-task"
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <img
        onClick={() => console.log("ATIROU E MATOU "+id)}
        className="evil-task-img"
        src={evilTaskImage}
        alt="Pixel art of a task icon with angry face"
      />
    </motion.div>
  ) : null;
}
