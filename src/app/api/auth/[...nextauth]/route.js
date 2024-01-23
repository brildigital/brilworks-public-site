import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import prismadb from "../../../lib/prismadb.js";

const handler = NextAuth({
  session: {
    jwt: true,
    signingKey: process.env.NEXT_PUBLIC_JWT_SIGNING_SECRET_KEY,
  },
  providers: [
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET || "",
      client: { token_endpoint_auth_method: "client_secret_post" },
      issuer: "https://www.linkedin.com",
      profile: (profile) => ({
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      }),
      wellKnown:
        "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      await saveUserDataToDatabase(user);
      return true;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (profile) {
        Object.assign(token, {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        });
      }
      return token;
    },
    async session({ session, token }) {
      const userToken = token?.token?.user;
      if (userToken) {
        session.user = {
          name: userToken.name,
          email: userToken.email,
          image: userToken.image,
        };
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };

async function saveUserDataToDatabase(user) {
  try {
    const { email, id, name, image } = user.user;
    const existingUser = await prismadb.User.findFirst({
      where: { email: email },
    });

    if (existingUser) {
      const isNewProvider = !existingUser.socialAccounts?.includes(
        user.account.provider
      );

      if (isNewProvider) {
        await prismadb.User.update({
          where: { email: email },
          data: {
            socialAccounts: {
              push: user.account.provider,
            },
          },
        });
      }
    } else {
      await prismadb.user.create({
        data: {
          userId: id,
          email: email,
          name: name,
          profilePicture: image,
          socialAccounts: [user.account.provider],
        },
      });
    }
  } catch (error) {
    console.error("Error saving user data to the database:", error);
  }
}
