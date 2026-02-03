"use client";

import { useEffect, useState } from "react";
import locations from "@/data/locations";
import { calculateDistance } from "@/lib/distance";
import { useCartStore } from "@/lib/store";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Smile } from "lucide-react";
import { toast } from "sonner";

export function LocationProvider() {
    const { selectedBranch, userLocation, setSelectedBranch, setUserLocation } = useCartStore();
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [detectedBranch, setDetectedBranch] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // Effect to check location on mount if not already set
    useEffect(() => {
        // If we already have a selected branch, do nothing (or we could re-verify?)
        // Let's assume selection persists until cleared.
        if (selectedBranch) return;

        if ("geolocation" in navigator) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    checkNearestStore(latitude, longitude);
                    setLoading(false);
                },
                (error) => {
                    console.error("Error getting location", error);
                    setLoading(false);
                    // Optional: Show manual selector if permission denied
                }
            );
        }
    }, [selectedBranch, setUserLocation]);

    const checkNearestStore = (lat: number, lng: number) => {
        let nearest = null;
        let minDiff = Infinity;

        locations.forEach((loc) => {
            const dist = calculateDistance(lat, lng, loc.latitude, loc.longitude);
            // Check if within radius
            if (dist <= loc.radius) {
                // If multiple are in radius, Pick closest?
                if (dist < minDiff) {
                    minDiff = dist;
                    nearest = loc;
                }
            }
        });

        if (nearest) {
            setDetectedBranch(nearest);
            setShowSuccessDialog(true);
        } else {
            setShowInviteDialog(true);
        }
    };

    const handleConfirmStore = () => {
        setSelectedBranch(detectedBranch);
        setShowSuccessDialog(false);
        toast.success(`Welcome! You are shopping at ${detectedBranch.name}`);
    };

    const handleVoteForLocation = () => {
        // Logic to save vote (simulated)
        toast.success("Thanks! We've noted your interest in this location.");
        setShowInviteDialog(false);
    };

    return (
        <>
            {/* Success Dialog: Store Found */}
            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Store Found Nearby!</DialogTitle>
                        <DialogDescription>
                            Great news! We found a Biryani Factory outlet near you.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center gap-4 py-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">{detectedBranch?.name}</h4>
                            <p className="text-sm text-muted-foreground">{detectedBranch?.address}</p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleConfirmStore} className="w-full">
                            Start Ordering
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Invite Dialog: No Store Found */}
            <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>We're not there yet...</DialogTitle>
                        <DialogDescription>
                            It looks like we don't deliver to your current location. But we'd love to come to you!
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                        <div className="bg-orange-100 p-4 rounded-full">
                            <Smile className="w-8 h-8 text-orange-500" />
                        </div>
                        <p className="font-medium">
                            Invite Biryani Factory to your location?
                        </p>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowInviteDialog(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleVoteForLocation}>
                            Please Come Here!
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
