function StudentList({ students, deleteStudent }) {
  const getGrade = (marks) => {
    const score = Number(marks);

    if (score >= 90) return "A+";
    if (score >= 75) return "A";
    if (score >= 60) return "B";
    if (score >= 40) return "C";
    return "F";
  };

  return (
    <div className="table-container">
      {students.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td>{getGrade(student.marks)}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="empty-message">
          No student records available.
        </p>
      )}
    </div>
  );
}

export default StudentList;