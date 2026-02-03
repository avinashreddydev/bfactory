import { biryanis } from "@/data/menu";
import { ProductCard } from "./ProductCard";

// Map the raw data to the Product interface
// Note: data/menu.ts exports `biryanis` which matches our Product structure mostly.
// checking typings...
/*
interface Variant {
    variant_id: string;
    variant_name: string;
    price: number;
}
interface Product {
    product_id: string;
    name: string;
    image: string;
    active: boolean;
    hotsale: boolean;
    variants: Variant[];
}
*/
// The data in menu.ts seems to match this structure.

export function MenuGrid() {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {biryanis.map((product) => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
}
