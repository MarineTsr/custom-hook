import { useEffect, useContext, useState } from "react";
import { recipesContext } from "./../context/recipes";

export const useGetRecipes = () => {
  const BASE_API_URL = useContext(recipesContext);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    let ignoreResponse = false;

    const getRecipes = async () => {
      try {
        const response = await fetch(BASE_API_URL);

        if (response.ok && !ignoreResponse) {
          const recipes = await response.json();

          setRecipeList(Array.isArray(recipes) ? recipes : [recipes]);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getRecipes();

    return () => {
      ignoreResponse = true;
    };
  }, [BASE_API_URL]);

  return recipeList;
};
