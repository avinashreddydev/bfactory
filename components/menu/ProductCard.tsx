"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, useCartStore } from "@/lib/store";
import { ProductVariantSelector } from "./ProductVariantSelector";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { toast } from "sonner";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
    const { addToCart, cart, removeFromCart, updateQuantity } = useCartStore();

    // Determine current item ID and find it in cart
    const currentItemId = `${product.product_id}-${selectedVariant.variant_id}`;
    const cartItem = cart.find((item) => item.itemId === currentItemId);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = () => {
        addToCart(product, selectedVariant, 1);
        if (quantity === 0) {
            toast.success(`Added ${product.name} to cart`);
        }
    };

    const handleIncrement = () => {
        updateQuantity(currentItemId, 1);
    };

    const handleDecrement = () => {
        if (quantity === 1) {
            removeFromCart(currentItemId);
        } else {
            updateQuantity(currentItemId, -1);
        }
    };

    return (
        <div className="group relative bg-card rounded-2xl border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ring-1 ring-black/5 dark:ring-white/10">
            {product.hotsale && (
                <Badge className="absolute top-4 left-4 z-10 bg-orange-500/90 hover:bg-orange-600 backdrop-blur-sm border-none px-3 py-1 text-sm font-medium shadow-sm">
                    Hot Sale
                </Badge>
            )}

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col flex-1 p-5 gap-4">
                <div className="space-y-1.5">
                    <h3 className="font-bold text-xl leading-snug tracking-tight text-card-foreground">{product.name}</h3>
                </div>

                <div className="mt-auto space-y-5">
                    <ProductVariantSelector
                        variants={product.variants}
                        selectedVariant={selectedVariant}
                        onSelect={setSelectedVariant}
                    />

                    <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/50">
                        <div className="text-2xl font-black text-primary tracking-tight">
                            {formatCurrency(selectedVariant.price)}
                        </div>

                        {quantity === 0 ? (
                            <Button
                                onClick={handleAddToCart}
                                size="sm"
                                className="rounded-full px-6 h-10 font-semibold shadow-md bg-orange-500 hover:bg-orange-600 text-white transition-all active:scale-95"
                            >
                                <Plus className="w-5 h-5 mr-1" />
                                Add
                            </Button>
                        ) : (
                            <div className="flex items-center gap-3 bg-secondary/80 rounded-full px-2 py-1 shadow-inner">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 rounded-full hover:bg-background shadow-sm"
                                    onClick={(e) => { e.stopPropagation(); handleDecrement(); }}
                                >
                                    <Minus className="w-4 h-4" />
                                </Button>
                                <span className="font-bold w-4 text-center text-lg">{quantity}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 rounded-full hover:bg-background shadow-sm"
                                    onClick={(e) => { e.stopPropagation(); handleIncrement(); }}
                                >
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
