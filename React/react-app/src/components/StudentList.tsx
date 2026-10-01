interface StudentListProps {
    students: String[];
    heading: String;
}

function StudentList({students, heading}: StudentListProps) {
    return (
        <>  
        <h3>{heading}</h3>
        <ul className="list-group">
            {students.map((student, index) => (
                <li className="list-group-item" key={index}>
                    {student}
                </li>
            ))}
        </ul>
        </>
    )
}


export default StudentList;