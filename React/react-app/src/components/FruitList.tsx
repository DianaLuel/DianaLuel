import { useState, type ReactNode } from 'react';

interface FruitListProps {
    fruits: string[];
    heading: string;
    onSelectFruit: (fruit: string) => void;
    children: ReactNode;
}

const FruitList = ({fruits, heading, onSelectFruit, children}: FruitListProps) => {

    const [selectedFruit, setSelectedFruit] = useState(-1);
    return (
        <div>
            <h1>{heading}</h1>
            {children}
            {fruits.length === 0 && <p>No fruits found</p>}
            {fruits.length > 0 && (
                <ul className="list-group">
                    {fruits.map((fruit, index) => {
                        return (
                            <li className = {
                                selectedFruit === index
                                ? "list-group-item active"
                                : "list-group-item"
                            }
                            key={fruit}
                            onClick= {()=> {
                                setSelectedFruit(index);
                                onSelectFruit(fruit);
                            }}>
                                {fruit}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default FruitList;