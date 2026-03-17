return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
    }}
  >
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "10px",
        width: "350px",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Task Manager</h2>

      {/* Input */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <FilterBar setFilter={setFilter} />

      <ul style={{ marginTop: "15px", padding: 0, listStyle: "none" }}>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  </div>
);