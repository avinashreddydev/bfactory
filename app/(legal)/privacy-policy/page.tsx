import { PolicyContent } from "@/components/legal/PolicyContent";

export default function PrivacyPolicy() {
    return (
        <PolicyContent title="Privacy Policy">
            <section className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Consent</h3>
                    <p className="text-muted-foreground">
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Information we collect</h3>
                    <p className="text-muted-foreground">
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        When you register for an Account, we may ask for your contact information, including items such as name, address, email address, and telephone number.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">How we use your information</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Log Files</h3>
                    <p className="text-muted-foreground">
                        Biryani Factory follows a standard procedure of using log files. These files log visitors when they visit websites.
                        The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Cookies and Web Beacons</h3>
                    <p className="text-muted-foreground">
                        Like any other website, Biryani Factory uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
                        The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                    </p>
                </div>
            </section>
        </PolicyContent>
    );
}
