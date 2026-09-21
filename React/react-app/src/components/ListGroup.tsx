function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  items.push("Paris");
  items = [];
  return (
    <>
        <h1>List Group</h1>
        {items.length == 0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((item) => (
            <li className="List-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
    </>
  );
}

export default ListGroup;

/* <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item}>
          {item}
        </li>
      ))}
    </ul> */