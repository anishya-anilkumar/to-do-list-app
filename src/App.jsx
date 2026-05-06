import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import { getTasks, saveTasks } from "./utils/storage";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        const isExpired = task.expiry && Date.now() >= task.expiry;

        if (task.id === id && !isExpired) {
          const willBeCompleted = !task.completed;

          if (willBeCompleted) {
            alert(`🎉 Congratulations! You've completed: "${task.text}"`);
          }

          return { ...task, completed: willBeCompleted };
        }

        return task;
      })
    );
  }

  return (
    <div className="app">
      <Header />
      <TaskInput onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );
}

export default App;