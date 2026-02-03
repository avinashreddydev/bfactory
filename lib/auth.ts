import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { phoneNumber } from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    plugins: [
        phoneNumber({
            sendOTP: async ({ phoneNumber, code }, request) => {
                console.log(`Sending OTP ${code} to ${phoneNumber}`);
                // In production, integrate with SMS provider
            },
        }),
    ],
});