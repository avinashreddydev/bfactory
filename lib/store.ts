import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Variant {
    variant_id: string;
    variant_name: string;
    price: number;
}

export interface Product {
    product_id: string;
    name: string;
    image: string;
    active: boolean;
    hotsale: boolean;
    variants: Variant[];
}

export interface CartItem {
    itemId: string; // generated from product_id + variant_id
    product: Product;
    variant: Variant;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    cartOpen: boolean;
    selectedBranch: Branch | null;
    userLocation: { latitude: number; longitude: number } | null;
    addToCart: (product: Product, variant: Variant, quantity?: number) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, delta: number) => void;
    setCartOpen: (open: boolean) => void;
    clearCart: () => void;
    setSelectedBranch: (branch: Branch | null) => void;
    setUserLocation: (location: { latitude: number; longitude: number } | null) => void;
    totalItems: () => number;
    totalPrice: () => number;
}

export interface Branch {
    name: string;
    pincode: string;
    latitude: number;
    longitude: number;
    radius: number;
    address: string;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            cartOpen: false,
            selectedBranch: null,
            userLocation: null,

            addToCart: (product, variant, quantity = 1) => {
                const itemId = `${product.product_id}-${variant.variant_id}`;
                const currentCart = get().cart;
                const existingItem = currentCart.find((item) => item.itemId === itemId);

                if (existingItem) {
                    set({
                        cart: currentCart.map((item) =>
                            item.itemId === itemId
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                        cartOpen: true, // Auto-open cart on add
                    });
                } else {
                    set({
                        cart: [...currentCart, { itemId, product, variant, quantity }],
                        cartOpen: true, // Auto-open cart on add
                    });
                }
            },

            removeFromCart: (itemId) => {
                set({
                    cart: get().cart.filter((item) => item.itemId !== itemId),
                });
            },

            updateQuantity: (itemId, delta) => {
                const currentCart = get().cart;
                const mappedCart = currentCart.map((item) => {
                    if (item.itemId === itemId) {
                        const newQuantity = item.quantity + delta;
                        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
                    }
                    return item;
                });

                // Optional: Remove if quantity becomes 0? The user logic above keeps it at least 1.
                // If we want remove on 0, we'd need to filter.
                // Let's keep strict > 0 logic for updateQuantity, remove must be explicit via remove.

                set({ cart: mappedCart });
            },

            setCartOpen: (open) => set({ cartOpen: open }),

            clearCart: () => set({ cart: [] }),

            setSelectedBranch: (branch) => set({ selectedBranch: branch }),

            setUserLocation: (location) => set({ userLocation: location }),

            totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),

            totalPrice: () =>
                get().cart.reduce((acc, item) => acc + item.variant.price * item.quantity, 0),
        }),
        {
            name: 'biryani-cart-storage',
        }
    )
);
