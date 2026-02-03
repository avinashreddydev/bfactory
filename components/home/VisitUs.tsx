import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import locations from "@/data/locations";
import { Button } from "@/components/ui/button";

export function VisitUs() {
    return (
        <section className="container mx-auto px-4 py-16 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Visit Us</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Drop by one of our locations to experience the authentic taste of Biryani Factory.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locations.map((location) => (
                    <div
                        key={location.name}
                        className="rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <div className="p-6 flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-xl">{location.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {location.pincode}
                                    </p>
                                </div>
                                <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {location.address}
                            </p>
                        </div>

                        <div className="p-6 pt-0 mt-auto flex gap-3">
                            {location.google_maps_url && (
                                <Button asChild variant="default" className="w-full">
                                    <Link href={location.google_maps_url} target="_blank" rel="noreferrer">
                                        <MapPin className="mr-2 h-4 w-4" />
                                        Get Directions
                                    </Link>
                                </Button>
                            )}
                            {location.google_business_id && (
                                <Button asChild variant="outline" size="icon" title="View on Google">
                                    <Link href={location.google_business_id} target="_blank" rel="noreferrer">
                                        <ExternalLink className="h-4 w-4" />
                                        <span className="sr-only">View on Google</span>
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
