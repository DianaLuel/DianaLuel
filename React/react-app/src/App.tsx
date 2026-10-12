import Alert from "./components/Alert";
import FruitList from "./components/FruitList";

const fruits = ["Apple", "Banana", "Cherry"];

const handleFruitSelection = (fruit: string) => {
    console.log(`Selected fruit: ${fruit}`);
}

function App () {

    return (
        <div>
            {/* <Alert message="This is an alert message!" /> */}
            <Alert>
                This is an alert children!
            </Alert>
            <FruitList fruits={fruits} heading="Fruit List" onSelectFruit={handleFruitSelection}>
                <p>Choose your favorite fruit!</p>
            </FruitList>
        </div>
    )
}

export default App;