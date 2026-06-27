import { useState } from "react";
import "./App.css";

function App() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  // Add student
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (rollNo.trim() === "" || name.trim() === "" || marks.trim() === "") {
      setError("All fields are required!");
      return;
    }

    const newStudent = {
      rollNo,
      name,
      marks
    };

    setStudents([...students, newStudent]);

    // Clear input fields
    setRollNo("");
    setName("");
    setMarks("");
    setError("");
  };

  // Delete student
  const deleteStudent = (rollNo) => {
    const updatedStudents = students.filter(
      (student) => student.rollNo !== rollNo
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <div className="form-container">
        <h2>Add Student</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />

          <button type="submit">Add Student</button>
        </form>
      </div>

      {students.length > 0 ? (
        <div className="student-list">
          <h2>Student Records</h2>
          <table>
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.rollNo}>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>{student.marks}</td>
                  <td>
                    <button onClick={() => deleteStudent(student.rollNo)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-data">No student records available.</p>
      )}
    </div>
  );
}

export default App;