
import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  function handleAdd() {
    // 🛑 VALIDATION CHECK
    if (text.trim() === "") {
      alert("⚠️ Please enter a task name before adding!");
      return;
    }

    const totalMs =
      (Number(days) * 86400000) +
      (Number(hours) * 3600000) +
      (Number(minutes) * 60000) +
      (Number(seconds) * 1000);

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
      expiry: totalMs ? Date.now() + totalMs : null,
    };

    onAdd(newTask);

    // Clear inputs
    setText("");
    setDays("");
    setHours("");
    setMinutes("");
    setSeconds("");
  }

  return (
    <div className="task-input">
      <input
        type="text"
        className="task-text"
        placeholder="Enter your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        // Bonus: Allow adding task by pressing "Enter" key
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />

      <div className="time-inputs">
        <input type="number" placeholder="d" value={days} onChange={(e) => setDays(e.target.value)} />
        <input type="number" placeholder="h" value={hours} onChange={(e) => setHours(e.target.value)} />
        <input type="number" placeholder="m" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
        <input type="number" placeholder="s" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
      </div>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}