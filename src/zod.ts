import { z } from "zod";

const productsURL = "https://dummyjson.com/products";

const productSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    discountPercentage: z.number(),
    rating: z.number(),
    stock: z.number(),
    brand: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    images: z.array(z.string()),
    // new: z.boolean(),
});

type Product = z.infer<typeof productSchema>;

async function fetchProducts(url: string): Promise<Product[]> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Nothing found in this route, Status : ${response.status}`,
            );
        }

        const data = await response.json();
        const rawProducts = data.products;

        const result = productSchema.array().safeParse(rawProducts);

        if (!result.success) {
            throw new Error(`Invalid data : ${result.error}`);
        }

        return result.data;
    } catch (error) {
        const errorMsg =
            error instanceof Error ? error.message : "There is a network error";
        console.log(errorMsg);

        return [];
    }
}

const products = await fetchProducts(productsURL);

products.map((product) => {
    return product.brand;
});

console.log(document.fullscreen);
