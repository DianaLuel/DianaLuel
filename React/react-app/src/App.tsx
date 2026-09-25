import Message from './Message'
import ListGroup from './components/ListGroup'

let countries = ["New York", "San Francisco", "Tokyo", "London"];
countries.push("Paris");

let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

function App() {
  return <div>
  <Message />
  <ListGroup items={countries} heading="Countries" />
  <ListGroup items={names} heading="Names" />
  </div>
}

export default App;