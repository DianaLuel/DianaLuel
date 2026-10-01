import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

// function ListGroup(Probs: ListGroupProps) {
    // If we wrote this we would have used
    // Probs.items.length and Probs.heading instead of items.length and heading

function ListGroup({ items, heading }: ListGroupProps) {
  
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      {items.length > 0 && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => setSelectedIndex(index)}
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
