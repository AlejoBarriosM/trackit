import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { getUserByEmail, verifyPassword } from "@/lib/model/userModel";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await getUserByEmail(credentials.email);

                if (!user) {
                    return null;
                }

                const isPasswordValid = await verifyPassword(user, credentials.password);

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                };
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token.sub!;
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
        signOut: '/',
        error: '/login'
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };