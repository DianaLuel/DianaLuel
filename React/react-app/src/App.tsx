import Message from './Message'
import ListGroup from './components/ListGroup'
import StudentList from './components/StudentList'

let countries = ["New York", "San Francisco", "Tokyo", "London"];
countries.push("Paris");

let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

let students = ["John", "Jane", "Jim", "Jill", "Jack"]; 

function App() {
  return <div>
  <Message />
  <ListGroup items={countries} heading="Countries" />
  <ListGroup items={names} heading="Names" />
  <StudentList students={students} heading="Students" />
  </div>
}

export default App;