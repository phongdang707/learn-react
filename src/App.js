import './App.css';
import Button from "./components/buttons";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            AHIHI VINH
            <br/>
            {count}
            <Button onClick={() => {
                setCount((prevState) => {
                    return prevState + 1
                })
            }}>Click me</Button>
        </div>
    );
}

export default App;
