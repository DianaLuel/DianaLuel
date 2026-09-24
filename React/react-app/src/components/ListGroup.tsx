import { useState, type MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  items.push("Paris");
  // items = [];

  const clickHandler = (item: string) => {
    console.log(item);
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  // let selectedIndex = 0;

  //Hook
  const arr = useState(-1);
  arr[0]; // selectedItem
  arr[1]; // setSelectedItem

  // but instead of thiss we can change arr to 
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  // and use these instead of arr[0] and arr[1]

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No item found</p>}
      {items.length > 0 && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                arr[0] === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => arr[1](index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
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

// <h1>List Group</h1>
//     {items.length == 0 && <p>No item found</p>}
//     <ul className="list-group">
//       {items.map((item) => (
//         <li className="list-group-item" key={item}>
//           {item}
//         </li>
//       ))}
//     </ul>
