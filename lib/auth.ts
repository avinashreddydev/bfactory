import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { phoneNumber } from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema
        }
    }),
    plugins: [
        phoneNumber({
            sendOTP: async ({ phoneNumber, code }, request) => {
                console.log(`Sending OTP ${code} to ${phoneNumber}`);
                // In production, integrate with SMS provider
            },
            signUpOnVerification: {
                getTempEmail: (phoneNumber) => {
                    return `${phoneNumber}@bfactory.app` // using a simpler domain or as requested
                },
                getTempName: (phoneNumber) => {
                    return phoneNumber
                }
            }
        }),
    ],
});