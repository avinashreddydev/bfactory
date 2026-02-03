import { PolicyContent } from "@/components/legal/PolicyContent";

export default function TermsAndConditions() {
    return (
        <PolicyContent title="Terms and Conditions">
            <section className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Agreement to Terms</h3>
                    <p className="text-muted-foreground">
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Biryani Factory ("Company", “we”, “us”, or “our”), concerning your access to and use of our website.
                        You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these Terms of Use.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Intellectual Property Rights</h3>
                    <p className="text-muted-foreground">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">User Representations</h3>
                    <p className="text-muted-foreground">
                        By using the Site, you represent and warrant that:
                        (1) all registration information you submit will be true, accurate, current, and complete;
                        (2) you will maintain the accuracy of such information and promptly update such registration information as necessary;
                        (3) you have the legal capacity and you agree to comply with these Terms of Use;
                        (4) you are not a minor in the jurisdiction in which you reside.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Prohibited Activities</h3>
                    <p className="text-muted-foreground">
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Modifications and Interruptions</h3>
                    <p className="text-muted-foreground">
                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice.
                        We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-muted-foreground">
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        support@biryanifactory.com
                    </p>
                </div>
            </section>
        </PolicyContent>
    );
}
