import { useEffect, useState } from "react";

// Product interface Typescript

export interface ProductArr {
  id: number;
  name: string;
  description: string;
  imgurl: string;
  price: number;
}

// Fetch products with abortcontroller, return the results along with loading and error state.

export const FetchAllProducts = () => {
  const [products, setProducts] = useState<ProductArr[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      const apiUrl = import.meta.env.VITE_API_URL + "/api/products"
      try {
        const response = await fetch(apiUrl, {
          signal,
        });

        if (!response.ok) {
          throw new Error("Network response failed");
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error: any) {
         if(error.name === "AbortError") {
            return;
         }
        setError("Failed to fetch products.");
        setLoading(false)
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return { products, loading, error };
};