
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks yet 👀</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </ul>
  );
}