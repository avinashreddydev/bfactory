"use client";

import { useCartStore } from "@/lib/store";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"; // Wait, I might need to install scroll-area? I will check or just use overflow-auto.
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils"; // I'll create this helper or just format inline

function formatPrice(amount: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
}

export function CartSidebar() {
    const { cart, cartOpen, setCartOpen, updateQuantity, removeFromCart, totalPrice } = useCartStore();

    return (
        <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetContent side="left" className="w-[300px] sm:w-[540px] flex flex-col p-6">
                <SheetHeader className="mb-4">
                    <SheetTitle className="flex items-center gap-2 text-2xl font-bold">
                        <ShoppingBag className="w-6 h-6" />
                        Your Order
                    </SheetTitle>
                </SheetHeader>

                {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4">
                        <ShoppingBag className="w-16 h-16 opacity-20" />
                        <p className="text-lg">Your cart is empty</p>
                        <Button variant="outline" onClick={() => setCartOpen(false)}>
                            Browse Menu
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto -mx-6 px-6">
                            <div className="flex flex-col gap-6">
                                {cart.map((item) => (
                                    <div key={item.itemId} className="flex gap-4">
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-border">
                                            <Image
                                                src={item.product.image}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-semibold line-clamp-1">{item.product.name}</h4>
                                                <p className="text-sm text-muted-foreground">{item.variant.variant_name}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="font-medium">
                                                    {formatPrice(item.variant.price * item.quantity)}
                                                </div>
                                                <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-md hover:bg-background shadow-sm"
                                                        onClick={() => {
                                                            if (item.quantity === 1) {
                                                                removeFromCart(item.itemId);
                                                            } else {
                                                                updateQuantity(item.itemId, -1);
                                                            }
                                                        }}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </Button>
                                                    <span className="text-xs w-4 text-center font-medium">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-md hover:bg-background shadow-sm"
                                                        onClick={() => updateQuantity(item.itemId, 1)}
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t pt-6 mt-6 space-y-4">
                            <div className="flex justify-between items-center text-lg font-bold">
                                <span>Total</span>
                                <span>{formatPrice(totalPrice())}</span>
                            </div>
                            <SheetClose asChild>
                                <Link href="/checkout" passHref className="w-full">
                                    <Button className="w-full h-12 text-base" onClick={() => setCartOpen(false)}>
                                        Checkout
                                    </Button>
                                </Link>
                            </SheetClose>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
