import NextAuth from "next-auth";
import prismadb from "../../../lib/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      params: { ux_mode: "popup" },
      profile(profile) {
        if (!profile.email.endsWith("@brilworks.com")) {
          throw new Error(
            "You are not allowed to login using Google SSO with this email domain."
          );
        }

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role:
            profile.email === process.env.SENDGRID_DEFAULT_FROM_EMAIL
              ? "ADMIN"
              : "USER",
        };
      },
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
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
  debug: process.env.NODE_ENV === "production",
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signOut: "/login",
    error: "/not-found", // Error code passed in query string as ?error=
  },
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
      const isNewProvider = !existingUser.loginProvider?.includes(
        user.account.provider
      );

      if (isNewProvider) {
        await prismadb.user.update({
          where: { email: email },
          data: {
            loginProvider: user.account.provider,
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
          loginProvider: user.account.provider,
          role: role,
        },
      });
    }
  } catch (error) {
    console.error("Error saving user data to the database:", error);
  }
}
