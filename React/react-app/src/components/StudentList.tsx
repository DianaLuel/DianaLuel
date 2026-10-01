import { useState } from "react";

interface StudentListProps {
  students: string[];
  heading: string;
}

function StudentList({ students, heading }: StudentListProps) {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(-1);

  return (
    <>
      <h3>{heading}</h3>
      {students.length === 0 && <p>No students found</p>}
      {students.length > 0 && (
        <ul className="list-group">
          {students.map((student, index) => (
            <li
              className={
                selectedStudentIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedStudentIndex(index);
              }}
            >
              {student}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default StudentList;
