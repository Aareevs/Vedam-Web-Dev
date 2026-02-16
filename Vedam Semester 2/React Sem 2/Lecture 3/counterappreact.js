function CounterApp() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div id="mainbox">
            <h1>Counter App</h1>
            <p id="counter">{count}</p>
            <div className="buttons">
                <button id="decrement" onClick={decrement}>-</button>
                <button id="reset" onClick={reset}>reset</button>
                <button id="increment" onClick={increment}>+</button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CounterApp />);
