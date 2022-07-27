import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface NextAuthConfig {
  clientId: string;
  clientSecret: string;
}

export default NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
});
