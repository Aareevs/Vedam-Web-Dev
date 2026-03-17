const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            opacity: task.completed ? 0.6 : 1,
          }}
        >
          {task.text}
        </span>
      </div>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
};

export default TaskItem;