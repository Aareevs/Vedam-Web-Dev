function StudentCard(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>{props.name}</h2>
      <p>Roll No: {props.rollNo}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentCard;