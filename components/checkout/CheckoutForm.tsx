"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useCartStore } from "@/lib/store";

export function CheckoutForm() {
    const { clearCart } = useCartStore();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success("Order placed successfully! We will contact you shortly.");

        // Clear cart and redirect (placeholder)
        clearCart();
        setLoading(false);

        // In a real app, we'd redirect to a success page
        window.location.href = "/";
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required placeholder="Doe" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input id="address" required placeholder="Flat No, Street, Landmark" />
                </div>
            </div>

            <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={loading}>
                {loading ? "Processing..." : "Place Order"}
            </Button>
        </form>
    );
}
