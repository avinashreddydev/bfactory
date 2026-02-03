"use client";

import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { useCartStore } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LoginDrawer } from "@/components/auth/LoginDrawer";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
    const { cart, totalPrice } = useCartStore();
    // TODO: Actual auth check using useSession
    const isAuthenticated = false; // Simulated for now, in real app use: const { data: session } = authClient.useSession();

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
                <h1 className="text-3xl font-bold text-center">Please log in to proceed with checkout</h1>
                <LoginDrawer trigger={<Button size="lg">Login / Sign Up</Button>} />
                <Link href="/">
                    <Button variant="outline">Return to Menu</Button>
                </Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
                <h1 className="text-3xl font-bold">Your cart is empty</h1>
                <Link href="/">
                    <Button>Return to Menu</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/30 pb-20 pt-10">
            <div className="container mx-auto px-4 max-w-5xl">
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Menu
                </Link>

                <h1 className="text-4xl font-bold mb-10">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Order Summary (Left on desktop) */}
                    <div className="space-y-6">
                        <div className="bg-card rounded-xl border p-6 space-y-6">
                            <h2 className="text-2xl font-semibold">Order Summary</h2>
                            <div className="space-y-4 divide-y">
                                {cart.map((item) => (
                                    <div key={item.itemId} className="flex gap-4 pt-4 first:pt-0">
                                        <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0">
                                            <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.product.name}</h3>
                                            <p className="text-sm text-muted-foreground">{item.variant.variant_name} x {item.quantity}</p>
                                        </div>
                                        <div className="font-semibold">
                                            {formatCurrency(item.variant.price * item.quantity)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-4 border-t flex justify-between items-center text-xl font-bold">
                                <span>Total</span>
                                <span>{formatCurrency(totalPrice())}</span>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Form */}
                    <div className="space-y-6">
                        <div className="bg-card rounded-xl border p-6">
                            <h2 className="text-2xl font-semibold mb-6">Delivery Details</h2>
                            {isAuthenticated ? (
                                <CheckoutForm />
                            ) : (
                                <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
                                    <p className="text-muted-foreground">Please login to complete your order</p>
                                    <LoginDrawer />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
