import { useMousePosition } from "./hooks/useMousePosition";

function App() {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>Custom hook</h1>
      <hr />
      <p>X = {x}</p>
      <p>Y = {y}</p>
    </div>
  );
}

export default App;
