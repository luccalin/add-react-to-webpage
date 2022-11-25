function Counter() {
    const [counter, setCounter] = React.useState(0);
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>add</button>
        </div>
    );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode)
root.render(<Counter />)