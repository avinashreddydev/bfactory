import { PolicyContent } from "@/components/legal/PolicyContent";

export default function ReturnPolicy() {
    return (
        <PolicyContent title="Return Policy">
            <section className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Order Cancellation Rights</h3>
                    <p className="text-muted-foreground">
                        You are entitled to cancel your order within 5 minutes of placing it without giving any reason for doing so.
                        After preparation has started, cancellations are not guaranteed and may be subject to a fee.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Returning Goods</h3>
                    <p className="text-muted-foreground">
                        As we deal with food products, we do not accept returns of any food items once delivered, for health and safety reasons.
                        We reserve the right to refuse returns of any merchandise that does not meet the return conditions in our sole discretion.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Gifts</h3>
                    <p className="text-muted-foreground">
                        If the goods were marked as a gift when purchased and then shipped directly to you, you'll receive a gift credit for the value of your return.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-muted-foreground">
                        If you have any questions about our Returns and Refunds Policy, please contact us:
                        <br />By email: support@biryanifactory.com
                    </p>
                </div>
            </section>
        </PolicyContent>
    );
}
