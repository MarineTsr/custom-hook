import { useState, useEffect } from "react";

export const useGetData = (api) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let ignoreResponse = false;

    const getItems = async () => {
      try {
        const response = await fetch(api);

        if (response.ok && !ignoreResponse) {
          const items = await response.json();

          setItems(Array.isArray(items) ? items : [items]);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getItems();

    return () => {
      ignoreResponse = true;
    };
  }, [api]);

  return items;
};
