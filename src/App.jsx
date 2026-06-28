import { useState } from "react";
import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    if (
      rollNo.trim() === "" ||
      name.trim() === "" ||
      marks.trim() === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    const newStudent = {
      rollNo,
      name,
      marks,
    };

    setStudents([...students, newStudent]);

    setRollNo("");
    setName("");
    setMarks("");
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter(
      (_, i) => i !== index
    );

    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>🎓 Student Management System</h1>

      <StudentForm
        rollNo={rollNo}
        setRollNo={setRollNo}
        name={name}
        setName={setName}
        marks={marks}
        setMarks={setMarks}
        handleAddStudent={handleAddStudent}
      />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;