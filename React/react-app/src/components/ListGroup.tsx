import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  items.push("Paris");
  // items = [];

  const clickHandler = (item: string) => {
    console.log(item);
  }

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  }

  return (
    <>
        <h1>List Group</h1>
        {items.length === 0 && <p>No item found</p>}
        {items.length > 0 && (
          <ul className="list-group">
            {items.map((item) => (
              <li className="list-group-item" key={item} onClick={handleClick}>
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