import { PolicyContent } from "@/components/legal/PolicyContent";

export default function ShippingPolicy() {
    return (
        <PolicyContent title="Shipping Policy">
            <section className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Shipment processing time</h3>
                    <p className="text-muted-foreground">
                        All orders are processed and delivered within 45-60 minutes for local delivery areas.
                        During peak hours, weekends, or holidays, delivery times may be slightly extended.
                        If there will be a significant delay in shipment of your order, we will contact you via email or telephone.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Delivery Charges</h3>
                    <p className="text-muted-foreground">
                        Delivery charges are calculated based on the distance between the restaurant and the delivery address.
                        You will be able to see the exact delivery fee at checkout before making the payment.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Shipment confirmation and order tracking</h3>
                    <p className="text-muted-foreground">
                        You will receive a confirmation email and SMS once your order has been placed.
                        You can track your order status in real-time through our website or app under the "My Orders" section.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Damages</h3>
                    <p className="text-muted-foreground">
                        Biryani Factory is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact us immediately to file a claim.
                        Please save all packaging materials and damaged goods before filing a claim.
                    </p>
                </div>
            </section>
        </PolicyContent>
    );
}
