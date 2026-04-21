import NextAuth from "next-auth";
import { authOptions } from "../../../lib/authOptions";

export { authOptions };
export { saveUserDataToDatabase } from "../../../lib/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
