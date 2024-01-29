import NextAuth from "next-auth";
import prismadb from "../../../lib/prismadb";
// import { PrismaAdapter } from "@next-auth/prismadb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.email === process.env.SENDGRID_DEFAULT_FROM_EMAIL ? "ADMIN" : "GUEST",
        };
      },
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
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("User does not exist!");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      await saveUserDataToDatabase(user);
      return true;
    },
    jwt: async ({ token, user }) => {
      if (token?.email) {
        token.user = await prismadb.user.findUnique({
          where: {
            email: token.email,
          },
        });
        return token;
      }
    },
    session: async ({ session, token }) => {
      const userToken = token?.user;
      if (userToken) {
        session.user = {
          name: userToken?.name,
          email: userToken?.email,
          image: userToken?.profilePicture,
          role: userToken?.role,
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

export async function saveUserDataToDatabase(user) {
  try {
    const { email, id, name, image, role } = user.user;
    const existingUser = await prismadb.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      const isNewProvider = !existingUser.socialAccounts?.includes(
        user.account.provider
      );

      if (isNewProvider) {
        await prismadb.user.update({
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
          role: role,
        },
      });
    }
  } catch (error) {
    console.error("Error saving user data to the database:", error);
  }
}
