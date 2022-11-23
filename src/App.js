import { useContext } from "react";
import { recipesContext } from "./context/recipes";
import { useMousePosition } from "./hooks/useMousePosition";
import { useGetData } from "./hooks/useGetData";

function App() {
  const BASE_API_URL = useContext(recipesContext);
  const { x, y } = useMousePosition();
  const recipeList = useGetData(BASE_API_URL);

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
