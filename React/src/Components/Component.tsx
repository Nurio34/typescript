import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { productSchema, type Product } from "../types";

export const Component = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function fetchProducts() {
        try {
            setIsLoading(true);
            const response = await fetch("https://dummyjson.com/product");

            if (!response.ok) {
                throw new Error("Failed to fetch Products");
            }

            const data = await response.json();
            const rawProducts: Product[] = data.products;

            const result = productSchema.array().parse(rawProducts);
            if (!result.success) {
                throw new Error("Types doesnt match with your productSchema");
            }
            setData(result.data);

            console.log(result);
        } catch (error) {
            const msg =
                error instanceof Error ? error.message : "Network error...";
            setError(msg);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        );
    } else if (error) {
        return <div>{error}</div>;
    } else {
        return (
            <div>
                {data?.map((product) => {
                    return <p key={product.id}>{product.brand}</p>;
                })}
            </div>
        );
    }
};
