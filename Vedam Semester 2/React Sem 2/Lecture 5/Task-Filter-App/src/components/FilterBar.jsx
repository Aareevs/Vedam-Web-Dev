const FilterBar = ({ setFilter }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "15px",
        justifyContent: "center",
      }}
    >
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default FilterBar;