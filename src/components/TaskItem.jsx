import { useEffect, useState } from "react";
import { formatTime } from "../utils/time";

export default function TaskItem({ task, onDelete, onToggle }) {
  const [timeLeft, setTimeLeft] = useState("");
  const [notified, setNotified] = useState(false);

  const isExpired = task.expiry && Date.now() >= task.expiry;

  useEffect(() => {
    if (!task.expiry) return;

    const interval = setInterval(() => {
      const remaining = task.expiry - Date.now();

      if (remaining <= 0) {
        setTimeLeft("Expired");

        if (!notified) {
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      new Notification("⏰ Task Expired!", {
        body: task.text,
        icon: "/icon-192.png",
      });
    } catch (e) {
      alert(`⏰ Task "${task.text}" expired!`);
    }
  } else {
    alert(`⏰ Task "${task.text}" expired!`);
  }

  setNotified(true);
}

        clearInterval(interval);
      } else {
        // ✅ THIS WAS MISSING
        setTimeLeft(formatTime(remaining));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [task.expiry, notified, task.text]);

  return (
    <li className={`task-item ${task.completed ? "completed" : ""} ${isExpired ? "expired" : ""}`}>
      <div className="task-main">
        <img
          src={
            isExpired
              ? "/expired.png"
              : task.completed
              ? "/checked.png"
              : "/unchecked.png"
          }
          alt="status"
          className="status-icon"
          onClick={() => {
            if (!isExpired) onToggle(task.id);
          }}
        />

        <span
          onClick={() => {
            if (!isExpired) onToggle(task.id);
          }}
        >
          {task.text}
        </span>
      </div>

      {/* ✅ TIMER DISPLAY */}
      {task.expiry && (
        <span className="timer">{timeLeft}</span>
      )}

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        ✖
      </button>
    </li>
  );
}