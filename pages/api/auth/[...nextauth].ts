import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const useSecureCookies = !!process.env.VERCEL_URL;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: "anything",
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain: ".next-auth-eight-chi.vercel.app",
        secure: useSecureCookies,
      },
    },
  },
});
