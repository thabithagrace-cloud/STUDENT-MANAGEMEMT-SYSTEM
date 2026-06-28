function StudentForm({
  rollNo,
  setRollNo,
  name,
  setName,
  marks,
  setMarks,
  handleAddStudent,
}) {
  return (
    <div className="form-container">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default StudentForm;