import { useMousePosition } from "./hooks/useMousePosition";
import { useGetRecipes } from "./hooks/useGetRecipes";

function App() {
  const { x, y } = useMousePosition();
  const recipeList = useGetRecipes();

  return (
    <div>
      <h1>Custom hooks</h1>
      <hr />
      <p>X = {x}</p>
      <p>Y = {y}</p>
      <hr />
      <ul>
        {recipeList.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
