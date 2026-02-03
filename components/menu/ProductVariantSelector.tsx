"use client";

import { Variant } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductVariantSelectorProps {
    variants: Variant[];
    selectedVariant: Variant;
    onSelect: (variant: Variant) => void;
}

export function ProductVariantSelector({
    variants,
    selectedVariant,
    onSelect,
}: ProductVariantSelectorProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
                <Button
                    key={variant.variant_id}
                    variant={selectedVariant.variant_id === variant.variant_id ? "default" : "outline"}
                    size="sm"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card click if nested
                        onSelect(variant);
                    }}
                    className={cn(
                        "flex-1 min-w-[80px]",
                        selectedVariant.variant_id === variant.variant_id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input hover:bg-accent hover:text-accent-foreground"
                    )}
                >
                    {variant.variant_name}
                </Button>
            ))}
        </div>
    );
}
